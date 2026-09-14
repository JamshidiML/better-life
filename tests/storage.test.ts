import { describe, expect, it, vi } from 'vitest';
import { createSupportPlan } from '../src/features/support-plan/model';
import {
  BrowserSupportPlanStorage,
  SUPPORT_PLAN_STORAGE_KEY,
} from '../src/shared/storage/supportPlanStorage';

const localPlan = createSupportPlan(
  {
    goal: 'Follow my plan',
    broadContext: 'When I feel distracted',
    primaryAction: 'pause',
    fallbackAction: 'no_fallback',
  },
  'save_local',
);

describe('browser support plan storage', () => {
  it('creates, reads, updates, and clears one minimal local plan', () => {
    const storage = new BrowserSupportPlanStorage();
    expect(storage.read()).toEqual({ status: 'empty' });

    storage.create(localPlan);
    expect(storage.read()).toEqual({ status: 'ready', plan: localPlan });

    const updated = { ...localPlan, goal: 'Updated goal' };
    storage.update(updated);
    expect(storage.read()).toEqual({ status: 'ready', plan: updated });

    storage.clear();
    expect(storage.read()).toEqual({ status: 'empty' });
  });

  it('does not crash on malformed JSON', () => {
    window.localStorage.setItem(SUPPORT_PLAN_STORAGE_KEY, '{bad json');
    const storage = new BrowserSupportPlanStorage();
    expect(storage.read()).toEqual({
      status: 'corrupt',
      reason: 'malformed',
    });
  });

  it('reports an unsupported schema without silently deleting it', () => {
    window.localStorage.setItem(
      SUPPORT_PLAN_STORAGE_KEY,
      JSON.stringify({ ...localPlan, schemaVersion: 2 }),
    );
    const storage = new BrowserSupportPlanStorage();
    expect(storage.read()).toEqual({
      status: 'corrupt',
      reason: 'unsupported_schema',
    });
    expect(
      window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY),
    ).not.toBeNull();
  });

  it('refuses to write a session-only plan to durable storage', () => {
    const storage = new BrowserSupportPlanStorage();
    const useOncePlan = { ...localPlan, persistenceMode: 'use_once' as const };
    expect(storage.create(useOncePlan)).toEqual({
      ok: false,
      reason: 'invalid_plan',
    });
    expect(storage.read()).toEqual({ status: 'empty' });
  });

  it('catches denied access to the storage property for every operation', () => {
    const storage = new BrowserSupportPlanStorage();
    vi.spyOn(window, 'localStorage', 'get').mockImplementation(() => {
      throw new DOMException('Unavailable', 'SecurityError');
    });
    expect(storage.read()).toEqual({ status: 'unavailable' });
    expect(storage.create(localPlan)).toEqual({
      ok: false,
      reason: 'unavailable',
    });
    expect(storage.update(localPlan)).toEqual({
      ok: false,
      reason: 'unavailable',
    });
    expect(storage.clear()).toEqual({ ok: false, reason: 'unavailable' });
  });

  it('distinguishes a getItem failure from malformed data', () => {
    vi.spyOn(window.localStorage, 'getItem').mockImplementation(() => {
      throw new DOMException('Unavailable', 'SecurityError');
    });
    expect(new BrowserSupportPlanStorage().read()).toEqual({
      status: 'unavailable',
    });
  });

  it('reports a failed write without replacing the existing plan', () => {
    const storage = new BrowserSupportPlanStorage();
    storage.create(localPlan);
    vi.spyOn(window.localStorage, 'setItem').mockImplementation(() => {
      throw new DOMException('Full', 'QuotaExceededError');
    });
    expect(storage.update({ ...localPlan, goal: 'Temporary edit' })).toEqual({
      ok: false,
      reason: 'unavailable',
    });
    expect(storage.read()).toEqual({ status: 'ready', plan: localPlan });
  });

  it('reports a removeItem failure without deleting the existing plan', () => {
    const storage = new BrowserSupportPlanStorage();
    storage.create(localPlan);
    vi.spyOn(window.localStorage, 'removeItem').mockImplementation(() => {
      throw new DOMException('Unavailable', 'SecurityError');
    });
    expect(storage.clear()).toEqual({ ok: false, reason: 'unavailable' });
    expect(storage.read()).toEqual({ status: 'ready', plan: localPlan });
  });

  it('does not confirm deletion if verification fails or the key remains', () => {
    const storage = new BrowserSupportPlanStorage();
    storage.create(localPlan);
    const removal = vi
      .spyOn(window.localStorage, 'removeItem')
      .mockImplementation(() => {});
    expect(storage.clear()).toEqual({ ok: false, reason: 'unavailable' });
    removal.mockRestore();
    vi.spyOn(window.localStorage, 'getItem').mockImplementation(() => {
      throw new DOMException('Unavailable', 'SecurityError');
    });
    expect(storage.clear()).toEqual({ ok: false, reason: 'unavailable' });
  });

  it('confirms absence of only the plan key and leaves unrelated data intact', () => {
    const storage = new BrowserSupportPlanStorage();
    storage.create(localPlan);
    window.localStorage.setItem('unrelated', 'synthetic');
    expect(storage.clear()).toEqual({ ok: true });
    expect(window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY)).toBeNull();
    expect(window.localStorage.getItem('unrelated')).toBe('synthetic');
  });
});

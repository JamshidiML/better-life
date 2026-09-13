import { describe, expect, it } from 'vitest';
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
    const storage = new BrowserSupportPlanStorage(window.localStorage);
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
    const storage = new BrowserSupportPlanStorage(window.localStorage);
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
    const storage = new BrowserSupportPlanStorage(window.localStorage);
    expect(storage.read()).toEqual({
      status: 'corrupt',
      reason: 'unsupported_schema',
    });
    expect(
      window.localStorage.getItem(SUPPORT_PLAN_STORAGE_KEY),
    ).not.toBeNull();
  });

  it('refuses to write a session-only plan to durable storage', () => {
    const storage = new BrowserSupportPlanStorage(window.localStorage);
    const useOncePlan = { ...localPlan, persistenceMode: 'use_once' as const };
    expect(() => storage.create(useOncePlan)).toThrow(
      'Only a valid local support plan can be saved.',
    );
    expect(storage.read()).toEqual({ status: 'empty' });
  });
});

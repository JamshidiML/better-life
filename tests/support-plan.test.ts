import { describe, expect, it } from 'vitest';
import {
  createSupportPlan,
  EMPTY_PLAN_DRAFT,
  isCompleteDraft,
  MAX_CONTEXT_LENGTH,
  MAX_GOAL_LENGTH,
  SUPPORT_PLAN_SCHEMA_VERSION,
  validateSupportPlan,
  type PlanDraft,
} from '../src/features/support-plan/model';

const validDraft: PlanDraft = {
  goal: 'Stay focused',
  broadContext: 'When using my phone',
  primaryAction: 'change_environment',
  fallbackAction: 'short_activity',
};

describe('support plan model', () => {
  it('creates a trimmed, versioned plan from a complete draft', () => {
    const plan = createSupportPlan(
      { ...validDraft, goal: '  Stay focused  ' },
      'use_once',
    );

    expect(plan).toEqual({
      schemaVersion: SUPPORT_PLAN_SCHEMA_VERSION,
      goal: 'Stay focused',
      broadContext: 'When using my phone',
      primaryAction: 'change_environment',
      fallbackAction: 'short_activity',
      persistenceMode: 'use_once',
    });
  });

  it('rejects an incomplete draft', () => {
    expect(isCompleteDraft(EMPTY_PLAN_DRAFT)).toBe(false);
    expect(() => createSupportPlan(EMPTY_PLAN_DRAFT, 'use_once')).toThrow(
      'Support plan is incomplete or invalid.',
    );
  });

  it('rejects text above the explicit bounds', () => {
    expect(
      validateSupportPlan({
        ...createSupportPlan(validDraft, 'save_local'),
        goal: 'g'.repeat(MAX_GOAL_LENGTH + 1),
      }),
    ).toEqual({ ok: false, reason: 'malformed' });
    expect(
      validateSupportPlan({
        ...createSupportPlan(validDraft, 'save_local'),
        broadContext: 'c'.repeat(MAX_CONTEXT_LENGTH + 1),
      }),
    ).toEqual({ ok: false, reason: 'malformed' });
  });

  it('rejects unknown action identifiers', () => {
    expect(
      validateSupportPlan({
        ...createSupportPlan(validDraft, 'save_local'),
        primaryAction: 'unknown_action',
      }),
    ).toEqual({ ok: false, reason: 'malformed' });
  });

  it('separates unsupported schemas from malformed records', () => {
    expect(
      validateSupportPlan({
        ...createSupportPlan(validDraft, 'save_local'),
        schemaVersion: 99,
      }),
    ).toEqual({ ok: false, reason: 'unsupported_schema' });
    expect(validateSupportPlan('not a record')).toEqual({
      ok: false,
      reason: 'malformed',
    });
  });
});

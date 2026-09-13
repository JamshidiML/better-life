export const SUPPORT_PLAN_SCHEMA_VERSION = 1 as const;
export const MAX_GOAL_LENGTH = 120;
export const MAX_CONTEXT_LENGTH = 120;

export const SUPPORT_ACTION_IDS = [
  'pause',
  'change_environment',
  'short_activity',
  'write_what_matters',
  'contact_trusted_person',
  'continue_without_action',
] as const;

export type SupportActionId = (typeof SUPPORT_ACTION_IDS)[number];
export type FallbackAction =
  SupportActionId | 'close_better_life' | 'no_fallback';
export type PersistenceMode = 'use_once' | 'save_local';

export interface PlanDraft {
  goal: string;
  broadContext: string;
  primaryAction: SupportActionId | '';
  fallbackAction: FallbackAction | '';
}

export interface SupportPlan {
  schemaVersion: typeof SUPPORT_PLAN_SCHEMA_VERSION;
  goal: string;
  broadContext: string;
  primaryAction: SupportActionId;
  fallbackAction: FallbackAction;
  persistenceMode: PersistenceMode;
}

export type PlanValidationResult =
  | { ok: true; plan: SupportPlan }
  | { ok: false; reason: 'malformed' | 'unsupported_schema' };

export const EMPTY_PLAN_DRAFT: PlanDraft = {
  goal: '',
  broadContext: '',
  primaryAction: '',
  fallbackAction: '',
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isBoundedText = (value: unknown, maxLength: number): value is string =>
  typeof value === 'string' &&
  value.trim().length > 0 &&
  value.length <= maxLength;

const isSupportAction = (value: unknown): value is SupportActionId =>
  typeof value === 'string' &&
  SUPPORT_ACTION_IDS.includes(value as SupportActionId);

const isFallbackAction = (value: unknown): value is FallbackAction =>
  isSupportAction(value) ||
  value === 'close_better_life' ||
  value === 'no_fallback';

const isPersistenceMode = (value: unknown): value is PersistenceMode =>
  value === 'use_once' || value === 'save_local';

export function createSupportPlan(
  draft: PlanDraft,
  persistenceMode: PersistenceMode,
): SupportPlan {
  const candidate = {
    schemaVersion: SUPPORT_PLAN_SCHEMA_VERSION,
    goal: draft.goal.trim(),
    broadContext: draft.broadContext.trim(),
    primaryAction: draft.primaryAction,
    fallbackAction: draft.fallbackAction,
    persistenceMode,
  };
  const result = validateSupportPlan(candidate);

  if (!result.ok) {
    throw new Error('Support plan is incomplete or invalid.');
  }

  return result.plan;
}

export function validateSupportPlan(value: unknown): PlanValidationResult {
  if (!isRecord(value)) {
    return { ok: false, reason: 'malformed' };
  }

  if (value.schemaVersion !== SUPPORT_PLAN_SCHEMA_VERSION) {
    return { ok: false, reason: 'unsupported_schema' };
  }

  if (
    !isBoundedText(value.goal, MAX_GOAL_LENGTH) ||
    !isBoundedText(value.broadContext, MAX_CONTEXT_LENGTH) ||
    !isSupportAction(value.primaryAction) ||
    !isFallbackAction(value.fallbackAction) ||
    !isPersistenceMode(value.persistenceMode)
  ) {
    return { ok: false, reason: 'malformed' };
  }

  return {
    ok: true,
    plan: {
      schemaVersion: SUPPORT_PLAN_SCHEMA_VERSION,
      goal: value.goal.trim(),
      broadContext: value.broadContext.trim(),
      primaryAction: value.primaryAction,
      fallbackAction: value.fallbackAction,
      persistenceMode: value.persistenceMode,
    },
  };
}

export function isCompleteDraft(draft: PlanDraft): boolean {
  return (
    isBoundedText(draft.goal, MAX_GOAL_LENGTH) &&
    isBoundedText(draft.broadContext, MAX_CONTEXT_LENGTH) &&
    isSupportAction(draft.primaryAction) &&
    isFallbackAction(draft.fallbackAction)
  );
}

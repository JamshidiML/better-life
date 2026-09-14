import {
  validateSupportPlan,
  type SupportPlan,
} from '../../features/support-plan/model';

export const SUPPORT_PLAN_STORAGE_KEY = 'better-life.vs01.support-plan';

export type StoredPlanReadResult =
  | { status: 'empty' }
  | { status: 'ready'; plan: SupportPlan }
  | { status: 'unavailable' }
  | { status: 'corrupt'; reason: 'malformed' | 'unsupported_schema' };

export type StorageChangeResult =
  { ok: true } | { ok: false; reason: 'unavailable' | 'invalid_plan' };

export interface SupportPlanStorage {
  read(): StoredPlanReadResult;
  create(plan: SupportPlan): StorageChangeResult;
  update(plan: SupportPlan): StorageChangeResult;
  clear(): StorageChangeResult;
}

export class BrowserSupportPlanStorage implements SupportPlanStorage {
  constructor(
    private readonly getStorage: () => Storage = () => window.localStorage,
  ) {}

  read(): StoredPlanReadResult {
    let raw: string | null;
    try {
      raw = this.getStorage().getItem(SUPPORT_PLAN_STORAGE_KEY);
    } catch {
      return { status: 'unavailable' };
    }
    if (raw === null) {
      return { status: 'empty' };
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return { status: 'corrupt', reason: 'malformed' };
    }

    const result = validateSupportPlan(parsed);
    if (!result.ok) {
      return { status: 'corrupt', reason: result.reason };
    }

    if (result.plan.persistenceMode !== 'save_local') {
      return { status: 'corrupt', reason: 'malformed' };
    }

    return { status: 'ready', plan: result.plan };
  }

  create(plan: SupportPlan): StorageChangeResult {
    return this.write(plan);
  }

  update(plan: SupportPlan): StorageChangeResult {
    return this.write(plan);
  }

  clear(): StorageChangeResult {
    try {
      const storage = this.getStorage();
      storage.removeItem(SUPPORT_PLAN_STORAGE_KEY);
      // Confirm removal by reading back this plan's key, not other site data.
      return storage.getItem(SUPPORT_PLAN_STORAGE_KEY) === null
        ? { ok: true }
        : { ok: false, reason: 'unavailable' };
    } catch {
      return { ok: false, reason: 'unavailable' };
    }
  }

  private write(plan: SupportPlan): StorageChangeResult {
    const result = validateSupportPlan(plan);
    if (!result.ok || result.plan.persistenceMode !== 'save_local') {
      return { ok: false, reason: 'invalid_plan' };
    }

    try {
      this.getStorage().setItem(
        SUPPORT_PLAN_STORAGE_KEY,
        JSON.stringify(result.plan),
      );
      return { ok: true };
    } catch {
      return { ok: false, reason: 'unavailable' };
    }
  }
}

import {
  validateSupportPlan,
  type SupportPlan,
} from '../../features/support-plan/model';

export const SUPPORT_PLAN_STORAGE_KEY = 'better-life.vs01.support-plan';

export type StoredPlanReadResult =
  | { status: 'empty' }
  | { status: 'ready'; plan: SupportPlan }
  | { status: 'corrupt'; reason: 'malformed' | 'unsupported_schema' };

export interface SupportPlanStorage {
  read(): StoredPlanReadResult;
  create(plan: SupportPlan): void;
  update(plan: SupportPlan): void;
  clear(): void;
}

export class BrowserSupportPlanStorage implements SupportPlanStorage {
  constructor(private readonly storage: Storage) {}

  read(): StoredPlanReadResult {
    const raw = this.storage.getItem(SUPPORT_PLAN_STORAGE_KEY);
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

  create(plan: SupportPlan): void {
    this.write(plan);
  }

  update(plan: SupportPlan): void {
    this.write(plan);
  }

  clear(): void {
    this.storage.removeItem(SUPPORT_PLAN_STORAGE_KEY);
  }

  private write(plan: SupportPlan): void {
    const result = validateSupportPlan(plan);
    if (!result.ok || result.plan.persistenceMode !== 'save_local') {
      throw new Error('Only a valid local support plan can be saved.');
    }

    this.storage.setItem(SUPPORT_PLAN_STORAGE_KEY, JSON.stringify(result.plan));
  }
}

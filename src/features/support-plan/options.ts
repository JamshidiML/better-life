import type { FallbackAction, PlanDraft, SupportActionId } from './model';

export interface ChoiceOption<T extends string> {
  id: T;
  label: string;
  detail: string;
}

export const GOAL_OPTIONS = [
  'Stay focused',
  'Avoid an unwanted habit',
  'Handle an urge differently',
  'Reduce distraction',
  'Follow through on a decision',
] as const;

export const CONTEXT_OPTIONS = [
  'When I feel distracted',
  'When I am alone',
  'When I am stressed',
  'At a certain time of day',
  'When using my phone',
] as const;

export const SUPPORT_ACTIONS: ChoiceOption<SupportActionId>[] = [
  {
    id: 'pause',
    label: 'Pause for a moment',
    detail: 'Give yourself a little space before the next choice.',
  },
  {
    id: 'change_environment',
    label: 'Change environment',
    detail: 'Move to a different place or put the device down.',
  },
  {
    id: 'short_activity',
    label: 'Do a short alternative activity',
    detail: 'Choose one brief, ordinary task you can do now.',
  },
  {
    id: 'write_what_matters',
    label: 'Write one sentence about what matters now',
    detail: 'Use your own words. Nothing is sent anywhere.',
  },
  {
    id: 'contact_trusted_person',
    label: 'Contact someone I already trust',
    detail: 'You decide whether and how to contact them. Better Life will not.',
  },
  {
    id: 'continue_without_action',
    label: 'Continue without an action',
    detail: 'Skip this step without judgment.',
  },
];

export const FALLBACK_CHOICES: ChoiceOption<FallbackAction>[] = [
  ...SUPPORT_ACTIONS.filter(
    (action) => action.id !== 'continue_without_action',
  ),
  {
    id: 'close_better_life',
    label: 'Close Better Life',
    detail: 'End the guide and choose what to do next yourself.',
  },
  {
    id: 'no_fallback',
    label: 'Continue with no fallback',
    detail: 'Keep only the first option.',
  },
];

export const DEMO_PLANS: Array<{
  name: string;
  description: string;
  draft: PlanDraft;
}> = [
  {
    name: 'Focus',
    description: 'A neutral phone-distraction example.',
    draft: {
      goal: 'Stay focused for the next 30 minutes.',
      broadContext: 'When I reach for my phone.',
      primaryAction: 'change_environment',
      fallbackAction: 'short_activity',
    },
  },
  {
    name: 'Routine',
    description: 'A neutral follow-through example.',
    draft: {
      goal: 'Follow my evening plan.',
      broadContext: 'When I feel like postponing it.',
      primaryAction: 'short_activity',
      fallbackAction: 'write_what_matters',
    },
  },
];

export const actionLabel = (action: SupportActionId): string =>
  SUPPORT_ACTIONS.find((option) => option.id === action)?.label ?? action;

export const fallbackLabel = (fallback: FallbackAction): string =>
  FALLBACK_CHOICES.find((option) => option.id === fallback)?.label ?? fallback;

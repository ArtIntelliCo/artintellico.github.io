export const serviceKeys = [
  'concept',
  'saas',
  'web',
  'mobile',
  'ai',
  'crm',
  'cloud',
  'api',
  'support',
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

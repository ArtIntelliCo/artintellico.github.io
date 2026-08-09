/** Названия брендов не переводятся и одинаковы во всех локалях. */
export const partners = ['Red Hat', 'Microsoft', 'Veeam', 'VMware', 'Dell'] as const;

export type Partner = (typeof partners)[number];

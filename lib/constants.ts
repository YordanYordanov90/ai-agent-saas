export const BILLING_PLANS = {
  PRO: "pro_plan",
} as const;

export type BillingPlan = typeof BILLING_PLANS[keyof typeof BILLING_PLANS];

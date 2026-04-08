export interface Plan {
  id: number
  name: string
  price: number
  billedPrice: number
  originalPrice: number
  savings: number
  features: PlanFeature[]
}

export interface PlanFeature {
  text: string
  sub?: string
}

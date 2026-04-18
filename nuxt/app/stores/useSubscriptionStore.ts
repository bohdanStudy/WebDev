import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Plan } from '~/types/plans'

export const useSubscriptionStore = defineStore('subscription', () => {
  const plan = ref<Plan | null>(null)

  function setPlan(newPlan: Plan) {
    plan.value = newPlan
  }

  function clearPlan() {
    plan.value = null
  }

  return { plan, setPlan, clearPlan }
})

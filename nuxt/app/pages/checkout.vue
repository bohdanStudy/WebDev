<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-6xl mx-auto p-6 md:p-12">

      <div class="mb-6">
        <NuxtLink to="/" class="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm">
          <span>&lt;&lt;</span> back
        </NuxtLink>
      </div>

      <div class="mb-10">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          You're Almost In - Start Your 3-Day Free Trial Now!
        </h1>
        <p class="text-gray-600 text-lg">
          Set up your account to gain instant access! You won't be charged if you decide to cancel within 3 days
        </p>
      </div>

      <div v-if="plan" class="flex flex-col lg:flex-row gap-8 items-start justify-center">

        <div class="w-full lg:max-w-sm border border-gray-100 rounded-xl shadow-xl overflow-hidden bg-white lg:sticky lg:top-10">
          <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-green-500 to-cyan-400"></div>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ plan.name }}</h2>
            <div class="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded mb-4">
              3-days free then:
            </div>
            <div class="flex items-baseline mb-1">
              <span class="text-4xl font-black text-gray-800">${{ plan.price }}</span>
              <span class="text-gray-500 ml-1 font-medium">/month</span>
            </div>
            <p class="text-gray-400 text-sm mb-6">
              billed yearly at <span class="line-through">${{ plan.originalPrice }}</span>
              <span class="font-bold text-gray-700 ml-1">${{ plan.billedPrice }}</span>
            </p>
            <div class="inline-block bg-gray-100 text-green-500 text-xs font-semibold px-3 py-2 rounded mb-4">
              ${{ plan.savings }} in savings
            </div>
            <hr class="border-gray-100 mb-6">
            <ul class="space-y-4">
              <li v-for="feature in plan.features" :key="feature.text" class="flex items-start gap-3">
                <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 shrink-0" style="font-size: 18px;"></iconify-icon>
                <div>
                  <p class="text-gray-700 text-sm font-medium">{{ feature.text }}</p>
                  <p v-if="feature.sub" class="text-gray-400 text-xs mt-1">{{ feature.sub }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full lg:max-w-lg">
          <div class="border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-8">
              <h2 class="text-xl font-bold text-gray-700 mb-6">Order Summary</h2>

              <div class="flex justify-between py-1 mb-3">
                <span class="text-gray-600 text-sm font-medium">Annual Plan</span>
                <span class="text-gray-800 text-sm font-medium">${{ plan.billedPrice.toFixed(2) }}</span>
              </div>

              <hr class="border-gray-200 mb-3">

              <div class="flex justify-between items-center mb-3">
                <div class="flex items-baseline gap-1">
                  <span class="text-sm font-medium text-gray-600">Total Due</span>
                  <span class="text-xs text-gray-400">(*not including sales tax)</span>
                </div>
                <span class="text-gray-800 text-sm font-medium">${{ plan.billedPrice.toFixed(2) }}</span>
              </div>

              <div class="flex justify-between py-2 mb-5">
                <span class="text-base text-gray-800 font-bold">Due Today</span>
                <span class="text-base text-gray-800 font-bold">$0.00</span>
              </div>

              <div class="w-full bg-gray-50 text-gray-500 text-sm text-center font-medium py-3 rounded-md mb-8 border border-gray-100">
                Includes 3-Day Free Trial
              </div>

              <div class="flex items-center gap-2 mb-4">
                <h3 class="text-lg font-bold text-gray-700">Billing Information</h3>
                <iconify-icon icon="ph:info-bold" class="text-gray-300 cursor-help"></iconify-icon>
              </div>

              <div class="mb-4">
                <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Card Details</label>
                <div class="flex items-center border border-gray-300 rounded-md p-2 bg-white gap-2">
                  <iconify-icon icon="ph:credit-card-bold" class="text-gray-400 text-xl shrink-0"></iconify-icon>
                  <input
                    v-model="form.cardNumber"
                    type="text"
                    placeholder="Number"
                    class="grow outline-none text-sm text-gray-700"
                  />
                  <input
                    v-model="form.cardExpiry"
                    type="text"
                    placeholder="MM / YY"
                    class="w-20 outline-none text-sm text-gray-700 text-center border-l pl-2"
                  />
                  <input
                    v-model="form.cardCvc"
                    type="text"
                    placeholder="CVC"
                    class="w-14 outline-none text-sm text-gray-700 text-center border-l pl-2"
                  />
                </div>
              </div>

              <div class="mb-6">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Address</label>
                <div class="border border-gray-300 rounded-md p-4 bg-white space-y-3">
                  <div>
                    <label class="block text-xs text-gray-600 mb-1">Full name</label>
                    <input
                      v-model="form.fullName"
                      type="text"
                      class="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label class="block text-xs text-gray-600 mb-1">Address</label>
                    <input
                      v-model="form.address"
                      type="text"
                      class="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>

              <p v-if="success" class="text-green-500 text-sm mb-4">Subscription created successfully!</p>

              <div class="flex items-start gap-3 mb-6">
                <input
                  v-model="form.consent"
                  type="checkbox"
                  id="consent"
                  class="mt-1 w-4 h-4 cursor-pointer"
                />
                <label for="consent" class="text-xs text-gray-600 leading-tight">
                  I consent to <a href="#" class="underline font-bold text-gray-700">Terms of Use</a> and understand my 3-day free trial
                  will automatically convert to ${{ plan.billedPrice.toFixed(2) }} per year starting on
                  {{ trialEndDate }}. The yearly fee will be automatically charged
                  each year going forward unless I cancel my account at least
                  one (1) business day before the end of the current billing
                  period, which can be done by calling (888) 463-3163.
                </label>
              </div>

              <button
                :disabled="isLoading || !form.consent"
                :class="[
                  'font-bold py-2.5 px-8 rounded-sm border transition-all uppercase text-sm',
                  form.consent && !isLoading
                    ? 'bg-gray-200 hover:bg-white text-gray-600 hover:text-gray-800 border-transparent hover:border-gray-500 cursor-pointer'
                    : 'bg-gray-100 text-gray-400 border-transparent cursor-not-allowed'
                ]"
                @click="submitForm"
              >
                {{ isLoading ? 'Processing...' : 'Try It Free' }}
              </button>

            </div>
          </div>
        </div>

      </div>

      <div v-else class="text-center py-20">
        <p class="text-gray-500 text-lg mb-4">No plan selected.</p>
        <NuxtLink to="/" class="text-blue-500 underline">Go back and choose a plan</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const subscriptionStore = useSubscriptionStore()
const { plan } = storeToRefs(subscriptionStore)

const trialEndDate = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() + 3)
  return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
})

useHead({ title: 'Checkout - ' + (plan.value?.name || 'Subscription') })

const form = reactive({
  fullName: '',
  address: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvc: '',
  consent: false
})

const isLoading = ref(false)
const error = ref('')
const success = ref(false)

async function submitForm() {
  error.value = ''
  success.value = false

  if (!form.fullName || !form.address || !form.cardNumber || !form.cardExpiry || !form.cardCvc) {
    error.value = 'Please fill in all fields.'
    return
  }

  isLoading.value = true

  try {
    await $fetch('/api/subscription/create', {
      method: 'POST',
      body: {
        planId: plan.value?.id,
        planName: plan.value?.name,
        fullName: form.fullName,
        address: form.address,
        cardNumber: form.cardNumber,
        cardExpiry: form.cardExpiry,
        cardCvc: form.cardCvc,
      }
    })
    success.value = true
  } catch (e) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

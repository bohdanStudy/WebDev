<template>
  <div class="bg-gray-100 min-h-screen p-10">

    <div class="flex items-center justify-between max-w-6xl mx-auto mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Start Your 3 Day Free Trial</h1>

      <div class="flex items-center gap-3">
        <span class="text-green-500 text-sm font-medium">Save up to 20%</span>
        <div class="flex rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm relative">
          <div
            class="absolute top-0 bottom-0 w-1/2 bg-gray-800 rounded-md transition-transform duration-300 ease-in-out"
            :style="activeTab === 'monthly' ? 'transform: translateX(100%)' : 'transform: translateX(0%)'"
          ></div>
          <button
            class="relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300"
            :class="activeTab === 'annual' ? 'text-white' : 'text-gray-600 hover:text-gray-800'"
            @click="activeTab = 'annual'"
          >
            Annual
          </button>
          <button
            class="relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300"
            :class="activeTab === 'monthly' ? 'text-white' : 'text-gray-600 hover:text-gray-800'"
          >
            Monthly
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="plan in data"
        :key="plan.id"
        class="border border-transparent hover:border-gray-300 bg-white rounded-xl shadow-lg overflow-hidden transition-colors"
      >
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-green-500 to-cyan-400"></div>
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ plan.name }}</h2>
          <div class="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="flex items-baseline mb-2">
            <span class="text-4xl font-black text-gray-800">${{ plan.price }}</span>
            <span class="text-gray-500 ml-1 font-medium">/month</span>
          </div>
          <p class="text-gray-500 text-sm mb-2">
            Billed yearly at
            <span class="line-through text-gray-400">${{ plan.originalPrice }}</span>
            <span class="font-bold text-gray-700 ml-1">${{ plan.billedPrice }}</span>
          </p>
          <div class="inline-block bg-gray-100 text-green-500 text-xs font-semibold px-3 py-2 rounded mb-4">
            ${{ plan.savings }} in savings
          </div>
          <button class="w-full text-gray-800 font-bold py-3 px-4 rounded bg-gradient-to-r from-yellow-300 to-orange-400 transition mb-8">
            Try It Free
          </button>
          <hr class="border-gray-100 mb-6">
          <ul class="space-y-4">
            <li
              v-for="feature in plan.features"
              :key="feature.text"
              class="flex items-start gap-3"
            >
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium">{{ feature.text }}</p>
                <p v-if="feature.sub" class="text-gray-400 text-sm">{{ feature.sub }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Plan } from '~/types/plans'

useHead({ title: 'Список продуктів' })

const router = useRouter()
const activeTab = ref('annual')

const { data } = await useFetch<Plan[]>('/api/plans')
</script>

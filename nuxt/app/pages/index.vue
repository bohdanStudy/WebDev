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
            @click="goToMonthly"
          >
            Monthly
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 max-w-6xl mx-auto">

      <div class="border border-transparent hover:border-gray-300 bg-white rounded-xl shadow-lg overflow-hidden transition-colors">
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-green-500 to-cyan-400"></div>
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Starter - Annual</h2>
          <div class="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="flex items-baseline mb-2">
            <span class="text-4xl font-black text-gray-800">$83.25</span>
            <span class="text-gray-500 ml-1 font-medium">/month</span>
          </div>
          <p class="text-gray-500 text-sm mb-2">
            Billed yearly at <span class="line-through text-gray-400">$1,188</span>
            <span class="font-bold text-gray-700 ml-1">$999</span>
          </p>
          <div class="inline-block bg-gray-100 text-green-500 text-xs font-semibold px-3 py-2 rounded mb-4">
            $189 in savings
          </div>
          <button class="w-full text-gray-800 font-bold py-3 px-4 rounded bg-gradient-to-r from-yellow-300 to-orange-400 transition mb-8">
            Try It Free
          </button>
          <hr class="border-gray-100 mb-6">
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium">Primary user only</p>
                <p class="text-gray-400 text-sm">(extra team members for $35/month)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Save unlimited properties</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium"><strong>10,000</strong> exports</p>
                <p class="text-gray-400 text-sm">(additional exports at $0.02 each)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium"><strong>500</strong> free skip traces</p>
                <p class="text-gray-400 text-sm">(additional skip tracing at $0.08 each)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Imports $0.01</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">FREE daily product trainings and support</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Full suite of next-gen investing tools</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Industry first AI powered comp tool</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Includes dedicated support agent</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="border border-transparent hover:border-gray-300 bg-white rounded-xl shadow-lg overflow-hidden transition-colors">
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-green-500 to-cyan-400"></div>
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Team - Annual</h2>
          <div class="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="flex items-baseline mb-2">
            <span class="text-4xl font-black text-gray-800">$207.50</span>
            <span class="text-gray-500 ml-1 font-medium">/month</span>
          </div>
          <p class="text-gray-500 text-sm mb-2">
            Billed yearly at <span class="line-through text-gray-400">$2,988</span>
            <span class="font-bold text-gray-700 ml-1">$2,490</span>
          </p>
          <div class="inline-block bg-gray-100 text-green-500 text-xs font-semibold px-3 py-2 rounded mb-4">
            $498 in savings
          </div>
          <button class="w-full text-gray-800 font-bold py-3 px-4 rounded bg-gradient-to-r from-yellow-300 to-orange-400 transition mb-8">
            Try It Free
          </button>
          <hr class="border-gray-100 mb-6">
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium">Primary user + 2 free team members</p>
                <p class="text-gray-400 text-sm">(extra team members for $25/month)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Save unlimited properties</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium"><strong>50,000</strong> exports</p>
                <p class="text-gray-400 text-sm">(additional exports at $0.01 each)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium"><strong>1,000</strong> free skip traces</p>
                <p class="text-gray-400 text-sm">(additional skip tracing at $0.08 each)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Imports $0.01</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">FREE daily product trainings and support</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Full suite of next-gen investing tools</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Industry first AI powered comp tool</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Includes dedicated support agent</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="border border-transparent hover:border-gray-300 bg-white rounded-xl shadow-lg overflow-hidden transition-colors">
        <div class="h-1.5 w-full bg-gradient-to-r from-green-400 via-green-500 to-cyan-400"></div>
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Business - Annual</h2>
          <div class="inline-block bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="flex items-baseline mb-2">
            <span class="text-4xl font-black text-gray-800">$457.50</span>
            <span class="text-gray-500 ml-1 font-medium">/month</span>
          </div>
          <p class="text-gray-500 text-sm mb-2">
            Billed yearly at <span class="line-through text-gray-400">$6,588</span>
            <span class="font-bold text-gray-700 ml-1">$5,490</span>
          </p>
          <div class="inline-block bg-gray-100 text-green-500 text-xs font-semibold px-3 py-2 rounded mb-4">
            $1,098 in savings
          </div>
          <button class="w-full text-gray-800 font-bold py-3 px-4 rounded bg-gradient-to-r from-yellow-300 to-orange-400 transition mb-8">
            Try It Free
          </button>
          <hr class="border-gray-100 mb-6">
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium">Primary user + 6 free team members</p>
                <p class="text-gray-400 text-sm">(extra team members for $20/month)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Save unlimited properties</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium"><strong>100,000</strong> exports</p>
                <p class="text-gray-400 text-sm">(additional exports at $0.01 each)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <div>
                <p class="text-gray-700 font-medium"><strong>2,000</strong> free skip traces</p>
                <p class="text-gray-400 text-sm">(additional skip tracing at $0.08 each)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Imports $0.01</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">FREE daily product trainings and support</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Full suite of next-gen investing tools</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Industry first AI powered comp tool</p>
            </li>
            <li class="flex items-start gap-3">
              <iconify-icon icon="ph:star-four-fill" class="text-green-400 mt-1 flex-shrink-0" style="font-size: 20px;"></iconify-icon>
              <p class="text-gray-700 font-medium">Includes dedicated support agent</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Список продуктів' })

const router = useRouter()
const activeTab = ref('annual')

function goToMonthly() {
  activeTab.value = 'monthly'
  router.push('/products')
}
</script>

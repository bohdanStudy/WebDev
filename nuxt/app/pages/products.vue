<template>
  <div class="max-w-full mx-auto bg-white rounded-lg border border-gray-200 shadow-sm overflow-x-auto m-6">

    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <h1 class="text-lg font-semibold text-gray-800">Список продуктів</h1>

      <div class="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1.5 focus-within:border-gray-400 transition-colors">
        <iconify-icon icon="lucide:search" class="text-gray-400" style="font-size: 15px;"></iconify-icon>
        <input
          v-model="search"
          type="text"
          placeholder="Пошук..."
          class="outline-none text-sm text-gray-700 placeholder-gray-400 w-48"
        />
      </div>
    </div>

    <div class="overflow-x-auto bg-white rounded-lg border border-gray-200 m-4">
      <table class="w-full text-left border-collapse table-auto">

        <thead class="bg-gray-50 text-gray-600 text-sm font-medium">
        <tr>
          <th class="p-4 font-semibold text-left border-r border-gray-200">
            <div class="flex items-center gap-1 cursor-pointer select-none" @click="toggleSort('title')">
              <span>Назва</span>
              <iconify-icon :icon="sortIcon('title')" class="text-gray-400" style="font-size: 16px;"></iconify-icon>
            </div>
          </th>
          <th class="p-4 font-semibold text-left">Опис</th>
          <th class="p-4 font-semibold text-center">
            <div class="flex items-center justify-center gap-1 cursor-pointer select-none" @click="toggleSort('price')">
              <span>Ціна</span>
              <iconify-icon :icon="sortIcon('price')" class="text-gray-400" style="font-size: 16px;"></iconify-icon>
            </div>
          </th>
          <th class="p-4 font-semibold text-center">
            <div class="flex items-center justify-center gap-1 cursor-pointer select-none" @click="toggleSort('rating')">
              <span>Оцінка</span>
              <iconify-icon :icon="sortIcon('rating')" class="text-gray-400" style="font-size: 16px;"></iconify-icon>
            </div>
          </th>
          <th class="p-4 font-semibold text-center">
            <div class="flex items-center justify-center gap-1 cursor-pointer select-none" @click="toggleSort('brand')">
              <span>Бренд</span>
              <iconify-icon :icon="sortIcon('brand')" class="text-gray-400" style="font-size: 16px;"></iconify-icon>
            </div>
          </th>
          <th class="p-4 font-semibold text-center">
            <div class="flex items-center justify-center gap-1 cursor-pointer select-none" @click="toggleSort('category')">
              <span>Категорія</span>
              <iconify-icon :icon="sortIcon('category')" class="text-gray-400" style="font-size: 16px;"></iconify-icon>
            </div>
          </th>
          <th class="p-4 font-semibold text-center">Фото</th>
        </tr>
        </thead>

        <tbody class="text-sm text-gray-700">
        <tr
          v-for="row in paginatedRows"
          :key="row.id"
          class="hover:bg-gray-50 transition-colors border-b border-gray-200"
        >
          <td class="p-4 border-r border-gray-200">
            <span class="font-bold text-gray-800 border-b border-gray-800 pb-[1px] w-fit leading-none">
              {{ row.title }}
            </span>
          </td>
          <td class="p-4 text-gray-600 max-w-xs">
            <p class="line-clamp-2">{{ row.description }}</p>
          </td>
          <td class="p-4 text-center font-medium">${{ row.price }}</td>
          <td class="p-4 text-center">
            <span :class="row.rating >= 4.5 ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'">
              {{ row.rating }}
            </span>
          </td>
          <td class="p-4 text-center text-gray-600">{{ row.brand }}</td>
          <td class="p-4 text-center">
            <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              {{ row.category }}
            </span>
          </td>
          <td class="p-4 text-center">
            <img
              :src="row.thumbnail"
              width="100"
              height="100"
              class="rounded-md object-cover mx-auto"
            />
          </td>
        </tr>
        </tbody>

      </table>
    </div>

    <div class="flex justify-end px-4 pb-4 text-sm text-gray-600">
      <UPagination
        v-model:page="page"
        :items-per-page="pageSize"
        :total="filteredRows.length"
      />
    </div>

  </div>
</template>

<script setup>
useHead({ title: 'Список продуктів' })

const { data } = await useFetch('/api/products')

const sortKey = ref(null)
const sortDesc = ref(false)

function toggleSort(key) {
  if (sortKey.value === key) {
    sortDesc.value = !sortDesc.value
  } else {
    sortKey.value = key
    sortDesc.value = false
  }
  page.value = 1
}

function sortIcon(key) {
  if (sortKey.value !== key)
    return 'fluent:arrow-sort-16-filled'
  return sortDesc.value ? 'fluent:arrow-sort-down-16-filled' : 'fluent:arrow-sort-up-16-filled'
}

const search = ref('')

watch(search, () => {
  page.value = 1
})

const filteredRows = computed(() => {
  const products = data.value?.products ?? []
  if (!search.value)
    return products
  const q = search.value.toLowerCase()
  return products.filter(p => p.title.toLowerCase().includes(q))
})

const sortedRows = computed(() => {
  if (!sortKey.value)
    return filteredRows.value
  return [...filteredRows.value].sort((a, b) => {
    const aVal = a[sortKey.value]
    const bVal = b[sortKey.value]
    if (typeof aVal === 'number') {
      return sortDesc.value ? bVal - aVal : aVal - bVal
    }
    return sortDesc.value
      ? String(bVal).localeCompare(String(aVal))
      : String(aVal).localeCompare(String(bVal))
  })
})

const page = ref(1)
const pageSize = 10

const paginatedRows = computed(() => {
  const start = (page.value - 1) * pageSize
  return sortedRows.value.slice(start, start + pageSize)
})
</script>

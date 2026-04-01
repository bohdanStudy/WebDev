<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Список продуктів</h1>

    <UInput
      v-model="search"
      placeholder="Пошук..."
      class="mb-4 max-w-sm"
    />

    <UTable :data="paginatedRows" :columns="columns">
      <template #rating="{ row }">
        <span :class="row.original.rating >= 4.5 ? 'text-green-500' : 'text-red-500'">
          {{ row.original.rating }}
        </span>
      </template>

      <template #thumbnail="{ row }">
        <img :src="row.original.thumbnail" width="100" height="100" style="object-fit: cover;" />
      </template>
    </UTable>

    <div class="mt-4 flex justify-end">
      <UPagination
        v-model:page="page"
        :items-per-page="pageSize"
        :total="filteredRows.length"
      />
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

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
  if (sortKey.value !== key) return '↕'
  return sortDesc.value ? '↓' : '↑'
}

const columns = computed(() => [
  {
    accessorKey: 'title',
    header: () => h('span', { style: 'cursor:pointer; user-select:none', onClick: () => toggleSort('title') }, 'Назва' + sortIcon('title')),
  },
  {
    accessorKey: 'description',
    header: 'Опис',
  },
  {
    accessorKey: 'price',
    header: () => h('span', { style: 'cursor:pointer; user-select:none', onClick: () => toggleSort('price') }, 'Ціна' + sortIcon('price')),
  },
  {
    accessorKey: 'rating',
    header: () => h('span', { style: 'cursor:pointer; user-select:none', onClick: () => toggleSort('rating') }, 'Оцінка' + sortIcon('rating')),
  },
  {
    accessorKey: 'brand',
    header: () => h('span', { style: 'cursor:pointer; user-select:none', onClick: () => toggleSort('brand') }, 'Бренд' + sortIcon('brand')),
  },
  {
    accessorKey: 'category',
    header: () => h('span', { style: 'cursor:pointer; user-select:none', onClick: () => toggleSort('category') }, 'Категорія' + sortIcon('category')),
  },
  {
    accessorKey: 'thumbnail',
    header: 'Фото',
  },
])

const search = ref('')

watch(search, () => {
  page.value = 1
})

const filteredRows = computed(() => {
  const products = data.value?.products ?? []
  if (!search.value) return products
  const q = search.value.toLowerCase()
  return products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  )
})

const sortedRows = computed(() => {
  if (!sortKey.value) return filteredRows.value
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

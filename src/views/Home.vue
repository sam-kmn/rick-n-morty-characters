<template>
  <Search />
  <Gallery />
  <Pagination />
</template>

<script setup>
import Search from '@/components/Search.vue'
import Gallery from '@/components/Gallery.vue'
import Pagination from '@/components/Pagination.vue'
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()
const page = computed(()=> store.getters.getPage)

store.dispatch('fetchChars')
watch(page, ()=> store.dispatch('fetchChars') )
</script>

<template>
  <div class="container">
    <pre>{{data.info}}</pre>
  </div>
  <Pagination />

</template>

<script setup>
import Pagination from '@/components/Pagination.vue'
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()
const data = computed(()=> store.getters.getData)
const page = computed(()=> store.getters.getPage)

store.dispatch('fetchChars')
watch(page, ()=> store.dispatch('fetchChars') )

</script>

<style lang="scss" scoped>
</style>
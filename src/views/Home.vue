<template>
  <div class="container">
    <pre>{{data}}</pre>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch('fetchChars')

const data = computed(()=> store.getters.getData)

</script>

<style lang="scss" scoped>
</style>
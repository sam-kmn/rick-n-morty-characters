<template>
  <!-- Search -->
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div id="search-group" class="col-auto">
        <input type="text" placeholder="Search">
        <button>
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
  </div>
  <Gallery />
  <Pagination />

</template>

<script setup>
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

<style lang="scss" scoped>

@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

#search-group{
  input{
    background-color: $gray-900;
    border: 1px solid black;
    border-radius: 2rem;
    padding: .5rem 1.2rem;
    color: white;
  }
  button{
    margin-left: .5rem;
    background-color: $gray-900;
    border-radius: 100%;
    border: 1px solid black;
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    transition: 1s;

    &:hover{
      border: 1px solid $cyan-400;
      color: $cyan-400;
    }
  }
  
}




</style>
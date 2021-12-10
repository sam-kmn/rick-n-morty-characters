<template>
  <div class="container">

    <!-- Search -->
    <div class="row justify-content-center mt-4">
      <div id="search-group" class="col-auto">
        <input type="text" placeholder="Search">
        <button>
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>

    <!-- Gallery -->
    <div v-if="data.results.length" class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
      <div v-for="character, i in data.results " :key="i" class="col border-dark p-4">
        
        <router-link class="character-wrapper" :to="`/character/${character.id}`">
          <img class="character-image img-fluid" :src="character.image"  alt="Image">
          <div class="character-name">{{character.name}}</div>
        </router-link>

      </div>
    </div>
    
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

// console.log(data.value);

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

.character-wrapper{
  --default-border-radius: .5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;

  border-radius: var(--default-border-radius);
  border: 1px solid black;
  transition: .3s;

  .character-image{
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
  }

  .character-name{
    background-color: $gray-900;
    color: white;

    border-bottom-left-radius: var(--default-border-radius);
    border-bottom-right-radius: var(--default-border-radius);
    padding: .3rem 0;
  }

  &:hover{
    border: 2px solid $cyan-600;
  }
}


</style>
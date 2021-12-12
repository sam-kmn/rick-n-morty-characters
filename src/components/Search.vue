<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <form @submit.prevent="search_submit" id="search-group" class="col-auto">
        <input v-model="search_input" type="text" placeholder="Search">
        <button><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore()
const search_input = ref('')

function search_submit(){
  store.dispatch('fetchCharsByName', search_input.value)
}

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
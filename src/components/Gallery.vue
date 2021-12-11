<template>
  <div class="container">
    <div v-if="data.results.length" class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
      <div v-for="character, i in data.results " :key="i" class="col border-dark p-4">
        
        <router-link class="character-wrapper" :to="`/character/${character.id}`">
          <img class="character-image img-fluid" :src="character.image"  alt="Image">
          <div class="character-name">{{character.name}}</div>
        </router-link>

      </div>
    </div>
    <!-- No characters fallback -->
    <div v-else> 
      <slot></slot> 
    </div>

  </div>
</template>


<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore()
const data = computed(()=> store.getters.getData)
</script>


<style lang="scss" scoped>

@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

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

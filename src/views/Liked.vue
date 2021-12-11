<template>
  <Gallery>
    <!-- No characters fallback -->
    <div class="d-flex justify-content-center mt-5">
      <div class="text-center">
        <iframe src="https://giphy.com/embed/dz6NpfESnqqcnJH1MY" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p class="h1">You havn't liked anything yet</p>
      </div>
    </div>
  </Gallery>
</template>

<script setup>
import Gallery from '@/components/Gallery.vue'
import { useStore } from "vuex";

const store = useStore()
store.dispatch('fetchCharsByIDs');
</script>


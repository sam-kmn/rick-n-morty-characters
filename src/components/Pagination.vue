<template>
  <div v-if="data.info.pages > 1" class="container d-flex justify-content-center">
    <nav>
      <ul class="pagination">
        <!-- Prev -->
        <li v-if="page > 1" class="page-item">
          <a @click="page-=1" class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-if="page > 1" class="page-item">  <a @click="page=1" class="page-link" href="#">1</a></li>
        <li v-if="page > 4" class="page-item disabled">         <a class="page-link" href="#">...</a></li>
        <li v-if="page > 3" class="page-item">  <a @click="page-=2" class="page-link" href="#">{{page-2}}</a></li>
        <li v-if="page > 2" class="page-item">  <a @click="page-=1" class="page-link" href="#">{{page-1}}</a></li>
        <li class="page-item active">           <a class="page-link" href="#">{{page}}</a></li>
        <li v-if="page+1 < data.info.pages" class="page-item">                  <a @click="page+=1" class="page-link" href="#">{{page+1}}</a></li>
        <li v-if="page+2 < data.info.pages" class="page-item">                  <a @click="page+=2" class="page-link" href="#">{{page+2}}</a></li>
        <li v-if="page+3 < data.info.pages" class="page-item disabled">         <a class="page-link" href="#">...</a></li>
        <li v-if="page < data.info.pages" class="page-item">                  <a @click="page=data.info.pages" class="page-link" href="#">{{data.info.pages}}</a></li>
        <!-- Next -->
        <li v-if="page < data.info.pages" class="page-item">
          <a @click="page+=1" class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore()
const data = computed(()=> store.getters.getData)
const stored_page = computed(()=> store.getters.getPage)
const page = ref(stored_page.value)

watch(page,()=> store.commit('setPage', page.value))


</script>

<style lang="scss" scoped>
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

$pagination-color:                  $gray-200;
$pagination-bg:                     $gray-900;
$pagination-border-color:           $gray-700;

$pagination-active-color:           white;
$pagination-active-bg:              $cyan-600;
$pagination-active-border-color:    $gray-500;

$pagination-hover-color:            white;
$pagination-hover-bg:               none;
$pagination-hover-border-color:     none;

$pagination-disabled-color:         $pagination-color;
$pagination-disabled-bg:            $pagination-bg;
$pagination-disabled-border-color:  $pagination-border-color;

$pagination-focus-color:            $pagination-color;
$pagination-focus-bg:               $pagination-bg;
$pagination-focus-box-shadow:       none;

@import "node_modules/bootstrap/scss/bootstrap";

</style>
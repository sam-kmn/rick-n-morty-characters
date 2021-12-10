<template>
  <div class="container">
    <div v-if="data.results.name" class="row justify-content-center align-items-center gap-5 mt-5">
      <!-- Left / Up side -->
      <div id="image-wrapper" class="col-auto text-center">
        <!-- Image -->
        <img :src="data.results.image" class="img-fluid" :alt="`Image of ${data.results.name}`">
        <!-- Likes group -->
        <div id="likes-wrapper" class="fs-5 py-2">
          <!-- Like -->
          <div id="like" 
          v-if="liked.length===0 || !liked.includes(data.results.id)"
          @click="store.state.liked.push(data.results.id)"  
          >
            Like <i class="bi bi-heart"></i>
          </div>

          <!-- Already liked -->
          <div id="liked" 
          v-else-if="liked.length>0 && liked.includes(data.results.id)"
          @click="store.state.liked.splice(store.state.liked.indexOf(data.results.id),1)" 
          >
            Liked <i class="bi bi-heart"></i>
          </div>
        </div>
      </div>
      <!-- Right / Down side -->
      <div id="table-wrapper" class="col-12 col-md-6 col-lg-5 col-xl-4 table-responsive">
        <table class="table table-dark table-bordered fs-5">
          <tbody>
            <tr>
              <th scope="row">ID</th>
              <td>{{data.results.id}}</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>{{data.results.name}}</td>
            </tr>
            <tr>
              <th scope="row">Gender</th>
              <td>{{data.results.gender}}</td>
            </tr>
            <tr>
              <th scope="row">Species</th>
              <td>{{data.results.species}}</td>
            </tr>
            <tr>
              <th scope="row">First episode</th>
              <td>{{data.results.episode[0].episode}}</td>
            </tr>
            <tr>
              <th scope="row">Last episode</th>
              <td>{{data.results.episode[data.results.episode.length-1].episode}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Error -->
    <div id="error" v-else-if="data.info.error" class="text-center py-5 my-5">
      <div class="h4">Whoops..</div>
      <div class="h2">404 Error: Character not found.</div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
const props = defineProps({id:String})
const store = useStore()
const data = computed(()=> store.getters.getData)
const liked = computed(()=> store.getters.getLiked)

store.dispatch('fetchCharByID', props.id)

</script>


<style lang="scss" scoped>
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

body{background-color: $gray-800;}

#error .h4{color: $gray-600;}

#image-wrapper{
  border: 1px solid $cyan-200;
  border-radius: .5rem;
  padding: 0px;
  overflow: hidden;
  #likes-wrapper{
    background-color: $gray-900;
    #like{
      & i{color: white; transition: .5s;}
      &:hover{
        & i{color: $red-400; transition: .5s;}
      }
    }
    #liked{
      & i{color: $red-400; transition: .5s;}
      &:hover{
        & i{color: white; transition: .5s;}
      }
    }
  }
}

#table-wrapper{
  padding: 0px;
  border: 1px solid $gray-600;
  border-radius: .5rem;

  .table{
    margin: 0px;
    th{color: $gray-500;}
  }
}

</style>

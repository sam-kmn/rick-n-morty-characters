<template>

  <div>
    <Navbar />
    <router-view/>
  </div>

</template>

<script setup>
import Navbar from './components/Navbar.vue'

</script>


<style lang="scss">
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

@import "~bootstrap/dist/css/bootstrap.css";
@import '~bootstrap-icons/font/bootstrap-icons.css';

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap');

body{ background-color: $gray-800 }
*:focus{ outline: none;}

#app{
  font-family: "Poppins";
  padding: 0px;
  margin: 0px; 
  color: white;
}

</style>

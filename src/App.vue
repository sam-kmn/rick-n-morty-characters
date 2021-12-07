<template>

  <!-- Mobile layout -->
  <div id="mobile" class="d-md-none">
    <!-- Header -->
    <div class="container-fluid sticky-top bg-dark shadow py-3">
      <div class="row justify-content-center">
        <img id="mobile-logo" class="col-auto" src="./assets/logo.png" alt="">
      </div>
    </div>
    <router-view/>
    <NavbarMobile />
  </div>

  <!-- Desktop layout -->
  <div id="desktop" class="d-none d-md-block">
    <NavbarDesktop />
    <router-view/>
  </div>

</template>

<script setup>
import NavbarMobile from './components/NavbarMobile.vue'
import NavbarDesktop from './components/NavbarDesktop.vue'

</script>


<style lang="scss">
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

@import "~bootstrap/dist/css/bootstrap.css";
@import '~bootstrap-icons/font/bootstrap-icons.css';

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap');

body{background-color: $gray-900}

#app{
  font-family: "Poppins";
  padding: 0px;
  margin: 0px; 
  color: white;
  background-color: $gray-800
}

#mobile{
  
  #mobile-logo{
    animation: mobile-logo-animation;
    animation-duration: 2s;
  }
  
  @keyframes mobile-logo-animation {
    0% {opacity: 0;transform: translateY(-100px)}
    30% {opacity: 0.15}
    100% {opacity: 1;transform: translateY(0px)}
  }
}

nav{
  a{
    color: white;
    text-decoration: none;
    &:hover{
      color: $cyan-400;
      transition: 2s;
    }
  }
  .router-link-exact-active{
    color: $cyan-400;
    transition: 2s;
  }
}

</style>

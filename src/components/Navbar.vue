<template>

  <div class="container-fluid sticky-top bg-dark shadow py-2">
    <nav class="row justify-content-around align-items-center">

      <div class="col-1"></div>

      <router-link to="/" class="col-auto">
        <img id="mobile-logo" src="../assets/logo.png" alt="">
      </router-link>

      <router-link to="/liked" class="col-1 fs-3">
        <i class="bi bi-heart"></i>
      </router-link>
      
    </nav>
  </div>

</template>

<style lang="scss" scoped>
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";

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

#mobile-logo{
  animation: mobile-logo-animation;
  animation-duration: 2s;
}

@keyframes mobile-logo-animation {
  0% {opacity: 0;transform: translateY(-100px)}
  30% {opacity: 0.15}
  100% {opacity: 1;transform: translateY(0px)}
}

</style>
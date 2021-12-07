<template>

  <!-- Bottom Navbar -->
  <div id="bt" class="container-fluid p-2 fixed-bottom bg-dark text-white d-md-none">
    <nav class="row justify-content-center text-center gap-5">
      
      <router-link to="/search" class="col-auto fs-1">
        <i class="bi bi-search"></i>
      </router-link>
      
      <router-link to="/" class="col-auto fs-1">
          <i class="bi bi-house"></i>
      </router-link>

      <router-link to="/liked" class="col-auto fs-1">
        <i class="bi bi-heart"></i>
      </router-link>

    </nav>
  </div>

</template>

<style lang="scss" scoped>
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";


a{
  color: white;
  &:hover{
    color: $cyan-400;
    transition: 2s;
  }
}
.router-link-exact-active{
  color: $cyan-400;
  transition: 2s;
}

</style>
<template>
<div class="container-fluid bg-dark shadow">
  <div class="container py-3">
    <nav class="row justify-content-between">
      <!-- Logo -->
      <div class="col-auto">
        <img src="../assets/logo.png" alt="Rick And Morty">
      </div>
      <!-- Navbar -->
      <div class="col">
        <nav class="row h-100 justify-content-center align-items-center fs-4 gap-3 gap-lg-4 gap-xl-5">
          
          <router-link to="/search" class="col-auto fs-4">
            <i class="bi bi-search"></i> Search
          </router-link>

          <router-link to="/" class="col-auto fs-4">
              <i class="bi bi-house"></i> Home
          </router-link>

          <router-link to="/liked" class="col-auto fs-4">
            <i class="bi bi-heart"></i> Liked
          </router-link>

        </nav>
      </div>
    </nav>
  </div>
</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
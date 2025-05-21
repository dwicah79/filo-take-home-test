<template>
  <header class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <div class="text-2xl font-bold text-primary">KOPITARA</div>
      <nav>
        <ul class="hidden md:flex gap-6 font-medium">
          <li><a href="#home" class="hover:text-primary transition">Home</a></li>
          <li><a href="#menu" class="hover:text-primary transition">Menu</a></li>
          <li><a href="#about" class="hover:text-primary transition">About</a></li>
          <li><a href="#testimonials" class="hover:text-primary transition">Testimonials</a></li>
        </ul>
      </nav>
      <button class="md:hidden text-2xl" @click="toggleMenu">☰</button>
    </div>

    <div v-if="mobileOpen" class="md:hidden bg-white shadow-md">
      <ul class="flex flex-col p-4 gap-4 font-medium">
        <li><a href="#home" class="hover:text-primary transition">Home</a></li>
        <li><a href="#menu" class="hover:text-primary transition">Menu</a></li>
        <li><a href="#about" class="hover:text-primary transition">About</a></li>
        <li><a href="#testimonials" class="hover:text-primary transition">Testimonials</a></li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
const toggleMenu = () => (mobileOpen.value = !mobileOpen.value)
</script>

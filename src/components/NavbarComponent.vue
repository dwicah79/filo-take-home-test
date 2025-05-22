<template>
  <header
    class="bg-transparent fixed top-0 md:top-5 left-1/2 -translate-x-1/2 w-full z-50"
    :class="{
      'bg-white/90 backdrop-blur-md shadow-md transition-all md:bg-white/90 md:backdrop-blur-md md:shadow-md md:rounded-full md:top-5 md:w-full':
        isScrolled,
      'bg-transparent': !isScrolled,
    }"
  >
    <div class="mx-2 md:mx-10 flex items-center justify-between py-4 px-4">
      <div class="text-2xl font-bold inline-flex items-center gap-2 w-1/3">
        <img src="/images/logo.png" class="w-7 h-5" alt="" />
        <span>KOPITARA</span>
      </div>
      <nav class="flex w-1/3 justify-between">
        <ul class="hidden md:flex gap-8">
          <li>
            <a href="#about" class="hover:text-orange-400 transition flex items-center gap-1">
              About us
            </a>
          </li>
          <li>
            <a href="#product" class="hover:text-orange-400 transition flex items-center gap-1">
              Our Product
            </a>
          </li>
          <li>
            <a href="#delivery" class="hover:text-orange-400 transition flex items-center gap-1">
              Delivery
            </a>
          </li>
        </ul>
      </nav>
      <div class="w-1/3 items-center space-x-4 hidden md:flex">
        <div class="flex items-center bg-white px-4 py-2 rounded-full w-3/4 shadow-inner">
          <svg
            class="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.65 13.65z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Cappuccino"
            class="outline-none bg-transparent text-gray-500 w-full placeholder:text-gray-400"
          />
        </div>
        <div class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          <span
            class="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"
          ></span>
        </div>
      </div>
      <button class="md:hidden text-2xl" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div v-if="mobileOpen" class="md:hidden bg-white shadow-md">
      <ul class="flex flex-col p-4 gap-4 font-medium">
        <li>
          <a href="#about" class="hover:text-orange-400 transition flex items-center gap-1">
            About us
          </a>
        </li>
        <li>
          <a href="#product" class="hover:text-orange-400 transition flex items-center gap-1">
            Our Product
          </a>
        </li>
        <li>
          <a href="#delivery" class="hover:text-orange-400 transition flex items-center gap-1">
            Delivery
          </a>
        </li>
        <li>
          <div class="flex items-center bg-secondary px-4 py-2 rounded-full w-full shadow-inner">
            <svg
              class="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.65 13.65z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Cappuccino"
              class="outline-none bg-transparent text-gray-500 w-full placeholder:text-gray-400"
            />
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
const mobileOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  mobileOpen.value = !mobileOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

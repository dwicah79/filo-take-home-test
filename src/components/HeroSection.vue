<template>
  <section class="py-20 md:py-30 bg-secondary overflow-hidden">
    <div class="md:mx-10 px-6 flex flex-col md:flex-row md:justify-between w-full items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-4xl md:text-7xl font-semibold mb-6">
          Enjoy your <span class="text-orange-400">coffee</span> before your activity
        </h1>
        <p class="text-lg text-brown-500 mb-8 w-full md:w-1/2">
          Boost your productivity and build your mood with a glass of coffee in the morning
        </p>
        <button class="btn-primary cursor-pointer inline-flex gap-2 items-center group">
          <span>Order Now</span>
          <span class="btn-secondary group-hover:bg-orange-300"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="md:w-1/2 relative">
        <div class="absolute top-0 right-0 z-10">
          <img
            src="/images/bg_img_hero.svg"
            alt="Background"
            class="fixed left-1/2 translate-x-1/2 top-0 translate-y-0"
          />
        </div>
        <img
          src="/images/img-hero.png"
          alt="Coffee Image"
          class="relative w-full md:px-10 h-auto z-20 right-0"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection',
})
</script>

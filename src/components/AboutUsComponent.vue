<template>
  <section id="about" class="bg-[url('/images/bg-coffee.png')] bg-cover relative md:mt-40">
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="w-full md:w-1/2 flex justify-center mt-5 md:mt-0 md:-translate-y-30">
          <img
            src="/images/coffee-late.png"
            alt="Coffee latte"
            class="rounded-3xl md:h-[40em] w-full shadow-lg max-w-sm"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 class="text-3xl md:text-4xl font-extrabold text-neutral-900">
            About
            <span class="relative inline-block">
              <span class="relative z-10">us</span>
              <span class="absolute bottom-0 left-0 w-full h-1 bg-orange-400 z-0 rounded-md"></span>
            </span>
          </h2>

          <p class="text-xl font-semibold text-neutral-900">
            We provide quality coffee,<br />
            and ready to deliver.
          </p>

          <p class="text-neutral-500 text-base md:text-lg leading-relaxed">
            We are a company that makes and distributes<br />
            delicious drinks. our main product is made with a<br />
            secret recipe and available in stores worldwide.
          </p>

          <button
            class="mt-4 px-6 py-3 bg-[#36200c] hover:bg-[#50311a] text-white font-semibold rounded-full transition duration-300"
          >
            Get your coffee
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AboutUsComponent',
})
</script>

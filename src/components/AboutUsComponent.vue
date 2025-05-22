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

  <section class="mt-5 md:mt-30 px-10 bg-white">
    <div class="container mx-auto px-6">
      <h1 class="font-bold text-2xl md:text-3xl mb-12">
        Special menu <span class="border-b-4 border-orange-500">for you</span>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div
          v-for="(item, index) in getspecialmenu"
          :key="item.id"
          class="bg-white/40 md:shadow-2xl rounded-2xl p-2 shadow transition-all duration-300"
        >
          <div class="rounded-2xl p-5 bg-white">
            <div
              class="h-60 w-full mb-6 flex items-center justify-center rounded-lg overflow-hidden"
            >
              <div class="relative w-full">
                <img :src="getImageUrl(item.image)" :alt="item.name" class="h-full w-full" />
                <div class="absolute rounded-full p-1 bg-white/50 top-10 left-2">
                  <div class="inline-flex bg-white items-center rounded-full gap-1 px-2 py-0.5">
                    <span class="font-bold">{{ item.rating }}</span>
                    <span><i class="fa-solid fa-star text-yellow-300"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="inline-flex justify-between w-full items-center mx-auto">
              <h3 class="text-2xl font-bold mb-4 text-center">
                {{ item.name }}
              </h3>
              <span class="text-2xl font-bold">{{ item.price }}</span>
            </div>
            <div class="flex w-full gap-3 mb-6">
              <span class="font-semibold text-gray-400">{{ item.description }}</span>
              <div class="flex w-full justify-end p-2">
                <button class="btn-secondary group-hover:bg-orange-300 cursor-pointer">
                  <svg
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { getSpecialItems, SpecialItem } from '@/mock/api'
export default defineComponent({
  name: 'AboutUsComponent',

  setup() {
    const getspecialmenu = ref<SpecialItem[]>([])
    const getImageUrl = (imageName: string) => {
      return `/images/${imageName}`
    }
    onMounted(() => {
      setTimeout(() => {
        getspecialmenu.value = getSpecialItems()
      }, 300)
    })
    return {
      getspecialmenu,
      getImageUrl,
    }
  },
})
</script>

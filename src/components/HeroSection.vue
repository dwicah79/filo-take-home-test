<template>
  <div class="relative">
    <section class="py-20 md:py-30 bg-secondary overflow-hidden relative z-10 h-dvh md:h-[60em]">
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
          <div class="absolute top-0 right-0 z-10 hidden md:block">
            <img
              src="/images/bg_img_hero.svg"
              alt="Background"
              class="-top-1/2 -translate-y-30 -right-1/2 -translate-x-5"
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

    <section class="relative z-20 md:-mt-[22em] -mt-20">
      <div class="container mx-auto pt-32 pb-12">
        <div class="relative md:mx-10">
          <h2 class="text-3xl font-bold mb-8 text-center md:text-left">
            Popular <span class="border-b-4 border-orange-500">Now</span>
          </h2>

          <div class="relative p-5 md:px-28 md:mt-30">
            <div
              class="md:px-28 md:mx-14 rounded-3xl md:rounded-[5em] bg-primary py-16 h-[100%] md:h-[80%] absolute inset-x-0 top-0"
            ></div>

            <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div
                v-for="(item, index) in popularItems"
                :key="item.id"
                class="bg-white/40 md:shadow-2xl rounded-2xl p-2 shadow transition-all duration-300 md:-translate-y-36"
              >
                <div class="rounded-2xl p-5 bg-white">
                  <div
                    class="h-48 w-full mb-6 flex items-center justify-center rounded-lg overflow-hidden"
                  >
                    <img
                      :src="getImageUrl(item.image)"
                      :alt="item.name"
                      class="h-full w-full object-cover"
                    />
                  </div>
                  <div class="inline-flex justify-between w-full items-center mx-auto">
                    <h3 class="text-2xl font-bold mb-4 text-center">
                      {{ item.name }}
                    </h3>
                    <span class="text-2xl font-bold">{{ item.price }}</span>
                  </div>
                  <div class="flex w-full gap-3 mb-6">
                    <button
                      v-for="variant in item.variants"
                      :key="variant"
                      class="text-sm px-4 py-1 border-2 border-primary rounded-lg font-medium"
                    >
                      {{ variant }}
                    </button>
                    <div class="flex w-full justify-end">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { getPopularMenus, MenuItem } from '@/mock/api'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const popularItems = ref<MenuItem[]>([])

    const getImageUrl = (imageName: string) => {
      return `/images/${imageName}`
    }

    onMounted(() => {
      setTimeout(() => {
        popularItems.value = getPopularMenus()
      }, 300)
    })

    return { popularItems, getImageUrl }
  },
})
</script>

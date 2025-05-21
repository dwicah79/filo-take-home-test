<template>
  <section class="mt-5 px-10 bg-white">
    <div class="container mx-auto px-6">
      <h1 class="font-bold text-2xl md:text-3xl mb-12">
        How to use delivery <span class="border-b-4 border-orange-500">service</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div
          v-for="(item, index) in deliveryItems"
          :key="item.id"
          class="flex flex-col items-center text-center px-4 py-8"
        >
          <div class="bg-[#f8f3ee] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <img
              :src="getImageUrl(item.image)"
              :alt="item.name"
              class="w-32 h-3w-32 object-contain"
            />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ item.name }}</h3>
          <p class="text-gray-600 font-semibold">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { getDeliveryItems, DeliveryItem } from '@/mock/api'

export default defineComponent({
  name: 'DeliveryComponent',
  setup() {
    const deliveryItems = ref<DeliveryItem[]>([])
    const getImageUrl = (imageName: string) => {
      return `/images/${imageName}`
    }
    onMounted(() => {
      setTimeout(() => {
        deliveryItems.value = getDeliveryItems()
      }, 300)
    })
    return { deliveryItems, getImageUrl }
  },
})
</script>

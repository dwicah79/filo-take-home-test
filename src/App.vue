<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center"
  >
    <div class="relative w-32 h-32 mb-8">
      <div
        class="absolute bottom-0 w-full h-24 bg-black rounded-b-lg rounded-t-[30px] overflow-hidden"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-black overflow-hidden">
          <div
            class="absolute -top-5 left-0 w-[200%] h-32 bg-[#8B5A34] animate-wave rounded-[40%]"
          ></div>
        </div>
        <div class="absolute top-6 -right-3 w-6 h-10 border-4 border-black rounded-r-full"></div>
      </div>
      <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div
          v-for="i in 3"
          :key="i"
          class="w-2 h-8 bg-brown-500 rounded-full animate-steam"
          :style="`animation-delay: ${i * 0.2}s`"
        ></div>
      </div>
    </div>
    <div class="flex items-center mb-4">
      <span class="text-2xl font-serif text-black mr-2">Sedang menyiapkan</span>
      <div class="flex space-x-1">
        <div
          v-for="i in 3"
          :key="i"
          class="w-3 h-3 bg-black rounded-full animate-bounce"
          :style="`animation-delay: ${i * 0.1}s`"
        ></div>
      </div>
    </div>
    <div class="w-64 h-2 bg-black rounded-full overflow-hidden">
      <div
        class="h-full bg-brown-500 rounded-full transition-all duration-300"
        :style="`width: ${progress}%`"
      ></div>
      <div class="absolute -bottom-1 left-0 w-full h-1 bg-black/20 rounded-full"></div>
    </div>
    <p class="mt-6 text-white/70 text-sm italic max-w-md text-center px-4">
      {{ coffeeTips[currentTip] }}
    </p>
  </div>

  <div v-else>
    <Homeview />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Homeview from '@/pages/HomeView.vue'

const isLoading = ref(true)
const progress = ref(0)
const currentTip = ref(0)
const coffeeTips = ['']
onMounted(() => {
  currentTip.value = Math.floor(Math.random() * coffeeTips.length)
  const interval = setInterval(() => {
    progress.value += Math.random() * 10
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 100)
    }
  }, 100)
})
</script>

<style>
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes steam {
  0% {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-15px) scaleY(1.5);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-30px) scaleY(0.5);
    opacity: 0;
  }
}

.animate-wave {
  animation: wave 8s linear infinite;
}

.animate-steam {
  animation: steam 2s ease-out infinite;
}
</style>

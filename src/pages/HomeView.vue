<template>
  <div>
    <Navbar />
    <HeroSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/NavbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    HeroSection,
  },
})
</script>

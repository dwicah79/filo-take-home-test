<template>
  <div>
    <Navbar />
    <HeroSection />
    <DeliveryComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/NavbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import DeliveryComponent from '@/components/DeliveryComponent.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    HeroSection,
    DeliveryComponent,
  },
})
</script>

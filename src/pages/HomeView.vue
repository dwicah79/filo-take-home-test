<template>
  <div>
    <Navbar />
    <HeroSection />
    <DeliveryComponent />
    <AboutUsComponentVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/NavbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import DeliveryComponent from '@/components/DeliveryComponent.vue'
import AboutUsComponentVue from '@/components/AboutUsComponent.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    HeroSection,
    DeliveryComponent,
    AboutUsComponentVue,
  },
})
</script>

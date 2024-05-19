<template>
  <div class="mx-auto w-[900px] h-screen bg-white">
    <HeroSection />
    <slot />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
</script>

<style scoped></style>

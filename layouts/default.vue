<template>
  <div>
    <Header />
    <div class="py-[90px] lg:py-[120px]">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Layout/Footer.vue'
import Header from '~/components/Layout/Header/Header.vue'
import KM from '~/components/Layout/KM.vue'
</script>

<style scoped></style>

<template>
  <div>
    <Header />
    <div class="lg:my-[120px] my-[90px] min-h-[100vh]">
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

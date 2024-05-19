<template>
  <div class="mx-auto xl:w-[1000px] w-[90vw] h-screen bg-white">
    <Header />
    
    <div class="mt-[100px]">
      <KM class="mb-[20px]"/>
      <slot />
    </div>
    <Footer class="mt-[20px]"/>
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Layout/Footer.vue';
import Header from '~/components/Layout/Header.vue';
import KM from '~/components/Layout/KM.vue';
</script>

<style scoped></style>

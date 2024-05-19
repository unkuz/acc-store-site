<template>
  <div>
    <HeroSection />
    <TopSeller class="mt-[20px]"/>
    <AllProduct class="mt-[20px]"/>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import AllProduct from '~/components/HomePage/AllProduct/AllProduct.vue';
import TopSeller from '~/components/HomePage/TopSeller/TopSeller.vue';

</script>

<style scoped></style>

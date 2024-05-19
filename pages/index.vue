<template>
  <div>
    <HeroSection />
    <ProductList class="mt-[35px]" label="Sản phẩm đang bán"/>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import ProductList from '~/components/HomePage/ProductList.vue';
</script>

<style scoped></style>

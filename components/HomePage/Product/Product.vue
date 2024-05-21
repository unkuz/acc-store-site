<template>
  <div
    class="gradient flex w-full flex-col gap-[10px] overflow-hidden rounded-[20px] bg-[#69e7f8] p-[10px] shadow-lg shadow-[#69d0f8] dark:bg-[#242424]"
  >
    <NuxtImg :src="image" class="!w-full rounded-[15px] object-contain" />
    <div class="">
      <div class="text-[0.9rem] md:text-[1rem]">{{ name }}</div>
      <p class="flex items-center gap-[8px]">
        <span class="tex-[1rem] font-bold text-[#ae4aff] md:text-[1.2rem]">{{ priceSale }}</span>
        <span class="text-[0.8rem] line-through md:text-[0.9rem]">{{ priceOrigin }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  image: string
  name: string
  priceSale: string
  priceOrigin: string
}>()
</script>

<style></style>

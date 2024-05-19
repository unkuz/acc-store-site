<template>
  <div>
    <lable>{{ label }}</lable>
    <div class="grid w-full grid-cols-1 gap-[15px] md:grid-cols-2 xl:grid-cols-3">
      <div class="h-[160px] w-full rounded-[10px] bg-[#d09efab4]"></div>
      <div class="h-[160px] w-full rounded-[10px] bg-[#3ce8ee]"></div>
      <div class="h-[160px] w-full rounded-[10px] bg-[#e8f081]"></div>
      <div class="h-[160px] w-full rounded-[10px] bg-[#ffc446]"></div>
      <div class="h-[160px] w-full rounded-[10px] bg-[#27ee38]"></div>
      <div class="h-[160px] w-full rounded-[10px] bg-[#414446]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<style></style>

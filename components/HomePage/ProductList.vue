<template>
  <div>
    <lable>{{ label }}</lable>
    <div class="grid w-full grid-cols-1 gap-[15px] md:grid-cols-2 xl:grid-cols-3">
      <div class="h-[160px] w-full rounded-[20px] bg-yellow-300"></div>
      <div class="h-[160px] w-full rounded-[20px] bg-yellow-300"></div>
      <div class="h-[160px] w-full rounded-[20px] bg-yellow-300"></div>
      <div class="h-[160px] w-full rounded-[20px] bg-yellow-300"></div>
      <div class="h-[160px] w-full rounded-[20px] bg-yellow-300"></div>
      <div class="h-[160px] w-full rounded-[20px] bg-yellow-300"></div>
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

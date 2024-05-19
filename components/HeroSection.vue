<template>
  <div
    ref="container"
    class="keen-slider rounded-[10px] *:text-black *:h-[200px] *:flex *:justify-center *:items-center *:bg-amber-400"
  >
    <div class="keen-slider__slide w-full font-semibold">Web bán account premium giá rẻ</div>
    <div class="keen-slider__slide w-full">2</div>
    <div class="keen-slider__slide w-full">3</div>
    <div class="keen-slider__slide w-full">4</div>
    <div class="keen-slider__slide w-full">5</div>
    <div class="keen-slider__slide w-full">6</div>
  </div>
  <UToggle v-model="selected"  size="lg"/>

</template>

<script setup lang="ts">
import 'keen-slider/keen-slider.css'
import { useKeenSlider } from 'keen-slider/vue'
const [container, slider] = useKeenSlider({ loop: true }, [])

const selected = ref(false)

</script>

<style scoped></style>

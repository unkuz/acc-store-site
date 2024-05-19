<template>
  <div
    ref="container"
    class="keen-slider rounded-[10px] *:flex *:h-[200px] *:items-center *:justify-center *:bg-[#93ec58] *:text-black"
  >
    <div class="keen-slider__slide w-full font-semibold">Web bán account premium giá rẻ</div>
    <div class="keen-slider__slide w-full">2</div>
    <div class="keen-slider__slide w-full">3</div>
    <div class="keen-slider__slide w-full">4</div>
    <div class="keen-slider__slide w-full">5</div>
    <div class="keen-slider__slide w-full">6</div>
  </div>
</template>

<script setup lang="ts">
import 'keen-slider/keen-slider.css'
import { useKeenSlider } from 'keen-slider/vue'
const [container, slider] = useKeenSlider({ loop: true }, [])

const timerRef = ref<NodeJS.Timeout>()

onMounted(() => {
  timerRef.value = setInterval(() => {
    slider.value?.next()
  }, 3_000)
})

onUnmounted(() => {
  clearInterval(timerRef.value)
})

const selected = ref(false)
</script>

<style scoped></style>

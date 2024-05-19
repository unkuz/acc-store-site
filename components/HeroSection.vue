<template>
  <div
    ref="container"
    class="keen-slider *:flex *:h-[350px] *:items-center *:justify-center  *:text-black rounded-[20px] text-[4rem] shadow-xl"
  >
    <div class="keen-slider__slide w-full font-semibold bg-[#93ec58]">Web bán Account Premium giá rẻ</div>
    <div class="keen-slider__slide w-full bg-[#58dbec]">Uy tín, chất lượng, bảo hành trọn thời gian sử dụng</div>
    <div class="keen-slider__slide w-full bg-[#9f69e7]">Ở đâu bán rẻ, chúng tôi còn bán rẻ hơn !</div>
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

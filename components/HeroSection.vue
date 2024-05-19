<template>
  <div
    ref="container"
    class="keen-slider rounded-[20px] sm:text-[2rem] text-[1.5rem] shadow-xl *:flex lg:!aspect-[3.5/1] aspect-[3/1] *:items-center *:justify-center *:text-black lg:text-[3.5rem]"
  >
    <div class="keen-slider__slide w-full h-full  bg-[#93ec58] px-[20px] font-semibold">
      <p class="text-center">Web bán Account Premium giá rẻ</p>
    </div>
    <div class="keen-slider__slide w-full  h-full bg-[#58dbec] px-[20px]">
      <p class="text-center">Uy tín, chất lượng, bảo hành trọn thời gian sử dụng</p>
      
    </div>
    <div class="keen-slider__slide w-full h-full bg-[#9f69e7] px-[20px]">
      <p class="text-center">Ở đâu bán rẻ, chúng tôi còn bán rẻ hơn !</p>
      
    </div>
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

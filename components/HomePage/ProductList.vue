<template>
  <div>
    <label class="text-[1.5rem] leading-[1.5rem]">{{ label }}</label>
    <div class="my-[10px] flex gap-[10px] ">
      <UButton
        v-for="(i, idx) in btnListFilter"
        :key="idx"
        size="xl"
        :loading="i === currentFilterBy ? loadingStatus : false"
        :color="i === currentFilterBy ? 'black' : 'white'"
        :ui="{ rounded: 'rounded-full' }"
        @click="handleClickFilter(i)"
        >{{ i }}</UButton
      >
    </div>
    <div class="grid w-full grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
      <div class="h-[300px] w-full rounded-[20px] bg-[#d09efab4] shadow-xl"></div>
      <div class="h-[300px] w-full rounded-[20px] bg-[#3ce8ee] shadow-xl"></div>
      <div class="h-[300px] w-full rounded-[20px] bg-[#e8f081] shadow-xl"></div>
      <div class="h-[300px] w-full rounded-[20px] bg-[#ffc446] shadow-xl"></div>
      <div class="h-[300px] w-full rounded-[20px] bg-[#27ee38] shadow-xl"></div>
      <div class="h-[300px] w-full rounded-[20px] bg-[#414446] shadow-xl"></div>
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

const btnListFilter = {
  all: 'Tất cả',
  learn: 'Học tập',
  entertaiment: 'Giải trí',
  movie: 'Phim ảnh',
}
const currentFilterBy = ref(btnListFilter.all)
const loadingStatus = ref(false)

const handleClickFilter = (btn: string) => {
  loadingStatus.value = true

  currentFilterBy.value = btn
  setTimeout(() => {
    loadingStatus.value = false
  }, 500)
}
</script>

<style></style>

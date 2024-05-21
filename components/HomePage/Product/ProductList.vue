<template>
  <div>
    <label class="text-[1.1rem] leading-[1.5rem] lg:text-[1.3rem]">{{ label }}</label>
    <div class="mb-[15px] mt-[15px] flex gap-[10px] lg:mb-[20px]">
      <UButton
        v-for="(i, idx) in btnListFilter"
        :key="idx"
        size="xl"
        :loading="i === currentFilterBy ? loadingStatus : false"
        :color="i === currentFilterBy ? 'black' : 'white'"
        :ui="{ rounded: 'rounded-full' }"
        @click="handleClickFilter(i)"
        :class="[
          { 'dark:bg-black': i !== currentFilterBy },
          '!h-[35px] text-[0.9rem] font-[700] lg:text-[1rem] [&>span]:h-[18px]',
        ]"
        trailing
        >{{ i }}</UButton
      >
    </div>
    <div
      class="grid w-full grid-cols-2 gap-x-[10px] gap-y-[20px] md:grid-cols-3 md:gap-x-[20px] md:gap-y-[30px] xl:grid-cols-4"
    >
      <Product
        v-for="i in PRODUCT_LIST"
        :key="i.id"
        :name="i.name"
        :image="i.image"
        :price-origin="i.priceOrigin"
        :price-sale="i.priceSale"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Product from './Product.vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
})

const PRODUCT_LIST = [
  {
    id: 1,

    image:
      'https://res.cloudinary.com/dg0cgbjgx/image/upload/v1716306096/Spotify-GiaHan-1y-65116_lso1o4.png',
    name: 'Spotify Premium 1 năm - Gia hạn chính chủ',
    priceSale: '235.000',
    priceOrigin: '590.000',
  },
]

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

<style scoped></style>

<template>
  <header
    class="fixed left-0 top-0 z-10 grid h-[60px] w-full grid-cols-4 border-b-[2px] border-b-[#7979791a] bg-[#ffffffd5] px-[10px] backdrop-blur-[3px] dark:bg-black sm:h-[80px] lg:h-[100px] lg:grid-cols-3 lg:px-[30px]"
  >
    <NuxtLink to="/" class="w-[60px] sm:w-[80px] lg:w-[100px]">
      <NuxtPicture format="avif,webp" src="/logo-min.png" />
    </NuxtLink>

    <div class="col-span-2 flex h-full w-full items-center justify-center lg:col-span-1">
      <Search class="lg:w-[700px]" />
    </div>

    <nav class="hidden items-center justify-end gap-[30px] lg:flex">
      <UToggle
        on-icon="i-heroicons-moon"
        off-icon="i-heroicons-sun"
        v-model="isDark"
        size="2xl"
        color="purple"
        :title="isDark ? 'Hiển thị tối' : 'Hiển thị sáng'"
      />
      <UIcon name="i-heroicons-archive-box" class="!text-[40px]" title="Giỏ hàng" />
      <UIcon
        name="i-heroicons-arrow-left-end-on-rectangle-20-solid"
        class="!text-[40px]"
        title="Đăng nhập"
      />
    </nav>
    <div class="flex h-full w-full items-center justify-end">
      <div
        class="flex h-[40px] w-[40px] flex-col items-center justify-center gap-[2px] rounded-[10px] border-[1px] border-[#7777776c] bg-transparent shadow-sm *:h-[5px] *:w-[5px] *:rounded-[50%] *:bg-[#414141] sm:h-[50px] sm:w-[50px] *:sm:h-[7px] sm:*:w-[7px] lg:hidden"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import Search from './Search.vue'

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<style></style>

<template>
  <header
    class="fixed left-0 top-0 z-10 grid h-[60px] grid-cols-3 border-b-[2px] border-b-[#7979791a] bg-[#ffffffd5] px-[30px] backdrop-blur-[3px] dark:bg-black sm:h-[80px] lg:h-[100px]"
  >
    <NuxtLink to="/" class="w-[60px] sm:w-[80px] lg:w-[100px]">
      <NuxtPicture format="avif,webp" src="/logo-min.png" />
    </NuxtLink>

    <div class="flex h-full w-full items-center justify-center">
      <Search />
    </div>

    <nav class="flex items-center justify-end gap-[30px]">
      <UToggle
        on-icon="i-heroicons-moon"
        off-icon="i-heroicons-sun"
        v-model="isDark"
        size="2xl"
        color="purple"
      />
      <UIcon name="i-heroicons-archive-box" class="!text-[40px]" title="Giỏ hàng" />
      <UIcon
        name="i-heroicons-arrow-left-end-on-rectangle-20-solid"
        class="!text-[40px]"
        title="Đăng nhập"
      />
    </nav>
  </header>
</template>
<script lang="ts" setup>
import Search from './Search.vue';

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

<template>
  <div class="w-screen fixed top-0 left-0  bg-[#fff] z-10 h-[60px] sm:h-[80px] lg:h-[100px]">
  <header
    class="h-full grid w-full mx-auto max-w-[1800px] grid-cols-5 border-b-[1px] border-b-[#7979791a]  px-[10px] backdrop-blur-[3px] dark:bg-black   lg:grid-cols-3 lg:px-0"
  >
    <NuxtLink to="/" class="aspect-square w-[58px] sm:w-[78px] lg:w-[100px]">
      <NuxtImg format="avif,webp" src="/logo-min.png" class="!h-full !w-full" />
    </NuxtLink>

    <div class="col-span-3 flex h-full w-full items-center justify-center lg:col-span-1">
      <Search class="lg:w-[700px]" />
    </div>

    <nav class="hidden items-center justify-end gap-[30px] lg:flex">
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
</div>
</template>
<script lang="ts" setup>
import Search from './Search.vue'
</script>

<style></style>

<template>
  <header
    class="fixed left-1/2 top-0 z-10 grid h-[60px] w-[100vw] -translate-x-1/2 grid-cols-3 border-b-[1px] border-b-[#79797949] bg-[#fff] backdrop-blur-[2px] xl:w-[1000px] dark:bg-transparent"
  >
    <ULink to="/" class="flex items-center justify-start"> ShopTkGiaRe </ULink>
    <div class="flex h-full w-full items-center justify-center">
      <UInput
        size="lg"
        trailing
        icon="i-heroicons-magnifying-glass-20-solid"
        :loading="false"
        color="indigo"
        variant="outline"
        placeholder="Search..."
      />
    </div>

    <nav class="flex items-center justify-end gap-[20px]">
      <UToggle
        on-icon="i-heroicons-moon"
        off-icon="i-heroicons-sun"
        v-model="isDark"
        size="lg"
        color="purple"
      />
      <UIcon name="i-heroicons-archive-box" class="!text-[20px]" alt="Giỏ hàng" />
      <UIcon name="i-heroicons-archive-box" class="!text-[20px]" alt="Giỏ hàng" />
      <UIcon name="i-heroicons-arrow-left-end-on-rectangle-20-solid" class="!text-[20px]" />
    </nav>
  </header>
</template>
<script lang="ts" setup>
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

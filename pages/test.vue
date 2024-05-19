<template>
  <div>
    <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
    <UPopover>
    <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" />

    <template #panel>
      <div class="p-4">
      </div>
    </template>
  </UPopover>
  </div>
</template>

<script lang="ts" setup>
const toast = useToast()

</script>

<style>

</style>
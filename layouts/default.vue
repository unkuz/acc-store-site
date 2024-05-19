<template>
  <Header />

  <div class="my-[70px]">
    <UBreadcrumb
      divider="/"
      class="mb-[10px]"
      :links="[{ label: 'Home', to: '/' }, { label: 'Navigation' }, { label: 'Breadcrumb' }]"
    />
    <!-- <KM class="mb-[20px]"/> -->
    <slot />
  </div>
  <Footer class="mt-[20px]" />
</template>

<script setup lang="ts">
import Footer from '~/components/Layout/Footer.vue'
import Header from '~/components/Layout/Header.vue'
import KM from '~/components/Layout/KM.vue'
</script>

<style scoped></style>

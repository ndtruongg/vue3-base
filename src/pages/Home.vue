<script setup lang="ts">
import { inject } from 'vue'

const $toast = inject('$toast') as (message: string) => void

const showToast = () => {
  $toast('Hello, VitePress!')
}
</script>

<template>
  <div>
    <section class="relative">{{ $t('module.hello') }}</section>

    <button @click="showToast">Show toast</button>
  </div>
</template>

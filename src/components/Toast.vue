<template>
  <div
    class="fixed left-1/2 top-4 z-[1000] -translate-x-1/2 transform rounded bg-black p-4 text-white"
  >
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  message: String
})
</script>

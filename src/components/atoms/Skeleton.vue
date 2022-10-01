<template>
  <div class="ske">&nbsp;</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  height: {
    type: String
  },
  width: {
    type: String
  },
  borderRadius: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
.ske {
  height: v-bind(height);
  width: v-bind(width);
  border-radius: v-bind(borderRadius);
  background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2 rgba(0, 0, 0, 0.1);
  animation: bgAnimate 1.2s linear infinite;
}

@keyframes bgAnimate {
  0% {
    background-position: 50% 0%;
  }
  100% {
    background-position: -150% 0%;
  }
}
</style>

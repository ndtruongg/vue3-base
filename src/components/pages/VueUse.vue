<template>
  <div>
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
  </div>
</template>

<script setup>
import { useMouse } from '@vueuse/core';
import { reactive } from 'vue';

const { x, y } = useMouse();
const mouse = reactive(useMouse());

console.log(mouse);
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import { useCountStore } from '@/store/useCountStore';

const counter = useCountStore();

counter.setCounter();
</script>

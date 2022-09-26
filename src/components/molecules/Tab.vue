<template>
  <div class="tab-content" v-show="title == selectedTitle">
    <slot />
  </div>
</template>

<script setup>
import { inject, defineProps } from 'vue';

defineProps({
  title: String
});

const selectedTitle = inject('selectedTitle');
</script>

<style>
.tab-content {
  height: 300px;
  padding: 20px;
  border-radius: 20px;
  background: #f6f6f6;
}
</style>

<template>
  <TheHeader />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <TheFooter />
</template>

<script setup>
import TheHeader from '@/components/organisms/TheHeader.vue';
import TheFooter from '@/components/organisms/TheFooter.vue';
</script>

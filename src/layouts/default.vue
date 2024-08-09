<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="`animate__faster animate__animated animate__fadeInRight`"
      :leave-active-class="`animate__faster animate__animated animate__fadeOutLeft`"
      mode="out-in"
    >
      <component :is="Component" ::key="route.path" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/useUserStore';

const user = useUserStore();

console.log(user);

user.getInfo();

// console.log(user);
</script>

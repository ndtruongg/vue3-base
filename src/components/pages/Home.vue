<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
  </div>

  <VideoPlayer :src="videoUrl" />
</template>

<script setup>
import VideoPlayer from '@/components/atoms/VideoPlayer.vue';

const videoUrl = require('@/assets/videos/left_and_right.mp4');
</script>

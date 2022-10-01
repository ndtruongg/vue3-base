<template>
  <div class="news">
    <div class="news__img">
      <Skeleton height="100px" width="100px" border-radius="50%" />
    </div>
    <div class="news__detail">
      <Skeleton height="24px" class="mb-10" width="200px" border-radius="3px" />
      <Skeleton height="16px" class="mb-5" width="100%" border-radius="3px" />
      <Skeleton height="16px" class="mb-5" width="100%" border-radius="3px" />
      <Skeleton height="16px" width="100%" border-radius="3px" />
    </div>
  </div>
</template>

<script setup>
import Skeleton from '../atoms/Skeleton.vue';
</script>

<style lang="scss" scoped>
.news {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;

  &__img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__detail {
    padding: 0 12px;
    flex-grow: 1;
  }
}
</style>

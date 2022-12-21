<template>
  <div class="news">
    <div class="news__img">
      <img
        src="https://img.hoidap247.com/picture/answer/20200925/large_1601033451475.jpg"
        alt="badminton"
      />
    </div>
    <div class="news__detail">
      <h3>Badminton</h3>
      <p>Lororibus incidunt! Vitae sunt in adipisci amet placeat ea?</p>
    </div>
  </div>
</template>

<script setup>
await new Promise((res) => setTimeout(res, 2000));
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

    img {
      width: 100%;
    }
  }

  &__detail {
    padding: 0 12px;
    h3 {
      font-size: 18px;
    }
  }
}
</style>

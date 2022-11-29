<template>
  <div :style="{ height: height + 'px' }" class="comment-box">{{ text }}</div>
</template>

<script setup>
import { defineProps, onMounted, ref, computed } from 'vue';

const props = defineProps({
  comment: Object,
});

const i = ref(0);
const text = ref('');

const height = computed(() => {
  const txt = props.comment.content;
  const row = Math.ceil(txt.length / 17);

  return row * 25 + 20;
});

const typeWriter = () => {
  const txt = props.comment.content;
  if (i.value < txt.length) {
    text.value += txt.charAt(i.value);
    i.value++;
    setTimeout(typeWriter, 5);
  }
};

onMounted(() => {
  typeWriter();
});
</script>

<style lang="scss" scoped>
.comment-box {
  padding: 10px;
  background-color: aliceblue;
  border-radius: 10px;
  margin-bottom: 10px;
  width: fit-content;
  max-width: 300px;
  transition: ease all 0.3s;
  line-height: 25px;
}
</style>

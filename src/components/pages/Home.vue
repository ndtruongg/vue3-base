<template>
  <TransitionGroup name="list" tag="div" class="list-comment">
    <CommentBox v-for="item in comments" :key="item.id" :comment="item" />
  </TransitionGroup>

  <button @click="addComment">add comment</button>

  <VideoPlayer :src="videoUrl" />
</template>

<script setup>
import VideoPlayer from "@/components/atoms/VideoPlayer.vue";
import { reactive } from "vue";
import CommentBox from "../atoms/CommentBox.vue";

const videoUrl = require("@/assets/videos/left_and_right.mp4");

let comments = reactive([
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elolore iusto.",
  },
]);

const generatorParagraph = (length) => {
  let txt = "";
  for (let i = 0; i < length + 1; i++) {
    txt += "也称乱";
  }

  return txt;
};

const addComment = () => {
  const newComment = {
    id: comments.length,
    content: generatorParagraph(Math.floor(Math.random() * 100)),
  };

  comments.unshift(newComment);
};
</script>

<style lang="scss" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.list-comment {
  display: flex;
  flex-direction: column;
}
</style>

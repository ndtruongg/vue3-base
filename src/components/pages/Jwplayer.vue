<template>
  <button @click="changeUrl">Change URL</button>
  <div id="video-player"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const videoUrl = ref(
  // '//playertest.longtailvideo.com/adaptive/bunny/manifest-no-captions.m3u8'
  '//cdn.jwplayer.com/manifests/RDn7eg0o.m3u8'
);
let backgroundVideo = null;

const createJWP = (id) => {
  const jwP = window.jwplayer(id);

  backgroundVideo = jwP.setup({
    playlist: [
      {
        file: videoUrl.value,
      },
      {
        file: videoUrl.value,
      },
      {
        file: videoUrl.value,
      },
    ],
    width: `50%`,
    autostart: true,
    mute: true,
    // autostart: false,
    // controls: true,
    // // sources: makeSources(src),
    // mute: false,
    // displaytitle: false,
    // repeat: false,
    // width: '100%',
    // aspectratio: '16:9',
    // androidhls: true,
    // pipIcon: 'disabled',
    // image:
    //   'https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.jpg',
    // playbackRateControls: true,
    // playbackRates: [0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
  });
};

const convertStrtoTime = (str) => {
  let data = str;
  if (str.split(':').length === 2) data = `00:${str}`;
  const [hours, minutes, seconds] = data.split(':');
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
};

const changeUrl = () => {
  videoUrl.value = '//cdn.jwplayer.com/manifests/RDn7eg0o.m3u8';
  backgroundVideo.seek(convertStrtoTime('00:12'));
};

onMounted(() => {
  createJWP('video-player');
  console.log(backgroundVideo);
});
</script>

<style lang="scss" scoped></style>

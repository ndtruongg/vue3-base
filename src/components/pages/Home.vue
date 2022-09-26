<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
  </div>

  <TabsWrapper>
    <Tab title="Tab 1">Hello from tab 1</Tab>
    <Tab title="Tab 2">Hello from tab 2</Tab>
    <Tab title="Tab 3">Hello from tab 3</Tab>
    <Tab title="Tab 4">Hello from tab 4</Tab>
  </TabsWrapper>
</template>

<script setup>
import TabsWrapper from '../molecules/TabsWrapper.vue';
import Tab from '../molecules/Tab.vue';
</script>

<template>
  <div class="container">
    <TabsWrapper class="mb-20">
      <Tab title="Tab 1">Hello from tab 1</Tab>
      <Tab title="Tab 2">Hello from tab 2</Tab>
      <Tab title="Tab 3">Hello from tab 3</Tab>
      <Tab title="Tab 4">Hello from tab 4</Tab>
    </TabsWrapper>

    <Suspense>
      <NewsBox class="mb-20" />
      <template #fallback>
        <NewsBoxSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import TabsWrapper from '../molecules/TabsWrapper.vue';
import Tab from '../molecules/Tab.vue';
import NewsBox from '../molecules/NewsBox.vue';
import NewsBoxSkeleton from '../molecules/NewsBoxSkeleton.vue';
</script>

<style lang="scss" scoped></style>

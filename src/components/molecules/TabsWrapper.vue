<template>
  <div class="tabs">
    <ul class="tabs__header tabs__light">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
        :class="title == selectedTitle ? 'tab__selected' : ''"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
import { ref, provide, useSlots } from 'vue';

const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);

provide('selectedTitle', selectedTitle);
</script>

<style>
ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}
ul.tabs__header > li {
  padding: 15px 30px;
  border-radius: 10px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}
ul.tabs__header > li.tab__selected {
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  border-bottom: 8px solid transparent;
}
.tab {
  display: inline-block;
  color: black;
  padding: 20px;
  min-width: 800px;
  border-radius: 10px;
  min-height: 400px;
}
.tabs__light .tab {
  background-color: #fff;
}
.tabs__light li {
  background-color: #ddd;
  color: #aaa;
}
.tabs__light li.tab__selected {
  background-color: #fff;
  color: #595959;
}
.tabs__dark .tab {
  background-color: #555;
  color: #eee;
}
.tabs__dark li {
  background-color: #ddd;
  color: #aaa;
}
.tabs__dark li.tab__selected {
  background-color: #555;
  color: white;
}
</style>

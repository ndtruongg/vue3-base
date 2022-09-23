import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  state: () => ({
    counter: 0
  }),

  getters: {
    myCounter: (state) => state.counter
  },

  actions: {
    setCounter() {
      this.counter++;
    }
  }
});

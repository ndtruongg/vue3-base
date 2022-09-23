import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    info: {}
  }),

  getters: {
    userInfo: (state) => state.info
  },

  actions: {
    getInfo() {
      this.info = {
        name: 'Friday',
        age: 25
      };
    }
  }
});

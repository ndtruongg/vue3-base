export const state = {
  isLoading: false,
};
export const getters = {
  isLoading: (state) => state.isLoading,
};
export const mutations = {
  SET_IS_LOADING(state, data) {
    state.isLoading = data;
  },
};
export const actions = {
  getIsLoading({ commit }, data) {
    commit('SET_IS_LOADING', data);
  },
};

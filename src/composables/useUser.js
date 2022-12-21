import { ref, toRefs } from 'vue';

export const useUser = () => {
  const user = ref({
    name: 'Shane',
    age: 26,
  });

  const resetName = () => {
    user.value.name = '';
  };

  return {
    resetName,
    ...toRefs(user.value),
  };
};

<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <div>
        <label for="">Username</label>
        <input type="text" name="username" v-model="username" />
      </div>

      <div>
        <label for="">Password</label>
        <input type="password" name="password" v-model="password" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

/**
 * ! Submit data to login
 */
const handleSubmit = () => {
  const formData = {
    username: username.value,
    password: password.value
  };

  console.log(formData);
};
</script>

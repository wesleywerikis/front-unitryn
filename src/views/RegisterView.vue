<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
    <p>{{ success }}</p>
    <router-link to="/login">Already have an account?</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../services/api';

const name = ref('');
const email = ref('');
const password = ref('');
const success = ref('');

async function register() {
  await api.post('/api/users', {
    name: name.value,
    email: email.value,
    password: password.value,
  });
  success.value = 'User created. You can log in now.';
}
</script>

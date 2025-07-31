<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-left">
        <h2>Crie sua conta</h2>
        <p>Cadastre-se e aproveite todos os recursos do sistema.</p>
      </div>

      <div class="login-right">
        <h3 class="text-center mb-4">Bem-vindo!</h3>
        <p class="text-center text-muted mb-4">Preencha os campos abaixo</p>

        <form @submit.prevent="register">
          <div class="input-group mb-3">
            <span class="input-icon"><i class="fas fa-user"></i></span>
            <input v-model="name" type="text" class="form-control custom-input" placeholder="Nome" required />
          </div>

          <div class="input-group mb-3">
            <span class="input-icon"><i class="fas fa-envelope"></i></span>
            <input v-model="email" type="email" class="form-control custom-input" placeholder="Email" required />
          </div>

          <div class="input-group mb-3">
            <span class="input-icon"><i class="fas fa-lock"></i></span>
            <input v-model="password" type="password" class="form-control custom-input" placeholder="Senha" required />
          </div>

          <div v-if="success" class="alert alert-success text-sm p-2 mb-3">
            {{ success }}
          </div>

          <div v-if="error" class="alert alert-danger text-sm p-2 mb-3">
            {{ error }}
          </div>

          <button type="submit" class="btn-login">Cadastrar</button>
        </form>

        <div class="text-center mt-3">
          <router-link to="/login" class="text-muted small">
            Já tem uma conta? <span class="text-primary">Entrar</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../services/api';

const name = ref('');
const email = ref('');
const password = ref('');
const success = ref('');
const error = ref('');

async function register() {
  success.value = '';
  error.value = '';

  try {
    await api.post('/api/users', {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    success.value = 'Conta criada com sucesso! Agora você pode entrar.';
    name.value = '';
    email.value = '';
    password.value = '';
  } catch (err) {
    error.value = 'Erro ao registrar. Tente novamente.';
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Reutiliza os estilos da tela de login */
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #e0e9ff;
}

.login-card {
  background: white;
  border-radius: 1.2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  display: flex;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
}

.login-left {
  background: linear-gradient(135deg, #6a00f4, #a159f2);
  color: white;
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.login-left h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.login-left p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.login-right {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input-group {
  position: relative;
  margin-bottom: 0.9rem;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 0.9rem;
}

.custom-input {
  padding-left: 34px;
  height: 36px;
  font-size: 0.9rem;
  border-radius: 18px;
  border: 1px solid #ccc;
  width: 100%;
}

.custom-input:focus {
  border-color: #6a00f4;
  box-shadow: 0 0 0 1.5px rgba(106, 0, 244, 0.15);
  outline: none;
}

.btn-login {
  margin-top: 0.5rem;
  background: linear-gradient(90deg, #6a00f4, #a159f2);
  color: white;
  border: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 18px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-login:hover {
  opacity: 0.9;
}

.alert {
  font-size: 0.85rem;
  padding: 0.5rem;
  border-radius: 6px;
}

.text-muted {
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .login-card {
    flex-direction: column;
    border-radius: 1rem;
    max-width: 90%;
  }

  .login-left,
  .login-right {
    width: 100%;
    padding: 1.2rem;
  }

  .login-left h2 {
    font-size: 1.2rem;
  }

  .login-left p {
    font-size: 0.85rem;
  }
}
</style>

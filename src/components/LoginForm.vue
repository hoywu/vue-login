<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { jumpIfTokenValid } from '@/utils/utils';
{
  jumpIfTokenValid('/dashboard').catch(() => { });
}
import $ from '@/utils/api';
import * as t from '@/utils/toast'
const to = useToast();

const username = ref('')
const password = ref('')

function login() {
  $.Login(username.value, password.value).then(resp => {
    if (resp.data.code !== 0) {
      t.error(to, "登录失败", resp.data.msg)
      return
    }
    t.success(to, "登录成功", username.value + " 欢迎您")
    localStorage.setItem('token', resp.data.data.token);
    location.href = '/dashboard'
  }).catch(err => {
    t.error(to, "请求失败", err)
  })
}
</script>

<template>
  <div class="wrapper-center-card">
    <div id="form">
      <h1>欢迎</h1>
      <InputText v-model="username" placeholder="Username" />
      <Password v-model="password" placeholder="Password" toggleMask :feedback="false" />
    </div>
    <div id="control">
      <Button label="登录" icon="pi pi-sign-in" @click="login" />
      <RouterLink to="register">
        <Button label="没有账号？点击注册" link />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
#form {
  display: flex;
  flex-direction: column;

  width: 350px;
  gap: 15px;
  margin: 0 auto;
  padding: 20px;
}

#control {
  display: flex;
  flex-direction: column;

  gap: 5px;
  margin: 0 auto;
  padding-bottom: 20px;
  align-items: center;
}
</style>

<style>
.p-password-input {
  width: 100%;
}
</style>

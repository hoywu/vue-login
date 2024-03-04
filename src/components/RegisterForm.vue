<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
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
const r = useRouter();

let disableButton = ref(true)

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const nickname = ref('')

function register() {
  $.Register(username.value, password.value, nickname.value).then(resp => {
    if (resp.data.code !== 0) {
      t.error(to, "注册失败", resp.data.msg)
      return
    }
    t.success(to, "注册成功", "欢迎 " + username.value)
    localStorage.setItem('token', resp.data.data.token);
    r.push('/')
  }).catch(err => {
    t.error(to, "请求失败", err)
  })
}

function ButtonCheck() {
  if (
    username.value.length < 5
    || password.value.length < 8
    || confirmPassword.value !== password.value
    || nickname.value.length < 1
  ) {
    disableButton.value = true
  } else {
    disableButton.value = false
  }
}

function validateUsername() {
  if (username.value.length < 5) {
    t.warn(to, "用户名过短", "用户名长度至少为5")
  }
  ButtonCheck()
}

function validatePwd() {
  if (password.value.length < 8) {
    t.warn(to, "密码过短", "密码长度至少为8")
  }
  ButtonCheck()
}

function validateConfirmPwd() {
  if (confirmPassword.value !== password.value) {
    t.warn(to, "密码不一致", "两次输入的密码不一致")
  }
  ButtonCheck()
}

function validateNickname() {
  if (nickname.value.length < 1) {
    t.warn(to, "昵称过短", "昵称长度至少为1")
  }
  ButtonCheck()
}
</script>

<template>
  <div class="wrapper-center-card">
    <div id="form">
      <h1>注册</h1>
      <InputText v-model="username" placeholder="Username"
                 @blur="validateUsername" />
      <Password v-model="password" placeholder="Password"
                @blur="validatePwd" toggleMask />
      <Password v-model="confirmPassword" placeholder="Confirm Password"
                @blur="validateConfirmPwd" toggleMask :feedback="false" />
      <InputText v-model="nickname" placeholder="Nickname"
                 @blur="validateNickname" />
    </div>
    <div id="control">
      <Button label="注册" icon="pi pi-user-plus"
              @click="register" :disabled="disableButton" />
      <RouterLink to="login">
        <Button label="已有账号？点击登录" link />
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

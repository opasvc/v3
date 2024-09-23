<template>
  <div class="relative w-full h-full px-4">
    <el-input v-model="from.username"></el-input>
    <el-input v-model="from.password"></el-input>
    {{ name }}
    <el-button @click="login">登录 </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { login as userApi } from '../api/userApi/UserApi'
import { ElMessage } from 'element-plus'
import router from '@/router'
const name = ref('')
const from = reactive({ username: '', password: '' })
const login = async () => {
  console.log(from)
  const r = await userApi(from)
  console.log(r)
  localStorage.setItem('Authorization', r.data)
  ElMessage.success('登录成功')
  if (r.code === 200) {
    router.push({ path: 'home' })
  }
}

</script>

<script lang="ts">
export default {
  name: 'LoginView'
}
</script>
<style lang="less"></style>

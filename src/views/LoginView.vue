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
const name = ref('')
const from = reactive({ username: '', password: '' })
const login = async () => {
  console.log(from)
  const r = await userApi(from)
  console.log(r)
  name.value = r.data + r.localTime
  localStorage.setItem('Authorization', r.data)
  ElMessage.success('登录成功')
}

</script>

<script lang="ts">
export default {
  name: 'LoginView'
}
</script>
<style lang="less"></style>

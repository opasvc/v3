<template>
  <div class="relative w-full h-full px-4">
    <el-input v-model="from.username"></el-input>
    <el-input v-model="from.password"></el-input>
    {{ amove }}
    <el-button @click="login">登录 {{ name }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { get, post } from '@/utils/http/axiosUtils'

const name = ref('123456')
const from = reactive({ username: '', password: '' })
const login = async () => {
  console.log(name.value)
  console.log(from)
  post('/user/login', from).then((res) => {
    const r = res.data
    // if (r.code === 200) {
    console.log(r)
    // }
  })
}

// 计算属性
const amove = computed(() => {
  return name.value + '1'
})
</script>

<script lang="ts">
export default {
  name: 'LoginView'
}
</script>
<style lang="less"></style>

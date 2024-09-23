<template>
  <div class="hello">
    <h1>用户信息表</h1>
    <el-button @click="queryUserInfo" type="primary">查询</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="90" />
      <el-table-column prop="name" label="用户名" width="90" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getUserInfo } from '../api/userApi/UserApi'
const tableData = ref([])

const queryUserInfo = async () => {
  const r = await getUserInfo()
  console.log(r)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div class="home">
    <!-- <HelloWorld msg="欢迎来到Vue.js + TypeScript 练习App"/> -->
    <UserInfoTable />
  </div>
</template>

<script lang="ts" setup>

</script>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import UserInfoTable from '@/components/UserInfoTable.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld
    UserInfoTable
  }
})
</script>

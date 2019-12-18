<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    this.test()
  },
  methods: {
   async test () {
     let res = await this.$axios({
        url: 'http://localhost:8081/api/test',
        method: 'get',
        data:{},
      })
      console.log(res)
    }
  }
}
</script>

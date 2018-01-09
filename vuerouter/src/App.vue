<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <div>
      <button @click="goBack">后退</button> |
      <button @click="goTo">前进</button> |
      <button @click="goHone">返回首页</button>
    </div>
    <router-link to="/">Home</router-link><br>
    <router-link to="/Params/1108/wikiHong is a lucky girl">Params</router-link><br>
    <router-link to="/goHome">goHome</router-link><br>
    <router-link to="/Params/0106/hello">goParams</router-link><br>
    <router-link to="/Hi1">Hi1</router-link>
    <router-link to="/wikiHong">wikiHong</router-link>
    <router-link to="/12345">我是瞎写的哦~~</router-link>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    // 后退
    goBack () {
      let _this = this
      _this.$router.go(-1)
    },
    // 前进
    goTo () {
      let _this = this
      _this.$router.go(1)
    },
    // 编程式跳转
    goHone () {
      let _this = this
      _this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>

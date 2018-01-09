<template>
  <div>
    {{ msg }}
    <p></p>
    <p>newsId: {{ $route.params.newsId }}</p>
    <p>newsTitle: {{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I am params page'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入params模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开params模板')
    next()
  }
}
</script>

<style>

</style>

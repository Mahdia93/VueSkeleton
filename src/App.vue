<template>
  <div id="app">
    <h1 class="ui header">
      <i class="telegram icon"></i>
      <div class="content">
        Vue Skeleton
        <div class="sub header">Now With Semantic UI & SASS!</div>
      </div>
    </h1>

    <div class="ui inverted menu">
      <router-link to="/" class="item">
        <i class="home icon"></i> Home
      </router-link>
      <router-link to="/sandbox" class="item">
        <i class="configure icon"></i> Sandbox
      </router-link>
    </div>  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}
</style>

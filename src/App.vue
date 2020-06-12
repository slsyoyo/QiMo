<template>
  <div id="app">
    <Menu mode="horizontal" theme="primary" >
      <MenuItem name="1" to="/" >
        首页
      </MenuItem>
      <MenuItem name="2" to="/morning" >
        早安心语
      </MenuItem>
      <MenuItem name="3" to="/aphorism" >
        名言警句
      </MenuItem>
      <MenuItem name="4" to="/joke" >
        笑话大全
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Aphorism from './components/Aphorism'
  import Morning from './components/Morning.vue'
  import Joke from './components/Joke.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Morning,
    Aphorism,
    Joke
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
  margin-top: 30px;
}
</style>

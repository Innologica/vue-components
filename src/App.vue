<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <clockpicker data-autoclose="true"></clockpicker>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Clockpicker from './components/Clockpicker'

export default {
  name: 'app',
  components: {
    Hello,
    Clockpicker
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
</style>

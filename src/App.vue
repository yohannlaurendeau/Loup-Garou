<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to LOUP"/>
    <Mechanic :socket="socket" />
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Mechanic from './components/Mechanic.vue'


import io from 'socket.io-client';


export default {
  name: 'app',
  components: {
    HelloWorld,
    Mechanic
  },
  data(){
    return {
      socket: io('http://localhost:3000')
    }
  },
  mounted(){
    this.socket.emit('test', 'oui')
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

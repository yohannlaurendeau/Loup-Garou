<template>
  <div id="mechanic">
    <h1>Exemple mechanics</h1>

    <h2>Un petit test de button</h2>
    <button @click="test">Test button</button>
    <p>Le button appelle la méthod test via @click et change la couleur du background en rouge</p>

    <h2>Call au back simple</h2>
    <button @click="simpleCall">Call simple</button>
    <p>Le button appelle la méthod simpleCall via @click, le message s'affiche dans la console du back</p>

    <h2>Call au back avec retour</h2>
    <button @click="complexeCall">Call avec retour</button>
    <p>Le button appelle la méthod simpleCall via @click, le message s'affiche dans la console du back</p>


  </div>
</template>


<script>
export default {
  name: 'mechanic',
  props: {
    socket: Object,
  },
  mounted(){
    this.socket.emit('test', 'oui')
  },
  methods: {
    test() {
      document.querySelector("#mechanic").style.backgroundColor="red"
      //console.log("hello there")
    },
    simpleCall() {
      this.socket.emit('test', 'mon message juste ici')
    },
    complexeCall() {
      this.socket.emit('complexeCallToBack', 'mon message juste ici')

      this.socket.on('frontReceiveMsg',function(msg){
          console.log(msg);
      })  
    }
  }
}



</script>

<style>
#mechanic {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

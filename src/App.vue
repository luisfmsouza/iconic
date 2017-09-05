<template>
  <div id="app">
    <h2>Loading SVG icons with Vue.js:</h2>

    <img src="src/assets/icons/airplane.svg" alt="Airplane icon">
    <img src="src/assets/icons/beer.svg" alt="Beer icon">
    <img src="src/assets/icons/heart.svg" alt="Heart icon">
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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

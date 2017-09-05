<template>
  <div id="app">
    <h1>Loading SVG icons with Vue.js</h1>
    <small>My passions: </small>

    <icon name="airplane" width="50" height="50" color="#263238"></icon>
    <icon name="heart" width="50" height="50" color="#b71c1c"></icon>
    <icon name="beer" width="50" height="50" color="#F9A825"></icon>
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

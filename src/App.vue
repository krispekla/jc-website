<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    Header,
  },
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:ital,wght@0,400, 700;0,700;1,100&display=swap')

* *::after,
*::before
  box-sizing: border-box


*
  outline: none !important


html
  overflow-x: hidden
  position: relative
  font-size: 16px
  color: black
  min-height: 100vh
  font-weight: 400

body
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeLegibility
  margin: 0
  padding: 0
  color: black
  background: #fff

#app
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

h1, h2, h3, h4, h5
  font-family: 'Roboto', sans-serif;
  font-family: 'Abril Fatface', cursive;
</style>

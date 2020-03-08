<template>
  <div id="app">
    <Header />
    <Section1 />
  </div>
</template>

<script>
import Header from './components/Header'
import Section1 from './components/Section1'
export default {
  components: {
    Header,
    Section1,
  },
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:wght@300;400;700&display=swap');
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
  font-family: 'Merriweather', serif
</style>

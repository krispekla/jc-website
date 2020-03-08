<template>
  <div class="header-wrapper">
    <h1>Juraj Stojic</h1>
    <img src="../assets/player.png" id="player" />
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="sass">
.header-wrapper
  min-height: 100vh
  position: relative
  background: black
#player
  position: absolute
  bottom: 0
  z-index: 100
  max-width: 950px
  max-height: 850px

h1
  font-size: 5rem
  color: #fff
  position: absolute
  left: 20px
  top: 30px
  text-transform: uppercase
</style>

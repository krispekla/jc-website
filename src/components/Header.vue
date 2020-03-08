<template>
  <div class="header-wrapper">
    <h1>Juraj Stojic</h1>
    <span class="header-text-1">If you want to learn classical guitar you are at right place</span>
    <span class="header-text-2">You want your life to be more interesting</span>
    <span class="header-text-3">Be happier and make other people happier with your music</span>
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
  background: #1e1e1e
  background: #16111c
#player
  position: absolute
  bottom: 0
  z-index: 100
  max-width: 950px
  max-height: 850px

h1
  font-size: 3.5rem
  color: #f9f9f9
  position: absolute
  left: 90px
  top: 30px
.header-text-1
  position: absolute
  color: white
  left: 150px
  max-width: 850px
  top: 50%
  font-size: 2rem
.header-text-2
  position: absolute
  color: white
  max-width: 650px
  right: 350px
  top: 10%
  font-size: 2rem
.header-text-3
  position: absolute
  color: white
  right: 50px
  max-width: 450px
  top: 70%
  font-size: 2rem
</style>

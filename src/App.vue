<template>
  <div id="app">
    <IndexHeader></IndexHeader>
    <main>
      <router-view></router-view>
      <IndexAside :routeData='routeData'></IndexAside>
    </main>
    <router-view class="indexFooter" name="indexFooter"></router-view>
  </div>
</template>
<script>
import IndexAside from '../src/components/IndexAside'
import IndexHeader from '../src/components/IndexHeader'
export default {
  name: 'app',
  data () {
    return {
      routeData: 'hello'
    }
  },
  components: {
    IndexAside,
    IndexHeader
  },
  updated () {
    this.routeData = location.href.split('8080/')[1]
    // console.log(this.routeData)
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
  display: flex;
  flex-direction: column;
}
main{
  width: 100%;
  max-width: 1050px;
  margin: 150px auto 50px;
  display: flex;
  flex: 1;
  flex-direction: row;
}
html,body{
  margin: 0;padding: 0;
  overflow-x: hidden;
  background-color: #f1f5f5;
}
</style>

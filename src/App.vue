<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Welcome class="mt-2"></Welcome>
  </div>
</template>

<script>
import Welcome from './components/welcome' ;
import Header from './components/header';
export default {
  name: 'App',
  routes: [
    {path:'/', component: Welcome}
  ],
  components:{
    Header:Header,
    Welcome: Welcome
  }
}
</script>

<style>

</style>

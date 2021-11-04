<template>
  <div id="app">
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'
import axios from 'axios';


export default {
     mounted(){
     },
  name: 'App',
  components: {
    AppFooter,
  }

}
</script>

<style>
  /* reset.css */
  @import "./styles/reset.css";
  /* common.css */
  @import "./styles/common.css";

  #app {
    width: 100%;
    margin: 0 auto;
  }

  

</style>

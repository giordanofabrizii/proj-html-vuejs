<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
import "@fontsource/orbitron"; 
import "@fontsource/barlow";

  export default{
    components:{
      HeaderApp,
      MainApp,
      FooterApp,
    }
  }
</script>

<template>
  <HeaderApp/>
  <MainApp/>
  <FooterApp/>
</template>

<style>
*{
  font-family: 'Orbitron';
}
</style>
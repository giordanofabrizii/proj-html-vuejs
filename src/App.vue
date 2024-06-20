<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';
import Loader from './components/LoaderApp.vue';
import "@fontsource/orbitron"; 
import "@fontsource/barlow";

  export default{
    components:{
      HeaderApp,
      MainApp,
      FooterApp,
      Loader
    },
    data(){
      return{
        loader: true,
      }
    },
    mounted(){
      setTimeout(() => {
        this.loader = false;
      }, 1500);
    }
  }
</script>

<template>
  <Loader v-if="loader"/>
  <div v-else>
    <HeaderApp/>
    <MainApp/>
    <FooterApp/>
  </div>
</template>

<style>
*{
  font-family: 'Orbitron';
}
</style>
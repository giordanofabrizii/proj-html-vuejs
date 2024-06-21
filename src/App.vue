<script>
import HeaderApp from './components/Header/HeaderApp.vue';
import MainApp from './components/Main/MainApp.vue';
import FooterApp from './components/Footer/FooterApp.vue';
import Loader from './components/Utilities/LoaderApp.vue';
import ScrollUpButton from './components/Main/ScrollUpButtonApp.vue';
import "@fontsource/orbitron"; 
import "@fontsource/barlow";

  export default{
    components:{
      HeaderApp,
      MainApp,
      FooterApp,
      Loader,
      ScrollUpButton
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
    <ScrollUpButton/>
  </div>
</template>

<style>
*{
  font-family: 'Orbitron';
}
</style>
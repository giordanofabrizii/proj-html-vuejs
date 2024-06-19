<script>
import HeaderSticky from './Header/HeaderSticky.vue';
import HeaderJumbotron from './Header/HeaderJumbotron.vue';

export default{
  components:{
    HeaderSticky,
    HeaderJumbotron,
  },
    data() {
        return{
            
        }
    }
}
</script>

<template>
  <header>
    <HeaderSticky/>
    <HeaderJumbotron/>
  </header>
</template>

<style lang="scss" scoped>
  header{
    background-image: url('src/assets/img/index-banner-bg.png');
  }
</style>
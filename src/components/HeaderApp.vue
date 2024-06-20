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
    <HeaderSticky
    id="sticky"
    />

    <HeaderJumbotron/>
  </header>
</template>

<style lang="scss" scoped>
  header{
    background-image: url('src/assets/img/index-banner-bg.png');
    background-size: cover;

    &:first-child{
      position: sticky;
      top: 0;
      z-index: 1;
    }
  }
</style>
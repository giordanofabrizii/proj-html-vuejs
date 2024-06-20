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
  
    <HeaderSticky
    id="sticky"
    />

    <HeaderJumbotron/>
  
</template>

<style lang="scss" scoped>
  header{
    

    
  }
</style>
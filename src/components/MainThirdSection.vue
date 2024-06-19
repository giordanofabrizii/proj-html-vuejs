<script>
import ButtonApp from './ButtonApp.vue';        
import CircleButtonApp from './CircleButtonApp.vue';

export default{
    data() {
        return{
            
        }
    },
    components:{
        ButtonApp,
        CircleButtonApp
    }
}
</script>

<template>
    <h1>Futio</h1>
    <ButtonApp :name="'Bottone'" :url="'https://www.google.com'"/>
    <CircleButtonApp/>
    <!-- Quick fats -->
</template>

<style scoped>

</style>
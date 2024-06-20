<script>
import CarouselApp from './CarouselApp.vue';

export default{
    data() {
        return{
            
        }
    },
    components:{
        CarouselApp,
    }
}
</script>

<template>
    <section>
        <div class="small-container">
            <div id="text">
                <p class="green-c">Futio Feedback</p>
                <h1>What Our Gamers Say</h1>
                <p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
            </div>
            <div id="carousel">
                <CarouselApp/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

section {
    background-color: $black;
    color: white;

    #text{
        margin-bottom: 1rem;

        .green-c{
            color: $light-green;
            text-align: center;
        }

        h1{
            font-size: 3rem;
            text-align: center;
            margin: 1rem 0;
        }

        p{
            text-align: center;
            width: 54rem;
            margin: 0 auto;
        }
    }

    #carousel{
        padding-bottom: 2rem;
    }
}

</style>
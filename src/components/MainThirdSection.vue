<script>
import ButtonApp from './ButtonApp.vue';        
import CircleButtonApp from './CircleButtonApp.vue';

export default{
    data() {
        return{
            facts:[
                {
                name: 'Twitch Streams',
                num: 5975,
                },
                {
                name: 'Total Games',
                num: 234,
                },
                {
                name: 'Youtube Streams',
                num: 5169,
                },
                {
                name: 'Pro Team',
                num: 215,
                },
            ]
        }
    },
    components:{
        ButtonApp,
        CircleButtonApp
    }
}
</script>

<template>
    <section>
        <div class="small-container">
            <h1>Futio Quick Facts</h1>
            <div id="card-container">
                <article v-for="fact in facts">
                    <h2>{{fact.num}}</h2>
                    <p>{{ fact.name }}</p>
                </article>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

section{
    background-color: $black;
    padding: 6rem 0;
    color: white;

    h1{
        font-size: 3rem;
        font-weight: 900;
        text-align: center;
    }

    #card-container{
        @include flexRow;
        justify-content: center;

        article{
            margin: 1rem;
            padding: 2rem;
            border: 1px solid $blue;
            border-radius: 2rem;
            width: calc(70rem / 4 - 1rem);

            h2{
                text-align: center;
                font-size: 2.5rem;
                margin-bottom: .5rem;
            }

            p{
                color: $light-green;
                font-size: .7rem;
                text-align: center;
            }
        }
    }
}

</style>
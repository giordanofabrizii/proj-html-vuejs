<script>
import ButtonApp from '../ButtonApp.vue';
import "@fontsource/barlow" 

export default {
    components:{
        ButtonApp,
    },
    data() {
        return {
            titleData:{
                hOne: 'Future of Esports',
                hTwo: 'Game withLive Streaming',
                p: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Explore games icon',
            },
            imgJumboData:{
                url: 'src/assets/img/index-banner-illus.png',
                title: 'Banner Soldier Esports',
            },
            buttonData:{
                name: 'EXPLORE GAME',
                url: "'www.google.it'"
            },
            playerData:{
                url: 'src/assets/img/icon/play-icon.png',
                title: 'Play del player'
            }
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <section>
        <div class="small-container">
        <div class="w-60">
            <h2>
                {{ titleData.hTwo }}
            </h2>
            <h1>
                {{ titleData.hOne }}
            </h1>
            <p>
                {{ titleData.p }}
            </p>
            <div id="bottoni">
                <div>
                    <ButtonApp
                    :name="buttonData.name"
                    :url="buttonData.url"
                    />
                </div>

            <div id="player-border">
                <div id="player">
                    <img :src="playerData.url" :alt="playerData.title">
                </div>
            </div>
            </div>
        </div>
        <div class="w-40">
            <img :src="imgJumboData.url" :alt="imgJumboData.title">
        </div>
    </div>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
    div.small-container{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2{
        color: $light-green;
        font-size: 24px;
        }

        h1{
            color: $white;
            font-size: 57px;
        }

        p{
            color: $gray;
            font-size: 24px;
            font-family: 'Barlow';
        }
    }
    div.w-40{
        width: 40%;

        img{
            width: 100%;
        }
    }
    div.w-60{
        width: 60%;
    }

    div#player{
        width: 50px;
        height: 50px;
        background-color: $white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div#player-border{
        margin: .5rem;
        border: 1px solid $green;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div#bottoni{
        display: flex;
        align-items: center;
    }

    section{
        background-image: url('src/assets/img/index-banner-bg.png');
        background-size: cover;
        padding-top: 5rem;
    }
</style>
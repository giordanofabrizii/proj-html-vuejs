<script>
import ButtonApp from '../Utilities/ButtonApp.vue';
import { store } from '../../store';
import "@fontsource/barlow/600.css";
import HeaderUlDropDown from './HeaderUlDropDown.vue';
import HeaderCartShop from './HeaderCartShop.vue';
export default {
    components:{
        ButtonApp,
        HeaderUlDropDown,
        HeaderCartShop,
    },
    data() {
        return {
            store,
            logoData: {
                url: 'src/assets/img/logo.png',
                title: 'Main Logo Futio',
            },
            buttonData:{
                name: 'Live Streaming',
                url: "'www.google.it'",
            },
            scrollPosition: null,

        }
    },
    methods: {
    updateScroll() {
        this.scrollPosition = window.scrollY
    },
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<template>
        <header class="fixed" :class="{change_color: scrollPosition > 50}">
            <nav class="small-container">
                <div id="logo">
                    <img :src="logoData.url" :alt="logoData.title">
                </div>
                <div id="ul-liveStreaming">
                    <HeaderUlDropDown/>

                    <div id="shop-liveStream">
                        <HeaderCartShop/>
                    </div>
                    <ButtonApp
                    :name="buttonData.name"
                    id="button"
                    />
                </div>
            </nav>
        </header>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss';


.fixed{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
}


.change_color {
    background-color: #1b222e !important;
    width: 100%;
    height: 7rem;
}

div#ul-liveStreaming{
    display: flex;
    align-items: center;
    div#shop-liveStream{
        display: flex;
        align-items: center;
        margin-left: 10%;
    }
}

nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.7rem;

    div#logo{
        margin-right: 6rem;
    }
}
    
        
.no-display-2{
    visibility: hidden;
    opacity: 0;
}
.no-display-3{
    visibility: hidden;
    opacity: 0;
    transform: translateY(150px);
}
.relative{
    position: relative;
}

</style>
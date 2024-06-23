<script>
import ButtonApp from '../Utilities/ButtonApp.vue';
import { store } from '../../store';
import "@fontsource/barlow/600.css";
import HeaderUlDropDown from './HeaderUlDropDown.vue';
export default {
    components:{
        ButtonApp,
        HeaderUlDropDown,
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

            cartIconData:{
                url: 'src/assets/img/icon/cart-icon.png',
                title: 'Shop cart',
                active: false,
            },

            buttonShopData:{
                    name: 'CHECKOUT',
                }
        }
    },
    methods: {
    updateScroll() {
        this.scrollPosition = window.scrollY
    },
    turnCartShop(){
        this.cartIconData.active = !this.cartIconData.active
    },
    deleteItem: function(indice){
        store.shopList.items.splice(indice, 1);
    },
    increaseCountShop: function(index){
        store.shopList.items[index].count += 1
    },
    decreaseCountShop: function(index){
        if(store.shopList.items[index].count > 1){
            store.shopList.items[index].count = store.shopList.items[index].count - 1
        }else{
            store.shopList.items.splice(index, 1);
            store.shopList.name.splice(index, 1);
        }
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
                        <div id="div-cart">
                            <div @click="turnCartShop()">
                                <img :src="cartIconData.url" :alt="cartIconData.title" id="img-cart">
                                <div id="numero-item">
                                    {{ `0${store.shopList.items.length}` }}
                                </div>
                            </div>
                            

                            <div id="dropdown-shop" :class="(cartIconData.active === true) ? 'display' : 'no-display-3'">
                                <div class="flex spacebetween">
                                    <h3>
                                        Cart
                                    </h3>
                                    <h3 id="font">
                                        {{ `0${store.shopList.items.length}` }}
                                    </h3>
                                </div>
                                <ul id="cart" v-if="(store.shopList.items.length > 0)">
                                    <li v-for="(item,index) in store.shopList.items" :key="index">
                                        <i class="fa-solid fa-x no-display-2" @click="deleteItem(index)"></i>
                                        <div class="flex flex-start">
                                            <div id="img-cart">
                                                <img :src="item.url" :alt="item.title">
                                            </div>
                                            <div>
                                                <div>
                                                    <h4>
                                                        {{ item.name }}
                                                    </h4>
                                                </div>
                                                <div class="flex">
                                                    <h5>
                                                        {{ item.price }}
                                                    </h5>
                                                    <h5 class="old-price">
                                                        {{ item.oldPrice }}
                                                    </h5>
                                                </div>
                                                <div>
                                                    <span @click="decreaseCountShop(index)" class="pointer">
                                                        -
                                                    </span>
                                                    <span class="fs-16">
                                                        {{ store.shopList.items[index].count }}
                                                    </span>
                                                    <span @click="increaseCountShop(index)" class="pointer">
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div class="flex-column center" v-else>
                                    <h5 class="m-b-1" >
                                        Carrello vuoto.
                                    </h5>
                                    <h5 class="m-b-1">
                                        Aggiungi articoli!
                                    </h5>
                                </div>

                                <ButtonApp
                                :name="buttonShopData.name"
                                id="button-cartShop"
                                />
                            </div>
                        </div>
                        <ButtonApp
                        :name="buttonData.name"
                        id="button"
                        />
                    </div>
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

.flex{
    display: flex;
}

.spacebetween{
    justify-content: space-between;
}
.flex-start{
    align-items: flex-start;
}

.center{
    align-items: center;
    justify-content: center;
}

/*Da togliere*/
h2{
    color: white;
    margin-right: 1rem;
}

#button{
    margin-right: 1rem;
}

#img-cart{
    margin-right: 2rem;
}

#div-cart{
    position: relative;
}

#numero-item{
    color: $blue;
    background-color: $green;
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 17px;
    transform: translateY(-50%);
    font-family: 'Barlow';
    font-weight: 600;
}
ul#cart{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 30rem;

    li{
        border: 2px solid #435980;
        border-radius: .5rem;
        padding: .5rem;
        margin-bottom: .5rem;
        position: relative;

        &:last-child{
            margin-bottom: 1.5rem;
        }

        i{
            position: absolute;
            right: 0;
            top: 0;
            transform: translateY(-40%);
        }
    }
}

#dropdown-shop{
    position: absolute;
    top: 75px;
    right: 25px;
    background-color: $blue;
    padding: 0 1rem 1.5rem 1.5rem;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;

    h3{
        color: $white;
        font-size: 18px;
    }

    h3#font{
        font-family: 'Barlow';
    }

    h5{
        margin-bottom: .5rem;
        color: $white;
        font-family: 'Barlow';
        font-size: 18px;
        width: 4rem;
        
        &.m-b-1{
            margin-bottom: 1rem;
            text-align: center;
            width: 100%;
            padding: .3rem 0;
        }
    }
    h4{
        color: $white;
        width: 10rem;
    }
    span{
        color: $white;
    }

    h5{
        margin-right: .5rem;
        font-family: 'Barlow';
        font-size: 18px;

        &.old-price{
            text-decoration: line-through;
            color: $light-green;
        }
    }
}

div#img-cart{

    img{
        height: 100px;
        width: 100px;
    }
}

div.flex.spacebetween{
    padding: 1rem 0;
}

.display{
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
    transition: all linear 0.3s;

}

#button-cartShop{
    margin: 0 auto;
}

.fs-16{
    font-size: 16px;
}

span{
    margin-right: .5rem;
    
    &.pointer{
        cursor: pointer;

    }
}

li:hover i{
    visibility: visible;
    opacity: 1;
    cursor: pointer;
}
</style>
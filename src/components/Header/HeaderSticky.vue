<script>
import ButtonApp from '../ButtonApp.vue';
import "@fontsource/barlow/600.css";
import { store } from '../../store';
export default {
    components:{
        ButtonApp,
    },
    data() {
        return {
            store,
            ulData: [
                {
                    name: 'Home',
                    active: true,
                    href: '#',
                },{
                    name: 'Games',
                    active: false,
                    href: '#',
                    other: [
                        {
                        name: 'Games',
                        active: false,
                        href: '#',
                    },{
                        name: 'Games Details',
                        active: false,
                        href: '#',
                    },{
                        name: 'Match Details',
                        active: false,
                        href: '#',
                    }
                ],
                },{
                    name: 'Shop',
                    active: false,
                    href: '#',
                    other: [
                        {
                        name: 'Shop',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single 2',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single 3',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single 4',
                        active: false,
                        href: '#',
                    }
                ],
                },{
                    name: 'Pages',
                    active: false,
                    href: '#',
                    other:  [
                        {
                        name: 'About us',
                        active: false,
                        dropdown: true,
                        href: '#',
                    },{
                        name: 'Team',
                        active: false,
                        dropdown: true,
                        href: '#',
                        other: [
                            {
                                name: 'All Team',
                                active: false,
                                href: '#',
                            },{
                                name: 'Team Details',
                                active: false,
                                href: '#',
                            }
                        ]
                    },{
                        name: 'Player',
                        active: false,
                        dropdown: true,
                        href: '#',
                        other: [
                            {
                                name: 'Players',
                                active: false,
                                href: '#',
                            },{
                                name: 'Players Single',
                                active: false,
                                href: '#',
                            }
                        ]
                    },{
                        name: 'Upcoming Matches',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'FAQs',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Terms',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Terms',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Cooming Soon',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Error',
                        active: false,
                        dropdown: false,
                        href: '#',
                    }
                ],
                },{
                    name: 'Blog',
                    active: false,
                    href: '#',
                    other: [
                        {
                        name: 'Blog',
                        active: false,
                        href: '#',
                    },{
                        name: 'Blog Single',
                        active: false,
                        href: '#',
                    },
                ],
                },{
                    name: 'Contact',
                    active: false,
                    href: '#',
                }
            ],
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
                    url: 'www.google.it',
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
            store.shopList.items.splice(index, 1)
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
                    <ul>
                        <li v-for="(li,index) in ulData" :key="index" class="relative">
                            <a :href="li.href" :class="(li.active) ? 'active' : ''">
                                {{ li.name }}
                            </a>
                            <i class="fa-solid fa-angle-down fa-xl" v-if="li.other"></i>
                            
                            <ul v-if="(li.other)" id="ul-top" class="dropdown dropdown-transi no-display-1 flex-column">
                                <li v-for="(liLi,index) in li.other" :key="index" :class="(liLi.dropdown) ? 'display-2 relative' : ''" >
                                    <a :href="liLi.href" class="a_dropdown">
                                        {{ liLi.name }}
                                        <!--Messo icon dentro a secondo voi ?-->
                                        <i class="fa-solid fa-caret-right fa-xs" v-if="liLi.other"></i>
                                    </a>
                                    <ul v-if="(liLi.other)" id="ul-right" class="dropdown no-display-2 flex-column">
                                        <li v-for="(liLiLi,index) in liLi.other" :key="index">
                                            <a :href="liLiLi.href" class="a_dropdown">
                                                {{ liLiLi.name }}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>                 
                        </li>
                    </ul>
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
                                                    <span @click="this.increaseCountShop(index)">
                                                        +
                                                    </span>
                                                    <span class="fs-16">
                                                        {{ store.shopList.items[index].count }}
                                                    </span>
                                                    <span @click="this.decreaseCountShop(index)">
                                                        -
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
                                :url="buttonShopData.url"
                                id="button-cartShop"
                                />
                            </div>
                        </div>
                        <ButtonApp
                        :name="buttonData.name"
                        :url="buttonData.url"
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

    ul{
        list-style-type: none;
        display: flex;
        width: max-content;

        .dropdown{
            position: absolute;
            min-width: 180px;
            background-color: #1b222e;
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
            padding: 8px 0;
        }
        > li {
            margin-right: .2rem;
        }

        li{
            a{
                color: white;
                margin-right: .1rem;
                font-size: 1.2rem;
            }

            li:hover{
                
                > a,
                i{
                    color: $light_green;
                }
            }
        }
        
        li.relative{
            margin-right: 1.2rem;
            display: flex;
            align-items: center;

            &:hover .no-display-1{
                visibility: visible;
                opacity: 1;
            }

            a.active{
            color: $light_green; /* Da mettere variabile Hover */
            }
        }
        
        li.relative:hover{
            > a,
            > i{
                color: $light_green;
            }
        }
        
        .display-2:hover .no-display-2{
            visibility: visible;
            opacity: 1;
        }
        
        .display-2:hover > a,
        .display-2:hover > i.fa-caret-right{
            color: $light_green; /* Da mettere variabile Hover */
        }
        
        a.a_dropdown{
            padding: 5px 15px;
            display: flex;
            align-items: center;
            i{
                margin-left: .3rem;
            }
        }
    }
}

#ul-top{
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.15);
}

#ul-right{
    top: 35px;
    transform: translateY(-50%);
    left: 97%;
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.15);
}

i{
    color: white;
    font-weight: 600;
}

.dropdown-transi{
    transition: 0.3s;
}

.flex-column{
    display: flex;
    flex-direction: column;
}

.no-display-1{
    visibility: hidden;
    opacity: 0;
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
}

li:hover i{
    visibility: visible;
    opacity: 1;
}





</style>
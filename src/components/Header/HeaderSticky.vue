<script>
import ButtonApp from '../ButtonApp.vue';
import "@fontsource/barlow/600.css";
export default {
    components:{
        ButtonApp,
    },
    data() {
        return {
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
            shopList:{
                items: [
                    {
                        name: 'Havit RGB Headphone',
                        title: 'Cuffie RGB Havit',
                        price: '$380.00',
                        oldPrice: '$410.00',
                        url: 'src/assets/img/shop-image-3.png',
                        active: true,
                    },{
                        name: 'Touch Controller Grip',
                        title: 'Controller grip touch',
                        price: '$380.00',
                        oldPrice: '$410.00',
                        url: 'src/assets/img/shop-image-5.png',
                        active: true,
                    },{
                        name: 'Gaming Microphone',
                        title: 'Microfono da gaming',
                        price: '$380.00',
                        oldPrice: '$410.00',
                        url: 'src/assets/img/shop-image-8.png',
                        active: true,
                    },
                ],
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
        console.log('click')
    },
    deleteItem(indice){
        this.shopList.items[indice].splice(indice, 1);
        console.log('dovrei cancellare')
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
                        <div id="div-cart" @click="turnCartShop()">
                            <img :src="cartIconData.url" :alt="cartIconData.title" id="img-cart">
                            <div id="numero-item">
                                {{ `0${shopList.items.length}` }}
                            </div>

                            <div id="dropdown-shop" :class="(cartIconData.active === true) ? 'display' : 'no-display-1'">
                                <div class="flex spacebetween">
                                    <h3>
                                        Cart
                                    </h3>
                                    <h3 id="font">
                                        {{ `0${shopList.items.length}` }}
                                    </h3>
                                </div>
                                <ul id="cart">
                                    <li v-for="(item,index) in shopList.items" :key="index">
                                        <i class="fa-solid fa-x" @click="deleteItem(index)"></i>
                                        <a href="" class="flex flex-start">
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
                                            </div>
                                        </a>
                                    </li>
                                </ul>

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

    h4{
        margin-bottom: .5rem;
        color: $white;
        font-family: 'Barlow';
        font-size: 18px;
        width: 9rem;

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
}

#button-cartShop{
    margin: 0 auto;
}



</style>
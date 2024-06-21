<script>
import {store} from '../store.js'

export default{
    data() {
        return{
            store,
            item: [
                {
                    name: 'Havit RGB Headphone',
                    title: 'Cuffie RGB Havit',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-3.png',
                    count: 1
                },
                {
                    name: 'Touch Controller Grip',
                    title: 'Controller grip touch',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-5.png',
                    count: 1
                },
                {
                    name: 'Gaming Microphone',
                    title: 'Microfono da gaming',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-8.png',
                    count: 1
                },
                {
                    name: 'Ps5 + controller',
                    title: 'Ps5',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-1.png',
                    count: 0,
                },
                {
                    name: 'Purple Gaming Chair',
                    title: 'Gaming Chair',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-2.png',
                    count: 0,
                },
                {
                    name: 'Oculus Quest 2',
                    title: 'VR',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-4.png',
                    count: 0,
                },
                {
                    name: 'Gaminig Kitty Headset',
                    title: 'Headset',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-7.png',
                    count: 0,
                },
                {
                    name: 'Single Hand Keyboard',
                    title: 'Single Hand Keyboard',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-6.png',
                    count: 0,
                },
                {
                    name: 'Height Adjustable Desk',
                    title: 'Desk',
                    price: '$380.00',
                    oldPrice: '$410.00',
                    url: 'src/assets/img/shop-image-9.png',
                    count: 0,
                },
            ]
        }
    },
    methods: {
        addEl: function(item){
            if (store.shopList.name.includes(item.name)) {
                // se e' gia nel carrello
                let el = this.findEl(item.name);
                el.count ++;
            } else {
                // altrimenti
                item.count = 1;
                store.shopList.items.push(item);
                store.shopList.name.push(item.name)

            }
            // item.count = 1;
            // console.log(item)
            // store.shopList.items.push(item);
        },
        findEl: function(nameEl){
            return store.shopList.items.find(obj => obj['name'] === nameEl)
        }
    }
}
</script>

<template>
    <section>
        <div class="small-container">

            <h3>Shop</h3>
            <h1>Add Our Products To Your Cart</h1>
            <p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>

            <div class="article-container">
                <article v-for="i in item">
                    <img :src="i.url" alt="">
                    <div class="info">
                        <h2>{{i.name}}</h2>
                        <p>{{ i.price }}</p>
                        <p class="old">{{ i.oldPrice }}</p>
                    </div>
                    <div class="cart">
                        <span v-if="findEl(i.name)">
                            {{ findEl(i.name).count}}
                        </span>
                        <button @click="addEl(i)">
                            <img src="../assets/img/icon/cart-icon.png" alt="">
                        </button>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/general.scss';

section{
    background-color: $black;
    padding: 2rem 0;

    >div{

        >h3{
            color: $light-green;
            text-align: center;
        }
    
        >h1{
            font-size: 3rem;
            text-align: center;
            color: $white;
            margin: 1rem;
        }
    
        >p{
            color: $gray;
            width: 55rem;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 2rem
        }
    }


    .article-container{
        @include flexRow;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;

        article{
            background-color: $gray;
            margin: .5rem;
            width: calc(100% / 3 - 1rem);
            height: 10rem;
            @include flexRow;
            border-radius: 1rem;
            position: relative;

            img{
                height: 100%;
            }

            .info{
                margin-left: 1rem;

                h2{
                    color: $green;
                }

                p{
                    margin: .2rem 0;
                    width: min-content;
                }

                .old{
                    text-decoration: line-through;
                    color: gray;
                }

            }

            .cart{
                position: absolute;
                bottom: .5rem;
                right: .5rem;
                @include flexRow;
                justify-content: center;

                span{
                    align-self: end;
                    margin: 0 .5rem .75rem 0;
                }
    
                button{
                    border: none;
                    background-color: $green;
                    padding: .5rem 1rem;
                    border-radius: 1rem;
                }
            }

        }
    }
}

</style>
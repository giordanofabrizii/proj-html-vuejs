import {reactive} from 'vue';

export const store = reactive ({
    shopList:{
        items: [
            {
                name: 'Havit RGB Headphone',
                title: 'Cuffie RGB Havit',
                price: '$380.00',
                oldPrice: '$410.00',
                url: 'src/assets/img/shop-image-3.png',
                count: 1,
            },{
                name: 'Touch Controller Grip',
                title: 'Controller grip touch',
                price: '$380.00',
                oldPrice: '$410.00',
                url: 'src/assets/img/shop-image-5.png',
                count: 1,
            },{
                name: 'Gaming Microphone',
                title: 'Microfono da gaming',
                price: '$380.00',
                oldPrice: '$410.00',
                url: 'src/assets/img/shop-image-8.png',
                count: 1,
            },
        ],

    },
})
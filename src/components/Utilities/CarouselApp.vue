<script>
export default{
    data() {
        return{
            feedbacks:[
                {
                    vote: 5,
                    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
                    name: 'Garry Francis',
                    state: 'Kiribati',
                    url: '/testimonials-image-1.png'
                },
                {
                    vote: 5,
                    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
                    name: 'Kim Ramos',
                    state: 'Serbia',
                    url: '/testimonials-image-2.png'
                },
                {
                    vote: 5,
                    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
                    name: 'Merle Fisher',
                    state: 'United States',
                    url: '/testimonials-image-3.png'
                },
                {
                    vote: 5,
                    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
                    name: 'Garry Francis',
                    state: 'Kiribati',
                    url: '/testimonials-image-1.png'
                },
                {
                    vote: 5,
                    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
                    name: 'Kim Ramos',
                    state: 'Serbia',
                    url: '/testimonials-image-2.png'
                },
                {
                    vote: 5,
                    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
                    name: 'Merle Fisher',
                    state: 'United States',
                    url: '/testimonials-image-3.png'
                },
            ],
            scrollInterval: null,
        }
    },
    methods:{
        /**
         * Move the first element to the last position
         * 
         * @param arr 
         * @param index 
         */
        moveToEnd: function(arr, index) {
            if (index >= 0 && index < arr.length) {
                const [element] = arr.splice(index, 1);
                arr.push(element);
            }
        },
        /**
         * Scroll the container to right
         * 
         */
        scrollRight: function() {
            const container = this.$refs.toScrollEl;
            let scrollWidth = 352;

            container.scrollBy({ left: scrollWidth, behavior: 'smooth' });

            setTimeout(() => {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - scrollWidth) {
                    this.moveToEnd(this.feedbacks, 0);
                    this.$nextTick(() => {
                        container.scrollBy({ left: -scrollWidth, behavior: 'auto' });
                    });
                }
            }, 1000);
        },
        /**
         * Scroll every n ms
         * 
         */
        startScrolling: function(){
            this.scrollInterval = setInterval(() => {
                this.scrollRight();
            }, 1000);
        },
        /**
         * Prevent the scroll on the X axis
         * 
         * @param event 
         */
        handleWheel(event) {
            event.preventDefault();
        }
    },
    mounted() {
        this.startScrolling();
        const container = this.$refs.toScrollEl;
        container.addEventListener('wheel', this.handleWheel);
    },
    beforeDestroy() {
        clearInterval(this.scrollInterval);
        const container = this.$refs.toScrollEl;
        container.removeEventListener('wheel', this.handleWheel);
    }
}
</script>

<template>
    <section class="carousel" ref="toScrollEl" >
        <article v-for="(item, index) in feedbacks" :key="index">
            <i v-for="i in item.vote" class="fa-solid fa-star"></i>
            <p>{{item.text}}</p>
            <div class="person">
                <img :src="'./src/assets/img/' + item.url" alt="">
                <div class="info">
                    <h2>{{ item.name }}</h2>
                    <p class="green-c">{{ item.state }}</p>
                </div>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

.carousel{
    width: 65rem;
    overflow: scroll;
    position: relative;
    @include flexRow;
    margin: 0 auto;

    // ! hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    article{
        background-color: $blue;
        min-width: 20rem;
        margin: 1rem;
        padding: 2rem;
        border-radius: 2rem;

        i{
            font-size: 1rem;
            color: #ffba00;
        }

        >p{
            margin-top: 1rem;
            max-width: 17rem;
            font-family: Barlow, sans-serif;
            font-size: 1.2rem;
            line-height: 1.5rem
        }

        .person{
            @include flexRow;
            margin-top: 1rem;
            
            img{
                width: 2.5rem;
                aspect-ratio: 1 / 1;
                border-radius: 50%;
            }

            .info{
                margin-left: 1rem;
                height: 2.7rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                h2{
                    font-size: 1.2rem;
                }

                .green-c{
                    color: $light-green;
                    font-size: .8rem;
                }
            }
        }
    }
}

</style>
<script>
export default{
    data() {
        return{
            scroll: null,
        }
    },
    methods: {
        updateScroll() {
            this.scroll = window.scrollY
        },
        scrollUp: function(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<template>
    <button :class="(scroll > 100) ? 'visible' : null" @click="scrollUp()">
        <img src="../assets/img/svg/e-double-right-arrow.svg" alt="">
    </button>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    button{
        position: fixed;
        top: 105vh;
        right: 2rem;
        background-color: $light-green;
        z-index: 3;
        border: none;
        padding: 1rem;
        border-radius: 8px;
        transition: top 1s linear;
        opacity: 0;

        img{
            transform: rotate(-90deg);
        }
    
        &.visible{
            top: calc(100vh - 5rem);
            opacity: 1;
        }
    }
</style>
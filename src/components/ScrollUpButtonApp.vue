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
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<template>
    <button :class="(scroll > 100) ? 'visible' : null">
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

        img{
            transform: rotate(-90deg);
        }
    
        &.visible{
            top: calc(100vh - 5rem);
        }
    }
</style>
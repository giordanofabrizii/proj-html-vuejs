<script>
export default{
    data() {
        return{
            
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="ad-banner">
            <img id="item-one" src="../assets/img/banner-item-obj1.png" alt="banner cellphone">

            <div class="info-ad">
                <h4>Make Offer</h4>
                <h1>Get 70% Offer Discount</h1>
                <a href="#">Get Offers</a>
            </div>

            <img id="item-two" src="../assets/img/banner-item-obj2.png" alt="banner headphones">
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

section{
    background-color: $black;
    padding: 3rem;
}

div.ad-banner{
    background-image: url(../assets/img/banner-item-bg.png);
    background-size: cover;
    margin: 0 auto;
    width: 80vw;
    height: 400px;
    color: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-radius: 1rem;
}

h1{
    font-weight: bolder;
    margin-bottom: 3rem;
}

h4{
    margin-bottom: 1rem;
}


img#item-one{
    transform: translate(0, 10rem);
}

img#item-two{
    transform: translate(0, -5rem);
}

div.info-ad{
    text-align: center;
}

a{
    font-family: "Barlow", sans-serif;
    color: $white;
    background-color: rgba(0, 0, 0, 0.261);
    padding: .8rem 4rem;
    border-radius: 2rem;
}

</style>
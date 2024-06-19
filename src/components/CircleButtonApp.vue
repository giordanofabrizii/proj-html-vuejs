<script>
export default{
    data() {
        return{
            
        }
    },
    props:{
        url: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="bttn-container">
        <div class="surround">
            <button>
                <a :href="url">
                    <i class="fa-solid fa-play"></i>
                </a>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .surround{
    display: flex;
    align-items: center;
    border: 2px solid $green;
    transition: all .3s linear;
    margin: .5rem;
    padding: .3rem .5rem;
    border-radius: 5rem;
    width: 4rem;
    aspect-ratio: 1/1;
    animation: border 2s linear infinite;

    button{
        // background-color: red;
        border: none;
        background-color: $white;
        transition: all .3s linear;
        padding: .9rem;
        border-radius: 5rem;
        display: flex;
        align-items: center;
        width: 3rem;
        aspect-ratio: 1/1;

            a{
                text-transform: uppercase;
                font-weight: 500;
                font-size: 1.2rem;
                color: $green;
            }
        }
    }


</style>
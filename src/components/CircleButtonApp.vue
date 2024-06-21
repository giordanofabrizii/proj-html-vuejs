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
        <button>
            <div class="surround">
            </div>
            <a :href="url">
                <i class="fa-solid fa-play"></i>
            </a>
        </button>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

div.bttn-container{
    margin-bottom: 2rem;
}

    .surround{
    border: 1px solid $green;
    margin: .5rem;
    padding: .3rem .5rem;
    border-radius: 5rem;
    width: 5rem;
    aspect-ratio: 1/1;
    animation: my-animation 4s infinite;
    position: absolute;
}

button{
    // background-color: red;
    border: none;
    background-color: $white;
    padding: 2rem;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    aspect-ratio: 1/1;
    position: relative;
    cursor: pointer;

        a{
            text-transform: uppercase;
            font-weight: 500;
            font-size: 1.2rem;
            color: $green;
            
        }
    }
    

    @keyframes my-animation {
        0%{
            transform: scale(1, 1);
        }
        50%{
            transform: scale(1.2, 1.2);
        }
        100%{
            transform: scale(1, 1);
        }
    }

</style>
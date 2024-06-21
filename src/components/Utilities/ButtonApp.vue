<script>
export default{
    data() {
        return{
            
        }
    },
    props:{
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="surround">
        <button>
            <a :href="url">{{ name }}</a>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.surround{
    display: inline-block;
    border: 2px solid $green;
    transition: all .3s linear;
    padding: .3rem .5rem;
    border-radius: 5rem;

    button{
        border: none;
        background-color: $green;
        transition: all .3s linear;
        padding: 1rem;
        border-radius: 5rem;
        width: max-content;

        a{
            color: $black;
            text-transform: uppercase;
            font-weight: 500;
        }
    }

    &:hover{
        border: 2px solid $light-green;

        button{
            background-color: $light-green;
        }
    }
}

</style>
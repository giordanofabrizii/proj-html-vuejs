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
@use '../styles/partials/variables' as *;

.surround{
    border: 2px solid $green;
    padding: .5rem;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    width: auto;

    button{
        border: none;
        background-color: $green;
        padding: .5rem;
        border-radius: 5rem;
    }
}

</style>
<script>
export default{
    data() {
        return{
            
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="bg-black"></div>
        <div class="bg-blue"></div>
        <div class="subscribe-opt">
            <div class="info-text">
                <h2>Subscribe Newsletter</h2>
                <p>Libero malesuada feugiat. Viviamus magna justo, lacinia eget consecutur sed, convallis at tellus.</p>
            </div>
            <div class="input-wrapper">
                <input required="" placeholder="Enter your email" type="text" id="messageInput" />
                <button id="sendButton">
                    <img src="../assets/img/icon/send-icon.png" alt="send">
                </button>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


div{
    color: $white;
}

div.container{
    position: relative;
}

div.bg-black{
    background-color: $black;
    height: 10rem;
}

div.bg-blue{
    background-color: $blue;
    height: 8rem;
}

div.subscribe-opt{
    position: absolute;
    transform: translate(50%, 50%);
    bottom: 50%;
    right: 50%;
    background-color: #30415f; 
    padding: 4rem 3rem;
    width: 40%rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2rem;
}

div.info-text{
    width: 55%;
}

h2{
    margin-bottom: 1rem;
    font-size: 2.7rem;
    font-weight: bolder;
    width: 40rem;
}

p{
    font-family: "Barlow", sans-serif;
    font-size: 1.2rem;
}

div.input-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #425374;
    padding: .7rem 0.3rem .7rem 1rem;
    border-radius: 1rem;
    border: 1px solid #556f9c;
    width: 40%;

    &:focus-within {
        border: 1px solid $light-green;
    }
}

button{
    background-color: #2d2d2d;
    border-color: transparent;
}

#messageInput {
    background-color: transparent;
    outline: none;
    border: none;
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: large;
}

#sendButton {
    width: fit-content;
    height: 100%;
    background-color: $light-green;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
}


</style>
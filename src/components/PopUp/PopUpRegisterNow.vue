<script>
import ButtonApp from '../Utilities/ButtonApp.vue';
export default {
    components:{
        ButtonApp,
    },
    props: {
        isVisible: {
        type: Boolean,
        required: true
        }
    },
    data() {
        return {

        imgData: {
            url: 'src/assets/img/user-image-4.png',
            },
        buttonData:{
            name: 'Understand >>'
        }
        };
    },
    methods: {
        closePopup() {
            this.$emit('close');
        }
    }
};
</script>

<template>
    <div v-if="isVisible" class="popup-absolute">
        <div class="popup">
            <div class="flex-column-center">
                <h2>Thanks for the subscribe.</h2>

                <h3>
                    Now we send you an email, read the content for more info.
                </h3>

                <div class="flex-center">
                    <img :src="imgData.url" alt="">

                    <h5>
                        The team of Futio
                    </h5>
                </div>

                <h4>
                    Thanks for choose the Esports
                </h4>
                <div>
                    <ButtonApp @click="closePopup"
                    :name="buttonData.name"
                    id="button"
                    />
                </div>
                    
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
    
.popup-absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    background: $blue;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

.popup h2 {
    margin-top: 0;
    color: $light-green;
}


.flex-column-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.flex-center{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

h2,h3,h4{
    text-align: center;
    margin-bottom: 1rem;
}

h5{
    color: $green;
}

div{
    margin: 1rem;
}

#button{
    margin: 0 auto;
}

img{
    margin-right: 3rem;
    
}
</style>

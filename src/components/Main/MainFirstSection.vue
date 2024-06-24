<script>
import ButtonApp from '../Utilities/ButtonApp.vue';

export default{
    components:{
        ButtonApp,
    },
    data() {
        return{
            features: [
                {
                id: 1,
                icon: 'src/assets/img/icon/features-icon-1.png',
                title: 'Live Streaming',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.'
                },
                {
                id: 2,
                icon: 'src/assets/img/icon/features-icon-2.png',
                title: 'Great Tournament',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.'
                },
                {
                id: 3,
                icon: 'src/assets/img/icon/features-icon-3.png',
                title: 'Gaming News',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.'
                }
            ],
            buttonData:{
                name: 'PLAN NOW >>',
                url: "'www.google.com'",
            }
        }
    }
}
</script>

<template>
    <section>
        <!-- Make your mark -->
        <div class="small-container">
            <div class="image-container">
                <img src="../../assets/img/features-illus.png" alt="features-illus">
            </div>
            <div class="content-container">
                <h1>
                    The Ultimate Competitive Gaming Platform
                </h1>
                <h2>
                    Make Your Mark On The Battle Field
                </h2>
                <p>
                    libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.
                </p>
                <div class="features">
                    <div class="feature" v-for="feature in features" :key="feature.id">
                        <div class="icon">
                            <img :src="feature.icon" alt="Icona">
                        </div>
                        <div class="title">
                            <h3>{{ feature.title }}</h3>
                            <p>{{ feature.description }}</p>
                        </div>
                    </div>
                    <ButtonApp
                    :name="buttonData.name"
                    :url="buttonData.url"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss' as *;

section{
    background-color: $black;
}
    .small-container{
        display: flex;
        color: white;
        padding: 7rem 5rem;
        
        .image-container{
            width: 50%; 
            position: relative;

            img{
                position: absolute;
                right: 2rem;
                
            }
        }
        
        .content-container{
            margin: 0 auto;
            width: 50%;
            padding: 0 3.5rem 0 1rem;;

            h1{
                color: $light-green;
                font-size: 24px;
            }

            h2{
                font-size: 54px;
                margin: 10px 0;
            }

            >p{
                color: $gray;
            }

            p{
                font-size: 18px;
                margin-bottom: 20px;
                line-height: 25px;
                font-family: 'barlow';
            }
        }

        .features {

            .feature {
                display: flex;
                margin-bottom: 30px;

                .icon{
                    margin-right: 2rem;
                }

                h3 {
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                p{
                    font-size: 18px;
                    line-height: 25px;
                    color: $white;
                }

            }
        }
    }

</style>
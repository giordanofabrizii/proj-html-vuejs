<script>
import CircleButtonApp from '../Utilities/CircleButtonApp.vue';

export default{
    data() {
        return{
            active: false
        }
    },
    components:{
        CircleButtonApp,
    }
}
</script>

<template>
    <section>
        <div class="background">
            <div class="small-container">
                <h3 class="green-c">Live Streaming</h3>
                <h1>Watch The Streams</h1>
                <p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>

                <div class="stream">
                    <div id="status">
                        <img src="../../assets/img/icon/live-icon.png" alt="live">
                        <h5>Live</h5>
                    </div>
                    <div id="center">
                        <CircleButtonApp @click="active=true" />
                        <h2>League Of Legends</h2>
                    </div>
                    <div id="info">
                        <div>
                            <p class="green-c">356,599</p>
                            <p>Viewers</p>
                        </div>
                        <div>
                            <p class="green-c">23,599</p>
                            <p>Likes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video" v-if="active">
            <iframe src="https://www.youtube.com/embed/ZyhrYis509A?si=ckhINZJxd-Vd15BG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="close-video" @click="active=false">
                <i class="fa-solid fa-square-xmark"></i>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/general.scss';

    section{
        background-color: black;
        width: 100%;
        color: white;

        .background{
            background-image: url(../../assets/img/live-streaming-bg.png);
            background-size: contain;
            background-repeat: no-repeat;
            width: 100%;
            max-width: 150rem;
            margin: 0 auto;
            text-align: center;

            .small-container{
                padding: 5rem 0;
            
                .green-c{
                    color: $light-green;
                }

                h1{
                    font-size: 3rem;
                    margin: 1rem 0;
                }

                p{
                    width: 42rem;
                    margin: 0 auto;
                    line-height: 1.5rem;
                    font-size: .8rem;
                }

                .stream{
                    background-image: url(../../assets/img/video-bg.png);
                    background-size: cover;
                    border-radius: 2rem;
                    margin: 3rem auto;
                    height: 40rem;
                    width: 65rem;
                    position: relative;
                    display: flex;
                    justify-content: center;

                    #status{
                        position: absolute;
                        top: 1.5rem;
                        right: 1.5rem;
                        border-radius: 2rem;
                        padding: .5rem .8rem;
                        background-color: $orange;
                        @include flexRow;

                        img{
                            margin-right: .3rem;
                        }

                        h5{
                        color: $black;
                        }
                    }

                    #center{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        i{
                            color: red;
                        }
                    }
                    
                    #info{
                        position: absolute;
                        bottom: 2rem;
                        left: 1.5rem;
                        @include flexRow;
                        justify-content: space-between;
                        width: 17rem;

                        div{
                            @include flexRow;

                            p{
                                width: auto;
                                margin: 0 .2rem;
                            }
                        }
                    }
                }
            }

        }
    }

    div.video{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.6);
        @include flexRow;
        justify-content: center;
        z-index: 4;

        div.close-video{
            
            position: absolute;
            top: 6rem;
            right: 12rem;

            i{
                font-size: 4rem;
                color: $white;
            }
        }

        iframe{
            width: 60%;
            aspect-ratio: 16/9;
        }
    }
</style>
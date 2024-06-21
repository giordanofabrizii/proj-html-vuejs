<script>
import ButtonApp from '../Utilities/ButtonApp.vue';

export default{
    components:{
        ButtonApp,
    },
    data() {
        return{
            matches: [
                {
                id: 1,
                team1Logo: 'src/assets/img/game-img-1.png',
                team2Logo: 'src/assets/img/game-img-2.png',
                title: 'Call Of Deauty',
                date: 'December 25, 2022 4:00 PM'
                },
                {
                id: 2,
                team1Logo: 'src/assets/img/game-img-3.png',
                team2Logo: 'src/assets/img/game-img-4.png',
                title: 'Legendary Battles',
                date: 'December 25, 2022 4:00 PM'
                },
                {
                id: 3,
                team1Logo: 'src/assets/img/game-img-5.png',
                team2Logo:'src/assets/img/game-img-6.png',
                title: 'Nay Corral Gundown',
                date: 'December 25, 2022 4:00 PM'
                },
                {
                id: 4,
                team1Logo: 'src/assets/img/game-img-7.png',
                team2Logo: 'src/assets/img/game-img-8.png',
                title: 'League Of Legends',
                date: 'December 25, 2022 4:00 PM'
                }
            ],
            buttonData:{
                name: 'VIEW ALL MATCH >>',
                url: 'www.google.com'
            }
        }
    }
}
</script>

<template>
    <section>
        <div class="small-container">
            <h1 class="title">
                Trending Battle
            </h1>
            <h2 class="subtitle">
                Keep Eyes & Manage upcoming Battle
            </h2>
            <p class="description">
                libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <div class="battle-grid">
                <div class="battle-card" v-for="match in matches" :key="match.id" :match="match">
                    <div class="team-logos">
                        <img :src="match.team1Logo" alt="Team 1 Logo" />
                        <img src="../../assets/img/verus-icon.png" alt="VS" class="verus-icon" />
                        <img :src="match.team2Logo" alt="Team 2 Logo" />
                    </div>
                    <div class="names">
                        <h3>{{ match.title }}</h3>
                        <p>{{ match.date }}</p>
                    </div>
                    <div class="platform-icons">
                        <div>
                            <img src="../../assets/img/icon/youtube-icon.png" alt="YouTube" />
                            <span>Youtube </span>
                        </div>
                        <div>
                            <img src="../../assets/img/icon/twitch-icon.png" alt="Twitch" />
                            <span>Twitch</span> 
                        </div>
                    </div>
                </div>
            </div> 
            <ButtonApp
                    :name="buttonData.name"
                    :url="buttonData.url"
                    />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss';
section{
    background-color: $blue;

    .small-container{
        text-align: center;
        padding: 6rem 0rem;
    }

    .title{
        color: $light-green;
        font-size: 24px;
        
    }

    .subtitle{
        font-size: 54px;
        margin: 10px 0;
        color: white;
        font-weight: bold;
        padding: 0rem 25rem;
    }

    .description{
        color: $gray;
        font-size: 18px;
        margin-bottom: 20px;
        line-height: 25px;
        font-family: 'barlow';
        padding: 0rem 24rem;
    }

    .battle-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 30px;

        .battle-card{
            background-color: #283449;
            border-radius: 20px;
            padding: 20px 0px;
            margin: 15px;
            text-align: center;
            color: $white;
            border: 1px #465c81 solid;
    
            p{
                    color: $light-green;
                    font-family: 'barlow';
                }
    
            .team-logos{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
                padding: 25px 30px;
    
                img {
                    margin: 0 10px;
                }
    
                .verus-icon{
                    padding: 0px 50px;
                }
            }
    
            .platform-icons {
                display: flex;
                justify-content: center;
                margin-top: 10px;                
                padding: 16px 0px;
    
    
                img {
                    width: 30px;
                    height: 30px;
                    margin: 0 10px;
                    margin-right: 5px
                }

                div{
                    margin-right: 15px;
                    display: flex;
                    align-items: center;

                    span{
                        font-family: 'barlow';
    
                    }
                }
                
            }
            .names{
                background-color: #30405f;
                padding: 20px 0px;
                line-height: 35px;
            }
        }
    }
}


</style>
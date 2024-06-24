<script>
export default{
    data() {
        return{
            articles: [
                {
                    readingTime: '10 min',
                    views: 240,
                    date: 'Apr 11,2022',
                    title: 'Secrets to an Amazing Role Playing Game',
                    url: 'blog-item-1.png'
                },
                {
                    readingTime: '10 min',
                    views: 240,
                    date: 'Apr 11,2022',
                    title: 'Top 5 Most Important Aspects Of Your Game',
                    url: 'blog-item-2.png'
                },
                {
                    readingTime: '10 min',
                    views: 240,
                    date: 'Apr 11,2022',
                    title: 'The Rise Of Fantasy Sports And Online Games',
                    url: 'blog-item-3.png'
                },
                {
                    readingTime: '10 min',
                    views: 240,
                    date: 'Apr 11,2022',
                    title: 'Benefits of Gaming - Pc And Video Games',
                    url: 'blog-item-4.png'
                },
            ],
        }
    }
}
</script>

<template>
    <section>
        <div class="small-container">
            <h3 class="green-c">Latest News</h3>
            <h1>Stay Updated With our Latest News Articles</h1>
            <p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>

            <div class="article-container">
                <article v-for="article in articles">
                    <img :src="'./src/assets/img/' + article.url" alt="">
                    <div>
                        <div class="info">
                            <img class="icon" src="../../assets/img/icon/clock.png" alt="calendar">
                            <p>{{ article.readingTime }}</p>
                            <img class="icon" src="../../assets/img/icon/eye.png" alt="eye">
                            <p>{{ article.views }}</p>
                            <img class="icon" src="../../assets/img/icon/calendar.png" alt="date">
                            <p>{{ article.date }}</p>
                        </div>
                        <h2>{{ article.title }}</h2>
                    </div>
                </article>
                
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/general.scss';
section{
    background-color: $black;
    color: white;
    text-align: center;
    padding: 2rem 0;

    .green-c{
        color: $light-green
    }

    h1{
        font-size: 3rem;
        max-width: 40rem;
        margin: 1rem auto;
    }

    .small-container > p{
        font-family: Barlow;
        color: $gray;
        width: 54rem;
    }

    p{
        margin: 0 auto;
    }

    .article-container{
        margin: 2rem auto;
        width: 90%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 35rem;

        article{
            width: calc(50% - 2rem);
            height: calc(100% / 3 - 2rem);
            margin: 1rem;
            background-color: $blue;
            border-radius: 1rem;
            overflow: hidden;
            text-align: start;

            >div{
                padding: 1rem 0 1rem 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 8rem;

                .info{
                    @include flexRow;
                    color: $light-green;
    
                    p{
                        margin-left: .5rem;
                        margin-right: 1rem;
                        font-family: Barlow;
                    }

                    img.icon{
                        height: 1.1rem;
                        border-radius: 0;
                    }

                    img[alt="eye"]{
                        height: .8rem;
                    }
                }

                h2{
                    font-size: 1.5rem;
                }
            }


            &:first-child{
                height: 100%;
                display: flex;
                flex-direction: column;

                img:not(.icon){
                    width: 100%;
                }

                >div{

                    h2{
                        width: 28rem;
                        font-size: 1.8rem;
                        margin-top: 1rem;
                    }
                }
            }

            &:not(:first-child){
                @include flexRow;

                img{
                    height: 100%;
                    border-radius: 1rem;
                }
            }
        }
    }

}

</style>
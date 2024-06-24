<script>
import axios from 'axios';

export default{
    data() {
        return{
            events:[]
        }
    },
    methods: {
        getUpcomingEvent: function(){
        axios.get('http://152.89.170.170:3000/events/esport')
        .then(response => {
            this.events = response.data;
            this.events.splice(8,2);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        }
    },
    created(){
        this.getUpcomingEvent();
    }
}
</script>

<template>
<section>
    <div class="small-container">
        <h3>Upcoming Events</h3>
        <h1>Keep Track Of All Next Tournaments</h1>
        <p class="centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maiores deserunt accusantium vero eaque harum.</p>

        <div class="card-container">
            <div class="card" v-for="(event, index) in events" :key="index">
                <img :src="event.image" :alt="event.event_name">
                <div class="card-body">
                    <p class="green">
                        <span>
                            <i class="fa-solid fa-map-location-dot"></i>
                        </span>
                        {{ event.location }}
                    </p> 
                    <p class="green">
                        <span>
                            <img src="../../assets/img/icon/calendar.png" alt="calendar png">
                        </span>
                        {{ event.start_date.slice(5) }}__{{ event.end_date.slice(5) }}
                    </p>
                    <h4>{{ event.event_name }}</h4>
                    <p class="barlow">{{ event.type }}</p>
                    <div class="see-more">
                        <p class="more-info">
                            See more
                            <span>
                                <i class="fa-solid fa-angles-right"></i>
                            </span>
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss';
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

section{
    background-color: $black;
    color: $white;
    padding: 3rem 0;
}

h1, h3, p.centered{
    text-align: center;
    
}

p.centered{
    font-family: Barlow;
    color: $gray;
}

h1{
    font-size: 3rem;
    margin: 1rem auto;
}

h3{
    color: $light-green;
}

div.card-container{
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
    margin: 2rem 0;

    div.card{
        width: calc(100%/5);
        height: 32rem;
        overflow: hidden;
        margin: 1rem;
        border: 3px solid $light-green;
        border-radius: 2rem;
        position: relative;
        transition: all .2s linear;

        &:hover{
        transform: scale(1.02, 1.02);
        box-shadow: $white 1px 0 10px;
        }

        &:hover div.see-more{
            transform: scale(1.1, 1.1);
            text-shadow: $white 1px 0 10px;
        }
    }
}

img{
            width: 100%;
            height: 15rem;
            object-fit: cover;
            object-position: center;
        }


div.card-body{
    padding: 1rem;
    

    p.barlow{
        font-family: "Barlow", sans-serif;
        margin: .7rem 0;
    }

    img, i{
        width: 1rem;
        height: 1rem;
        color: $light-green;
        margin-right: .5rem;
    }
}

p.green{
    color: $light-green;
    margin-bottom: .3rem;
    font-family: "Orbitron", sans-serif;
    font-size: small;
}

h4{
    margin-top: 1rem;
    font-size: 1.5rem;
}

div.see-more{
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    transition: all .2s linear;
}

p.more-info{
    color: $light-green;
    margin-bottom: .3rem;
    font-family: "Orbitron", sans-serif;
}

</style>
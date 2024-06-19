<script>
export default {
    data() {
        return {
            ulData: [
                {
                    name: 'Home',
                    active: true,
                    href: '#',
                },{
                    name: 'Games',
                    active: false,
                    href: '#',
                    other: [
                        {
                        name: 'Games',
                        active: false,
                        href: '#',
                    },{
                        name: 'Games Details',
                        active: false,
                        href: '#',
                    },{
                        name: 'Match Details',
                        active: false,
                        href: '#',
                    }
                ],
                },{
                    name: 'Shop',
                    active: false,
                    href: '#',
                    other: [
                        {
                        name: 'Shop',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single 2',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single 3',
                        active: false,
                        href: '#',
                    },{
                        name: 'Shop single 4',
                        active: false,
                        href: '#',
                    }
                ],
                },{
                    name: 'Pages',
                    active: false,
                    href: '#',
                    other:  [
                        {
                        name: 'About us',
                        active: false,
                        href: '#',
                    },{
                        name: 'Team',
                        active: false,
                        href: '#',
                        other: [
                            {
                                name: 'All Team',
                                active: false,
                                href: '#',
                            },{
                                name: 'Team Details',
                                active: false,
                                href: '#',
                            }
                        ]
                    },{
                        name: 'Player',
                        active: false,
                        href: '#',
                        other: [
                            {
                                name: 'Players',
                                active: false,
                                href: '#',
                            },{
                                name: 'Players Single',
                                active: false,
                                href: '#',
                            }
                        ]
                    },{
                        name: 'Upcoming Matches',
                        active: false,
                        href: '#',
                    },{
                        name: 'FAQs',
                        active: false,
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        active: false,
                        href: '#',
                    },{
                        name: 'Terms',
                        active: false,
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        active: false,
                        href: '#',
                    },{
                        name: 'Terms',
                        active: false,
                        href: '#',
                    },{
                        name: 'Cooming Soon',
                        active: false,
                        href: '#',
                    },{
                        name: 'Error',
                        active: false,
                        href: '#',
                    }
                ],
                },{
                    name: 'Blog',
                    active: false,
                    href: '#',
                    other: [
                        {
                        name: 'Blog',
                        active: false,
                        href: '#',
                    },{
                        name: 'Blog Single',
                        active: false,
                        href: '#',
                    },
                ],
                },{
                    name: 'Contact',
                    active: false,
                    href: '#',
                }
            ],
            logoData: {
                url: 'src/assets/img/logo.png',
                title: 'Main Logo Futio',
            }
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <div class="small-container">
        <nav>
            <div id="logo">
                <img :src="logoData.url" :alt="logoData.title">
            </div>
            <div id="ul-liveStreaming">
                <ul>
                    <li v-for="(li,index) in ulData" :key="index" class="relative">
                        <a href="" :class="(li.active) ? 'active' : ''">
                            {{ li.name }}
                        </a>
                        <i class="fa-solid fa-angle-down" v-if="li.other"></i>
                        
                        <ul v-if="(li.other)" id="dropdown" class="no-display flex-column">
                            <li v-for="(li,index) in li.other" :key="index" class="tendina">
                                <a href="" id="a_dropdown">
                                    {{ li.name }}
                                    <!--Messo icon dentro a secondo voi ?-->
                                    <i class="fa-solid fa-caret-right fa-xs" v-if="li.other"></i>
                                </a>
                            </li>
                        </ul>                 
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    ul{
        list-style-type: none;
        display: flex;
        width: max-content;
        #dropdown{
            position: absolute;
            min-width: 180px;
            top: 110%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #1b222e;
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
            transition: 0.3s;
            padding: 8px 0;
        }
        li:hover{
            color: greenyellow;
        }
        li.relative{
            margin-right: .7rem;
            display: flex;
            align-items: self-start;
            &:hover .no-display{
                visibility: visible;
                opacity: 1;
            }
            a{
                margin-right: .1rem;
                font-size: 1.2rem;
                color: white;
            }
            a.active{
            color: greenyellow; /* Da mettere variabile Hover */
            }
        }
            a#a_dropdown{
                padding: 5px 15px;
                display: flex;
                align-items: center;
                i{
                    margin-left: .3rem;
                }
            }
    }
}
i{
    color: white;
    font-weight: 600;
}

.flex-column{
    display: flex;
    flex-direction: column;
}

.no-display{
    visibility: hidden;
    opacity: 0;
}
.relative{
    position: relative;
}
</style>
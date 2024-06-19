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
                        href: '#',
                    },{
                        name: 'Games Details',
                        href: '#',
                    },{
                        name: 'Match Details',
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
                        href: '#',
                    },{
                        name: 'Shop single',
                        href: '#',
                    },{
                        name: 'Shop single 2',
                        href: '#',
                    },{
                        name: 'Shop single 3',
                        href: '#',
                    },{
                        name: 'Shop single 4',
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
                        href: '#',
                    },{
                        name: 'Team',
                        href: '#',
                        other: [
                            {
                                name: 'All Team',
                                href: '#',
                            },{
                                name: 'Team Details',
                                href: '#',
                            }
                        ]
                    },{
                        name: 'Player',
                        href: '#',
                        other: [
                            {
                                name: 'Players',
                                href: '#',
                            },{
                                name: 'Players Single',
                                href: '#',
                            }
                        ]
                    },{
                        name: 'Upcoming Matches',
                        href: '#',
                    },{
                        name: 'FAQs',
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        href: '#',
                    },{
                        name: 'Terms',
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        href: '#',
                    },{
                        name: 'Terms',
                        href: '#',
                    },{
                        name: 'Cooming Soon',
                        href: '#',
                    },{
                        name: 'Error',
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
                        href: '#',
                    },{
                        name: 'Blog Single',
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
            <div id="ul">
                <ul>
                    <li v-for="(li,index) in ulData" :key="index">
                        <a href="" :class="(li.active) ? 'active' : ''">
                            {{ li.name }}
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                            <ul v-if="(li.other)" class="no-display">
                            <li v-for="(li,index) in li.other" :key="index" class="tendina">
                                <a href="">
                                    {{ li.name }}
                                </a>
                            </li>
                        </ul>
                        </a>                  
                    </li>
                </ul>
            </div>
            <div id="shop-button">
                
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
        .no-display{
            display: none;
        }
        li{
            margin-right: .7rem;
            &:hover .no-display{
                display: inline-block;
            }
            a.active{
            color: greenyellow; /* Da mettere variabile Hover */
            }
        }
    }
}
</style>
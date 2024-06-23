<script>
import { store } from '../../store';
export default {
    data() {
        return {
            store,

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
                        dropdown: true,
                        href: '#',
                    },{
                        name: 'Team',
                        active: false,
                        dropdown: true,
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
                        dropdown: true,
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
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'FAQs',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Terms',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Privacy policy',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Terms',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Cooming Soon',
                        active: false,
                        dropdown: false,
                        href: '#',
                    },{
                        name: 'Error',
                        active: false,
                        dropdown: false,
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
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <ul>
        <li v-for="(li,index) in ulData" :key="index" class="relative">
            <a :href="li.href" :class="(li.active) ? 'active' : ''">
                {{ li.name }}
            </a>
            <i class="fa-solid fa-angle-down fa-xl" v-if="li.other"></i>
            
            <ul v-if="(li.other)" id="ul-top" class="dropdown dropdown-transi no-display-1 flex-column">
                <li v-for="(liLi,index) in li.other" :key="index" :class="(liLi.dropdown) ? 'display-2 relative' : ''" >
                    <a :href="liLi.href" class="a_dropdown">
                        {{ liLi.name }}
                        <!--Messo icon dentro a secondo voi ?-->
                        <i class="fa-solid fa-caret-right fa-xs" v-if="liLi.other"></i>
                    </a>
                    <ul v-if="(liLi.other)" id="ul-right" class="dropdown no-display-2 flex-column">
                        <li v-for="(liLiLi,index) in liLi.other" :key="index">
                            <a :href="liLiLi.href" class="a_dropdown">
                                {{ liLiLi.name }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>                 
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
ul{
        list-style-type: none;
        display: flex;
        width: max-content;

        .dropdown{
            position: absolute;
            min-width: 180px;
            background-color: #1b222e;
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
            padding: 8px 0;
        }
        > li {
            margin-right: .2rem;
        }

        li{
            a{
                color: white;
                margin-right: .1rem;
                font-size: 1.2rem;
            }

            li:hover{
                
                > a,
                i{
                    color: $light_green;
                }
            }
        }
        
        li.relative{
            margin-right: 1.2rem;
            display: flex;
            align-items: center;

            &:hover .no-display-1{
                visibility: visible;
                opacity: 1;
            }

            a.active{
            color: $light_green; /* Da mettere variabile Hover */
            }
        }
        
        li.relative:hover{
            > a,
            > i{
                color: $light-green;
            }


        .display-2:hover .no-display-2{
            visibility: visible;
            opacity: 1;
        }
        
        .display-2:hover > a,
        .display-2:hover > i.fa-caret-right{
            color: $light-green; /* Da mettere variabile Hover */
        }
        
        a.a_dropdown{
            padding: 5px 15px;
            display: flex;
            align-items: center;
            i{
                margin-left: .3rem;
            }
        }
    }


#ul-top{
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.15);
}

#ul-right{
    top: 35px;
    transform: translateY(-50%);
    left: 97%;
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.15);
}

i{
    color: white;
    font-weight: 600;
}

.dropdown-transi{
    transition: 0.3s;
}

.flex-column{
    display: flex;
    flex-direction: column;
}

.no-display-1{
    visibility: hidden;
    opacity: 0;
}
.no-display-2{
    visibility: hidden;
    opacity: 0;
}
.relative{
    position: relative;
}

}
</style>
<script>
export default{
    data() {
        return{
            quickLinksNav : [
                {
                    id: 1,
                    title: 'Games'
                },
                {
                    id: 2,
                    title: 'Latest Tournament'
                },
                {
                    id: 3,
                    title: 'Shop'
                },
                {
                    id: 4,
                    title: 'Blog'
                },
                {
                    id: 5,
                    title: 'Contact'
                },
            ],

            helpNav : [
                {
                    id: 1,
                    title: 'Faqs'
                },
                {
                    id: 2,
                    title: 'Terms & Condition'
                },
                {
                    id: 3,
                    title: 'Privacy'
                }
            ],

            socialNav : [
                {
                    id: 1,
                    title: 'Facebook'
                },
                {
                    id: 2,
                    title: 'Twitter'
                },
                {
                    id: 3,
                    title: 'Instagram'
                },
                {
                    id: 4,
                    title: 'Youtube'
                },
                {
                    id: 5,
                    title: 'Github'
                },
            ],

            contactNav : {
                address: '4 Mayfield, Buckden, PE19 5SZ',
                phone: '(302)555-0107'
            }
        }
    },
    methods:{
        reload: function(){
            window.location.reload()
        }
    }
}
</script>

<template>
    <footer >
        <section class="small-container navbar">
            <section class="info">
                <a href="#">
                    <img src="../../assets/img/logo.png" alt="Futio Logo">
                </a>
                
                <p>Lorem ipsum dolor sit amet, elit. Varius enim in eros elementum Duis mi quis viverra ornare.</p>
                <nav class="socials">
                    <ul>
                        <li>
                            <a href="#" class="social-icon">
                                <i class="fa-brands fa-youtube"></i>
                            </a>                            
                        </li>
                        <li>
                            <a href="#" class="social-icon">
                                <i class="fa-brands fa-twitch"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-icon">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-icon">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>

            <nav>
                <h3>Quick Links</h3>
                <ul v-for="(link, i) in quickLinksNav" :key="i">
                    <li>
                        <a href="#"> {{ link.title }}</a>
                    </li>
                </ul>
            </nav>

            <nav>
                <h3>Help</h3>
                <ul v-for="(link, k) in helpNav" :key="k">
                    <li>
                        <a href="#"> {{ link.title }} </a>
                    </li>
                </ul>
            </nav>

            <nav>
                <h3>Follow Us</h3>
                <ul v-for="(link, j) in helpNav" :key="j">
                    <li>
                        <a href="#">{{ link.title }}</a>
                    </li>
                </ul>
            </nav>

            <div class="contacts">
                <h3>Contact</h3>
                <p class="green-font">Location:</p>
                <p> {{ this.contactNav.address }}</p>
                <p class="green-font">Phone:</p>
                <p>{{ this.contactNav.phone }}</p>
            </div>
        </section>
        <section class="copyright">
            <p>
                Copyright &#169; 2022
                <a href="#" @click="reload() ">
                    FUTIO
                </a>
                . All rights reserved.
            </p>
        </section>
    </footer>    
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss';
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

footer{
    background-color: $blue;
    color: $white;
    font-size: 1rem;
}

p{
    font-family: "Barlow";
}

section.navbar{
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
}

nav.socials ul{
    display: flex;
    justify-content: start;
    align-items: center;

    li{
        margin: .5rem;
    }
}

section.info{
    width: 30%;

    img{
        width: 115px;
    }

    p{
        margin: 1.5rem 0;
    }
}

h3{
    margin-bottom: 1rem;
}

a.social-icon{
    width: 40px;
    height: 40px;
    border: 1px solid rgba(127, 108, 152, 0.5);
    border-radius: 50%;
    padding: 5px 7px;
    text-align: center;
    transition: 0.3s all;

    &:hover{
        background-color: $light-green;
        border-color: transparent;
    }

    &:hover i{
        color: $white;
    }
}

i{
    color: #b6b9da;
    width: 20px;
    height: 20px;
}

nav ul li{
    margin: .7rem 0;

    a{
        color: #cccccc;
        transition: 0.3s all;
        font-family: "Barlow";

        &:hover{
            color: $light-green;
        }
    }
}

div.contacts{
    width: 12%;
}

div.contacts p.green-font{
    color: $light-green;
    margin-bottom: .5rem;
}

div.contacts p{
    margin-bottom: .8rem;

}

section.copyright{
    background-color: #1b222e;
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    a{
        color: $light-green;
        font-family: "Barlow", sans-serif;
    }
}

</style>
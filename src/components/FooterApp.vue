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
    }
}
</script>

<template>
    <footer >
        <section class="small-container navbar">
            <section class="info">
                <a href="#">
                    <img src="../assets/img/logo.png" alt="Futio Logo">
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
                <ul></ul>
            </nav>
            <nav></nav>
            <nav></nav>
            <nav></nav>
        </section>
    </footer>    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

footer{
    background-color: $blue;
    color: $white;
    font-size: 1.2rem;
    padding: 4rem 1rem;
}

p{
    font-family: "Barlow";
}

section.navbar{
    display: flex;
    justify-content: space-between;
    align-items: start;
}

nav.socials ul{
    display: flex;
    justify-content: start;
    align-items: center;

    li{
        margin: .5rem
    }
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

</style>
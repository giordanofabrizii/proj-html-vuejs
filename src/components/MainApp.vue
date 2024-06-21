<script>
import MainFirstSection from './MainFirstSection.vue';
import MainSecondSection from './MainSecondSection.vue';
import MainThirdSection from './MainThirdSection.vue';
import MainFourthSection from './MainFourthSection.vue';
import MainFifthSection from './MainFifthSection.vue';
import MainSixthSection from './MainSixthSection.vue';
import MainSeventhSection from './MainSeventhSection.vue';
import MainNewsletter from './MainNewsletter.vue';
import TournamentSection from './TournamentSection.vue';

export default{
    data() {
        return{
            
        }
    },
    components:{
        MainFirstSection,
        MainFirstSection,
        MainSecondSection,
        MainThirdSection,
        MainFourthSection,
        MainFifthSection,
        MainSixthSection,
        MainSeventhSection,
        MainNewsletter,
        TournamentSection
    }
}
</script>

<template>
    <MainFirstSection/>
    <MainSecondSection/>
    <MainThirdSection/>
    <MainFourthSection/>
    <MainFifthSection/>
    <MainSixthSection/>
    <TournamentSection/>
    <MainSeventhSection/>
    <MainNewsletter/>
</template>

<style scoped>

</style>
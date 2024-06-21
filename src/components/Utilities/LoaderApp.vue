<script>
export default{
    data() {
        return{
            // index: 0,
            // direction: 'right',
            // miniVisible: false,
        }
    },
    // mounted(){
    //     setInterval(() => {
    //         if (this.direction == 'right') {
    //             if (this.index < 3) {
    //                 this.index ++;
    //                 this.miniVisible = true;
    //                 setInterval(() => {
    //                     this.miniVisible = false;
    //                 }, 150);
                    
    //             } else {
    //                 this.direction = 'left';
    //             }
    //         } else {
    //             if (this.index > 0) {
    //                 this.index --;
    //                 this.miniVisible = true;
    //                 setInterval(() => {
    //                     this.miniVisible = false;
    //                 }, 150);
    //             } else {
    //                 this.direction = 'right';
    //             }
    //         }
    //     }, 1000);
    // }
}
</script>

<template>

    <main>
        <img src="/src/assets/img/preloader.gif" alt="">
    </main>

    <!-- <main>
        <div v-for="i in 4" class="dot" :class="(i - 1 == this.index) ? direction : ''">
            <div class="minidot" v-show="i == index" :class="this.miniVisible == true ? 'visible ' + this.direction : ''"></div>
        </div>
    </main> -->
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

    main{
        background-color: #1c263c;
        height: 100vh;
        width: 100vw;
        @include flexRow;
        justify-content: center;
    }

    //     .dot{
    //         border-radius: 50%;
    //         height: 3rem;
    //         aspect-ratio: 1 / 1;
    //         background-color: $green;
    //         margin: 1rem;
    //         position: relative;
        
    //         .minidot{
    //             height: 1.5rem;
    //             background-color: red;
    //             aspect-ratio: 2 / 1;
    //             position: absolute;
    //             left: 3.5rem;
    //             top: .75rem;
    //             display: none;

    //             &.right{
    //                 border-radius: 50% 10% 10% 50%;
    //             }

    //             &.left{
    //                 border-radius: 10% 50% 50% 10%
    //             }

    //             &.visible{
    //                 display: block;
    //             }
    //         }
    //     }

    //     .right {
    //         animation: right 1s linear infinite;
    //     }
    //     .left {
    //         animation: left 1s linear infinite;
    //     }
    // }

    // @keyframes right{
    //     0%{
    //         width: 4rem;
    //         margin-left: 0;
    //         margin-right: 1rem;
    //     }
    //     50%{
    //         width: 3rem;
    //         margin-left: 1rem;
    //         margin-right: 1rem;
    //     }
    //     100%{
    //         width: 4rem;
    //         margin-right: 0;
    //         margin-left: 1rem;
    //     }
    // }

    // @keyframes left{
    //     0%{
    //         width: 4rem;
    //         margin-left: 1rem;
    //         margin-right: 0;
    //     }
    //     50%{
    //         width: 3rem;
    //         margin-left: 1rem;
    //         margin-right: 1rem;
    //     }
    //     100%{
    //         width: 4rem;
    //         margin-right: 1rem;
    //         margin-left: 0;
    //     }
    // }
</style>
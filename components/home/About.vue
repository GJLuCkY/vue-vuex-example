<template>
    <div class="about">
        <div class="about__inner">
            <div class="about__left">
                <div class="about__title-wrp">
                    <span>О компании</span>
                </div>
                <div class="about__txt-wrp">
                    <p>
                        Альбион строй 2030 является одной из лидирующих 
                        компаний по обеспечению строительными материалами 
                        областных центров Северного Казахстана, имеющей 
                        репутацию надежного и предсказуемого партнера, 
                        готового внести свой вклад в развитие вашего бизнеса.
                    </p>
                </div>
            </div>
            <div class="about__right">
                <div class="about__right-inner">
                    <div class="about__main-wrp">
                        <img :src="mainImg" alt="about img" class="about__img">
                    </div>
                    <div class="about__small-wrp">
                        <div class="about__small-inner">
                            <img src="/images/about1.jpg" @click="changeImg" alt="about img" class="about__img">
                        </div>
                        <div class="about__small-inner">
                            <img src="/images/about2.jpg" @click="changeImg" alt="about img" class="about__img">
                        </div>
                        <div class="about__small-inner">
                            <img src="/images/about1.jpg" @click="changeImg" alt="about img" class="about__img">
                        </div>
                    </div>
                </div>
                <div class="about__m-txt">
                    <p>
                        Альбион строй 2030 является одной из лидирующих 
                        компаний по обеспечению строительными материалами 
                        областных центров Северного Казахстана, имеющей 
                        репутацию надежного и предсказуемого партнера, 
                        готового внести свой вклад в развитие вашего бизнеса.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mainImg: '/images/about1.jpg'
        }
    },
    methods: {
        changeImg(e) {
            this.mainImg = e.target.src;            
        }
    }
}
</script>
<style lang="scss">
    .about {
        margin-bottom: 100px;
        padding-right: 0;
        &__inner {
            display: flex;
            justify-content: space-between;
        }
        
        &__right-inner {
            display: flex;
        }
        &__main-wrp {
            margin-right: 15px;
        }
        &__main-wrp img {
            width: 387px;
            height: 335px;
            object-fit: cover;
        }
        &__small-inner {
            margin-bottom: 15px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__small-inner img {
            width: 115px;
            height: 99px;
            object-fit: cover;
        }
        &__title-wrp {
            margin-top: 80px;
        }
        &__m-txt {
            display: none;
            p {
                font-family: $font-base;
                font-weight: 400;
                font-size: em(16);
                color: #000;
            }
        }
    }
    @media only screen and (max-width: 1600px) {
        .about {
            padding: 0 60px;
            padding-right: 0;
        }
    }
    @media only screen and (max-width: 1280px) {
        .about {
            &__txt-wrp p {
                max-width: 340px;
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        .about {
            height: 100vh;
            padding: 0;
            &__inner {
                flex-wrap: wrap;
                max-width: 100%;
            }
            &__left, &__right, &__main-wrp {
                width: 100%;
            }
            &__main-wrp img {
                width: initial;
                height: auto;
                object-fit: cover;
            }
            &__main-wrp {
                text-align: center;
                margin-right: 0;
                margin-top: 100px;
            }
            &__left {
                text-align: center;
            }
            &__txt-wrp, &__small-wrp {
                display: none;
            }
            &__m-txt {
                display: block;
                margin-top: 100px;
                padding: 0 30px;
                text-align: center;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .about {
            &__main-wrp img {
                height: 200px;
                width: 100%;
                object-fit: cover;
            }
        }
    }
    @media only screen and (max-width: 375px) {
        .about {
            height: auto;
            margin-bottom: 60px;            
            &__title-wrp, &__main-wrp, &__m-txt {
                margin-top: 60px;
            }
        }
    }
    @media only screen and (max-width: 320px) {
        .about {
            &__title-wrp, &__main-wrp, &__m-txt {
                margin-top: 40px;
            }
        }
    }
</style>



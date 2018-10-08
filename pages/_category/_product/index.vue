<template>
    <div class="content-inner">
        <div class="product">
            <div class="product__inner">
                <div class="product__left">
                    <div class="product__title-wrp">
                        <span>{{product.name}}</span>
                    </div>
                    <div class="product__slider-wrp">
                        <div class="product__slider" v-swiper:mySwiper="swiperOption">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide product__slider-slide" v-for="(img, index) in product.images">
                                    <img :src="img" alt="" class="product__img">
                                </div>
                            </div>
                            <div class="product__prev" slot="button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.687 16.957">
                                    <defs>
                                        <style>
                                        .cls-1 {
                                            fill: none;
                                            stroke: #273751;
                                            stroke-linecap: round;
                                            stroke-linejoin: round;
                                            stroke-miterlimit: 10;
                                            stroke-width: 3px;
                                        }
                                        </style>
                                    </defs>
                                    <path class="cls-1" d="M10.687,0,0,6.939l10.687,7.019" transform="translate(1.5 1.5)"/>
                                </svg>
                            </div>
                            <div class="product__next" slot="button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.687 16.957">
                                    <defs>
                                        <style>
                                        .cls-1 {
                                            fill: none;
                                            stroke: #273751;
                                            stroke-linecap: round;
                                            stroke-linejoin: round;
                                            stroke-miterlimit: 10;
                                            stroke-width: 3px;
                                        }
                                        </style>
                                    </defs>
                                    <path class="cls-1" d="M10.687,0,0,6.939l10.687,7.019" transform="translate(1.5 1.5)"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="product__desc-wrp">
                        <div class="product__desc-title">
                            <span>Описание:</span>
                        </div>
                        <div class="product__desc-txt">
                            <p>
                                {{product.description}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="product__right">
                    <ul class="product__list">
                        <li class="product__item" >
                            <span class="product__list-name">Толщина:</span>
                            <span class="product__list-value">{{product.depth}}</span>
                        </li>
                        <li class="product__item" >
                            <span class="product__list-name">Размер/примечание:</span>
                            <span class="product__list-value">{{product.size}}</span>
                        </li>
                        <li class="product__item" >
                            <span class="product__list-name">Единица измерения:</span>
                            <span class="product__list-value">{{product.unit}}</span>
                        </li>
                    </ul>
                    <div class="product__btn-wrp">
                        <button @click="showCallback">Связаться с нами</button>
                    </div>
                </div>
            </div>
            <div class="product__m-inner">
                <div class="product__tab-wrp">
                    <!--<button class="product__tab" :class="{'product__tab--active':index===activeTab}"  v-for="(tab, index) in tabs" :key="index" @click="tabClick(index)">{{tab.button}}</button>-->
                    <button class="product__tab" 
                            v-for="(tab, index) in tabs" 
                            :key="index" 
                            :class="{'product__tab--active' : currentTab === index}"
                            @click="currentTab = index">{{tab}}</button>
                </div>
                <div class="product__title-wrp">
                    <span>{{product.name}}</span>
                </div>
                <div class="product__content-wrp">
                    <div class="product__content">
                        <div class="product__img-wrp" v-show="currentTab === 0">
                            <div class="product__img-big" v-if="product.images">
                                <img :src="product.images[0]" alt="" ref="img-big">
                            </div>
                            <div class="product__img-small">
                                <div class="product__small-wrp" 
                                    v-for="(image, imgInd) in product.images" 
                                    v-if="imgInd !== 0" 
                                    :key="imgInd">
                                    <img :src="image" 
                                        :ref="'img-'+tabInd+'-'+imgInd" 
                                        @click="changeImg('img-'+tabInd+'-'+imgInd)"  
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="product__char-wrp" v-show="currentTab === 0">
                            <ul class="product__list">
                                <li class="product__item">
                                    <span class="product__c-name">Толщина:</span>
                                    <span class="product__c-value">{{product.depth}}</span>
                                </li>
                                <li class="product__item">
                                    <span class="product__c-name">Размер/примечание:</span>
                                    <span class="product__c-value">{{product.size}}</span>
                                </li>
                                <li class="product__item">
                                    <span class="product__c-name">Ед.измерения:</span>
                                    <span class="product__c-value">{{product.unit}}</span>
                                </li>
                            </ul>
                            <div class="product__btn-wrp">
                                <button class="product__btn" @click="showCallback">Связаться с нами</button>
                            </div>
                        </div>
                        <div class="product__desc-wrp" v-show="currentTab === 1">
                            <p>
                                {{product.description}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            tabs: [
                'Характеристики',
                'Описание'
            ],
            info: {
                title: "Профлист оцинкованный",
                image: "/images/proflist.png",
                text: "В компании «БВБ-Альянс» можно оптом купить горячекатаный круглый пруток. Сделать заявку на приобретение продукции, уточнить актуальную стоимость и условия покупки вы можете по городским телефонам офисов продаж в Вашем городе."
            },
            swiperOption: {
                slidesPerView: 1,
                autoplay: true,
                speed: 1500,
                loop: true,
                navigation: {
                    nextEl: '.product__next',
                    prevEl: '.product__prev'
                }
            },
            currentTab: 0
        }
    },
    mounted() {
        this.bigImg = this.tabs
    },
    fetch({store, route}) {
        let payload = {
            categorySlug: route.params.category,
            productSlug: route.params.product
        }
        store.dispatch('fetchCategoryProduct', payload)
    },
    computed: {
        ...mapGetters({
            category: 'getCategory',
            product: 'getProduct'
        })
    },
    methods: {
        showCallback() {
          this.$store.dispatch("SHOW_CALLBACK_FORM");
        },
        changeImg(ind) {
            let imgBigSrc = this.$refs["img-big"][0].src;
            this.$refs["img-big"][0].src = this.$refs[ind][0].src;
            this.$refs[ind][0].src = imgBigSrc;
        }
    }
}
</script>

<style lang="scss">
    .product {
        padding-bottom: 150px;
        &__img {
            display: block;
            margin: 0 auto;
        }
        &__inner {
            display: flex;
            margin-top: 60px;
            padding-left: 100px;
            justify-content: space-between;
        }
        &__left{
            width: 40%;
        }
        &__right {
            width: 40%;
        }
        &__title-wrp span {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(30);
            color: black;
        }
        &__desc-title span {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(20);
            color: black;
        }
        &__desc-txt p {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(18);
            color: black;
            margin-top: 30px;
        }
        &__list-name {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(18);
            color: black;
            display: inline-block;
            width: 50%;
        }
        &__list-value {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(18);
            color: black;
        }
        &__list {
            margin-top: 100px;
        }
        &__item {
            margin-bottom: 45px;
        }
        &__btn-wrp {
            margin-top: 100px;
        }
        &__btn-wrp button {
            color: #273751;
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            border-radius: 40px;
            padding: 15px;
            box-shadow: 0 3px 6px rgba(#000, 0.16);
            cursor: pointer;
        }
        &__next {
            width: 11px;
            height: 14px;
            display: inline-block;
            transform: translate(0, -50%) rotate(180deg);
            position: absolute;
            top: 50%;
            right: 0;
            z-index: 1;
            cursor: pointer;
        }
        &__m-inner {
            display: none;
        }
        &__next svg {
            width: 100%;
            height: 100%;
        }
        &__prev {
            width: 11px;
            height: 14px;
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 1;
            cursor: pointer;
            transform: translate(0, -50%);
        }
        &__prev svg {
            width: 100%;
            height: 100%;
        }
    }
    @media only screen and (max-width: 1366px) {
        .product {
            &__inner {
                padding-left: 0;
                margin-left: 60px;
            }
            &__item {
                margin-bottom: 30px;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .product {
            padding-bottom: 50px;
            &__inner {
                display: none;
            }
            &__m-inner {
                display: block;
                margin-top: 55px;
            }
            &__list {
                width: 100%;
            }
            &__item {
                display: flex;
                span {
                    width: 55%;
                    &:last-child {
                        width: 45%;
                    }
                }
            }
            &__c-name {
                font-family: $font-base;
                font-weight: 400;
                font-size: em(14);
                color: #B9B9B9;
            }
            &__c-value {
                font-family: $font-base;
                font-weight: 400;
                font-size: em(14);
                color: #000000;
            }
            &__content {
                // display: none;
                &--active {
                    display: block;
                }
            }
            &__content-wrp, &__tab-wrp, &__title-wrp {
                padding: 0 30px;
            }
            &__title-wrp span {
                font-size: em(18);
            }
            &__title-wrp {
                margin: 30px 0;
            }
            &__tab {
                display: inline-block;
                padding: 15px;
                background-color: #F7F7F7;
                font-family: $font-base;
                font-weight: 400;
                font-size: em(14);
                color: #B9B9B9;
                &--active {
                    background-color: #273751;
                    color: white;
                }
            }
            &__content p {
                font-family: $font-base;
                font-weight: 400;
                font-size: em(14);
                color: black;
                margin-top: 15px;
            }
            &__img-wrp {
                display: flex;
            }
            &__img-big, &__img-small {
                width: 50%;
            }
            &__img-big {
                height: 180px;
                background-color: #fff;
                box-shadow: 0 3px 6px rgba(#000, 0.16);
                border-radius: 17px;
                img {
                    width: 180px;
                    height: 180px;
                    object-fit: cover;
                }
            }
            &__img-small {
                display: flex;
                justify-content: space-around;
            }
            &__small-wrp {
                width: 45px;
                height: 45px;
                border-radius: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                box-shadow: 0 3px 6px rgba(#000, 0.16);
                padding: 5px;
            }
        }
    }
    @media only screen and (max-width: 321px) {
        .product {
            &__title-wrp, &__tab-wrp, &__content-wrp {
                padding: 0 20px;
            }
        }
    }
</style>

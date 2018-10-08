<template>
    <div class="header">
        <div class="header__inner">
            <div class="header__logo-wrp">
                <nuxt-link to="/">
                    <img src="/images/logo.png" alt="" class="header__logo">
                </nuxt-link>
            </div>
            <div class="header__right">
                <div class="header__burger-wrp"
                    @click="toggleMenu()"
                    :class="{'header__burger-wrp--active': openMenu}">
                    <div class="header__burger-item"></div>
                    <div class="header__burger-item"></div>
                    <div class="header__burger-item"></div>
                </div>
                <div class="header__address-wrp">
                    <p class="header__address">
                        {{settings.contact_address}}
                    </p>
                </div>
                <div class="header__tel-wrp">
                    <a href="" class="header__tel">{{settings.contact_mobile}}</a>
                    <a href="" class="header__tel">{{settings.contact_phone}}</a>
                </div>
            </div>
        </div>
        <div class="header__bottom" :class="{'header__bottom--open': openMenu}">
            <div class="header__bottom-inner">
                <nuxt-link to="#" class="header__link" @click.native="categoryOpen = !categoryOpen"><span>Каталог</span></nuxt-link>
                <nuxt-link to="/about" class="header__link" @click.native="openMenu = !openMenu"><span>О Компании</span></nuxt-link>
                <nuxt-link to="/price" class="header__link" @click.native="openMenu = !openMenu"><span>Прайс-лист</span></nuxt-link>
                <nuxt-link to="/contacts" class="header__link" @click.native="openMenu = !openMenu"><span>Контакты</span></nuxt-link>
            </div>
            <div class="header__category-wrp" :class="{'header__category-wrp--open': categoryOpen}">
                <span class="header__category-back" @click = "categoryOpen = !categoryOpen">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10.547">
                      <defs>
                        <style>
                          .right-arrow-1 {
                            fill: #fff;
                          }
                        </style>
                      </defs>
                      <path class="right-arrow-1" d="M10.1,4.833a.532.532,0,0,0-.756.748l3.833,3.833H.529A.527.527,0,0,0,0,9.944a.532.532,0,0,0,.529.537H13.178L9.345,14.307a.543.543,0,0,0,0,.756.53.53,0,0,0,.756,0l4.741-4.741a.521.521,0,0,0,0-.748Z" transform="translate(15 15.221) rotate(180)"/>
                    </svg>
                </span>
                <nuxt-link :to="'/' + link.slug" 
                @click.native="openMenu = !openMenu"
                v-for="(link, index) in categories" 
                :key="index" class="header__category-link" 
                v-html="link.name"></nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            settings: 'getSettings',
            categories: 'getCategories'
        })
    },
    created() {
        this.$store.dispatch('fetchCategories')
    },
    data() {
        return {
            openMenu: false,
            categoryOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.openMenu = !this.openMenu
        }
    }
}
</script>

<style lang="scss">
    .header {
        width: 100%;
        &__inner, &__bottom-inner {
            max-width: 1580px;
            width: 100%;
            display: flex;
            margin: 0 auto;
        }
        &__burger-wrp, &__category-wrp {
            display: none;
        }
        &__inner {
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
        }
        &__right {
            display: flex;
        }
        &__bottom {
            background-color: #273751;
        }
        &__search-wrp {
            display: flex;
            align-items: center;
        }
        &__address-wrp {
          margin-right: 100px;
        }
        &__search {
            width: 600px;
            background-color: #F2F2F2;
            padding: 10px;
            border: 1px solid #B4B4B4;
            border-radius: 8px;
        }
        &__search-btn {
            display: block;
            width: 19px;
            height: 19px;
            margin-left: 20px;
            cursor: pointer;
        }
        &__address, &__tel {
            color: #273751;
            font-size: em(16);
            font-weight: 400;
        }
        &__address {
            font-family: $font-base;
        }
        &__tel {
            font-family: $font-cursive;
            display: block;
        }
        &__link {
            padding: 20px 0;
            display: inline-block;
            width: 28%;
            border-right: 1px solid white;
            text-align: center;
            &:first-child {
                text-align: left;
                width: 16.8%;
            }
        }
        &__link span {
            color: white;
            font-family: $font-base;
            font-weight: 700;
            font-size: em(16);
        }
    }
    @media only screen and (max-width: 1600px) {
        .header {
            &__inner, &__bottom-inner {
                max-width: 1375px;
            }
        }
    }
    @media only screen and (max-width: 1366px) {
        .header {
            &__inner, &__bottom-inner {
                max-width: 1280px;
            }
            &__logo {
                max-width: 80%;
            }
        }
    }
    @media only screen and (max-width: 1280px) {
        .header {
            &__inner, &__bottom-inner {
                max-width: 1200px;
            }
            &__search {
                width: 450px;
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        .header {
            &__inner {
                max-width: 90%;
            }
            &__search-wrp, &__address-wrp, &__tel-wrp, &__bottom {
                display: none;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .header {
            width: 100vw;
            position: relative;
            &__inner {
                box-shadow: 0 3px 6px rgba(#000, 0.16);
                position: fixed;
                top: 0;
                left: 0;
                max-width: 100%;
                padding: 10px 20px;
                width: 100%;
                z-index: 10;
                background-color: #fff;
            }
            &__bottom {
                width: 100vw;
                height: calc(100vh - 55px);
                position: fixed;
                bottom: 0;
                left: 0;
                z-index: 10;
                background-color: #273751;
                display: block;
                opacity: 0;
                visibility: hidden;
                transition: all 0.4s ease;
                &--open {
                    opacity: 1;
                    visibility: visible;
                }
            }
            &__bottom-inner {
                height: 100%;
                flex-wrap: wrap;
            }
            &__link {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                &:first-child {
                    width: 100%;
                    text-align: center;
                }
            }
            &__category-wrp {
                width: 100vw;
                height: calc(100vh - 55px);
                position: fixed;
                bottom: 0;
                left: 110%;
                z-index: 11;
                background-color: #273751;
                display: block;
                overflow-y: auto;
                transition: all 0.4s ease;
                &--open {
                    left: 0;
                }
            }
            &__category-back {
                display: block;
                width: 15px;
                position: absolute;
                top: 15px;
                left: 35px;
                z-index: 1;
            }
            &__category-link {
                font-family: $font-base;
                font-weight: 400;
                font-size: em(14);
                color: white;
                display: block;
                padding: 15px 0;
                padding-left: 80px;
                padding-right: 10px;
                border-bottom: 1px solid #395279;
            }
            &__logo {
                max-width: 100px;
            }
            &__burger-item {
                width: 15px;
                height: 3px;
                background-color: #273751;
                margin-bottom: 3px;
                transition: all 0.2s ease;
                &:nth-child(2) {
                    width: 80%;
                    margin: 0 auto;
                    margin-bottom: 3px;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
            &__burger-wrp {
                display: block;
                &--active {
                    .header__burger-item {
                        &:first-child {
                            transform: rotate(50deg);
                            transform-origin: left;
                        }
                        &:nth-child(2) {
                            opacity: 0;
                        }
                        &:last-child {
                            transform: rotate(-54deg);
                            transform-origin: left;
                        }
                    }
                }
            }
        }
    }
</style>


<template>
    <div class="aside">
        <div class="aside__link-wrp" v-for="(link, index) in categories" :key="index" v-if="Object.keys(link.children).length === 0">
            <nuxt-link :to="'/' + link.slug" class="aside__btn" >
                 {{link.name}}
            </nuxt-link>
        </div>
        <div class="aside__nolink-wrp" @click="toggleSubcat(el)" v-else>
            <span class="aside__btn aside__btn--nolink">
                {{link.name}}
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.203 6.203">
                      <path class="tri-1" d="M6.2,6.2H0L3.1,0Z" transform="translate(6.203 6.203) rotate(180)"/>
                    </svg>
                </i>
            </span>
            <div class="aside__subcat-wrp" :class="{'aside__subcat-wrp--open': openSubcat}">
                <nuxt-link v-for="(sublink, i) in link.children" :key="i" :to="'/'+sublink.slug" class="aside__subcat">
                    {{sublink.name}}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            openSubcat: false
        }
    },
    computed: {
        ...mapGetters({
            categories: 'getCategories'
        })
    },
    methods: {
        toggleSubcat(el) {
            this.openSubcat = !this.openSubcat
        }
    },
    created() {
        this.$store.dispatch('fetchCategories')
    }
}
</script>
<style lang="scss">
    .aside {
        &__link-wrp {
            display: flex;
            align-items: center;
            // padding-left: 25px;
            
            width: 100%;
            height: 55px;
        }
        &__btn {
            padding-right: 10px;
            border: 1px solid #E5E5E5;
            width: 100%;
            font-family: $font-base;
            font-weight: 400;
            color: black;
            font-size: em(14);
            height: 55px;
            padding-left: 25px;
            display: flex;
            align-items: center;
            transition: all 0.4s ease;
            cursor: pointer;
            position: relative;
            &:hover {
                color: white;
                background-color: #273751;
            }
            &--nolink {
                // background-color: #273751;
                position: relative;
                i {
                    display: block;
                    width: 6px;
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translate(0,-50%);  
                }
                &:hover {
                    .tri-1 {
                        fill: #fff;
                    }
                }
            }
        }
        &__subcat-wrp {
            height: 0;
            overflow: hidden;
            &--open {
                height: auto;
            }
        }
        &__subcat {
            display: block;
            padding: 10px 0;
            padding-left: 25px;
            font-family: $font-base;
            font-weight: 400;
            color: black;
            font-size: em(14);
            transition: all 0.4s ease;
            &:hover {
                color: white;
                background-color: #273751;
            }
        }
        &__nolink-wrp {
            position: relative;
            height: auto;
        }
    }
</style>


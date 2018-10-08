<template>
    <div class="content-inner">
        <div class="category">
            <div class="category__desc-wrp">
                <div class="category__img-wrp">
                    <img :src="category.image" alt="" class="category__img">
                </div>
                <div class="category__txt-wrp">
                    <div class="category__title-wrp">
                        <span>{{category.name}}</span>
                    </div>
                    <div class="category__txt-inner">
                        <p>
                            {{category.description}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="category__m-title">
                <span>{{category.name}}</span>
            </div>
            <!-- <div class="category__m-select-wrp">
                <select class="category__m-select" v-model="filter.selected" v-for="(filter, index) in filters" :key="index">
                    <option value="" disabled selected>{{filter.name}}</option>
                    <option :value="option"  v-for="(option, index) in filter.options" :key="index">{{option}}</option>
                </select>
            </div> -->
            <!-- <div class="category__select-wrp">
                <div class="category__select-inner" v-for="(filter, index) in filters" :key="index">
                    <div class="category__selected">
                        <div v-if="filter.selected !== 'Не выбрано' && filter.selected" class="category__selected-option">
                            {{filter.selected}}
                        </div>
                    </div>
                    <div class="category__select">
                        <div class="category__select-txt" @click="selectedFilter = index">
                            {{filter.name}}
                            <i>
                                <img src="/images/select-arrow.svg" alt="">
                            </i>
                        </div>
                        <div class="category__option-wrp" :class="{'category__option-wrp--open': selectedFilter === index}">
                            <div 
                                v-for="(value, fi) in filter.options"
                                :key="fi"
                                @click="filter.selected = value; selectedFilter = -1;" 
                                class="category__option">{{value}}</div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="category__list-wrp">
                <div class="category__list-inner">
                    <div class="category__heading-wrp">
                        <div class="category__heading category__heading--name"><span>Название</span></div>
                        <div class="category__heading"><span>Толщина</span></div>
                        <div class="category__heading category__heading--size"><span>Размер/Примечание</span></div>
                        <div class="category__heading"><span>Единица измерения</span></div>
                    </div>
                    <div class="category__item-wrp">
                        <nuxt-link :to="{name: 'category-product', params: {category:  category.slug, product: item.slug} }" class="category__item-row" v-for="(item, index) in products" :key="index">
                            <div class="category__item category__item--name">{{item.name}}</div>
                            <div class="category__item">{{item.depth}}</div>
                            <div class="category__item category__item--size">{{item.size}}</div>
                            <div class="category__item">{{item.unit}}</div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import lodash from 'lodash'

export default {
    async fetch({store, route}) {
        let categorySlug = route.params.category
        await store.dispatch('fetchCategory', categorySlug)
        await store.dispatch('fetchCategoryProducts', categorySlug)
    },
    computed: {
        ...mapGetters({
            category: 'getCategory',
            products: 'getProducts'
        })
    }

}
</script>

<style lang="scss">
    .category {
        &__desc-wrp {
            display: flex;
            padding-top: 20px;
            padding-left: 100px;
        }
        &__m-title, &__m-select-wrp {
            display: none;
        }
        &__img-wrp {
            display: inline-block;
            width: 160px;
            margin-right: 40px;
            box-shadow: 0 3px 6px rgba(#000, 0.16);
        }
        &__img-wrp img {
            height: 160px;
            object-fit: cover;
        }
        &__txt-wrp {
            display: inline-block;
            max-width: 670px;
        }
        &__title-wrp span {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(30);
            color: #273751;
        }
        &__txt-inner p {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: black;
            margin-top: 30px;
        }
        &__select-wrp {
            margin-left: 100px;
            padding-top: 80px;
            padding-bottom: 40px;
            display: flex;
            border-bottom: 1px solid rgba(#000, 0.3);
        }
        &__select-inner {
            display: flex;
            margin-right: 55px;
        }
        &__select {
            position: relative;
            cursor: pointer;
        }
        &__select-txt {
            background-color: #fff;
            padding: 10px 30px;
            border: 1px solid #EFEFEF;
            &:hover {
                background-color: #E6E6E6;
            }            
        }
        &__select i {
            display: inline-block;
            width: 7px;
            height: 7px;
            margin-left: 20px;
        }
        &__select {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(16);
            color: black;
        }
        &__select i img {
            width: 100%;
            height: 100%;
        }
        &__option-wrp {
            display: none;
            position: absolute;
            top: 100%;
            width: 100%;
            &--open {
                display: block;
            }
        }
        &__option {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: black;
            padding: 10px 20px;
            border: 1px solid #EFEFEF;
            background-color: #fff;
            &:hover {
                background-color: #E6E6E6;
            }
        }
        &__selected-option {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: white;
            padding: 10px 20px;
            background: #273751;
        }
        &__list-wrp {
            padding-left: 100px;
            padding-top: 60px;
        }
        &__heading, &__item {
            width: 20%;
            &--name {
                width: 35%;
            }
            &--size {
                width: 30%;
            }
            &:last-child {
                width: 15%;
            }
        }
        &__heading-wrp, &__item-row{
            display: flex;
            justify-content: space-between;
        }
        &__heading-wrp {
            margin-bottom: 60px;
        }
        &__item-row {
            margin-bottom: 30px;
        }
        &__heading span {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(18);
            color: black;
        }
        &__item {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(15);
            color: black;
        }
    }
    @media only screen and (max-width: 1366px) {
        .category {
            &__desc-wrp, &__list-wrp {
                padding-left: 60px;
            }
            &__select-wrp {
                margin-left: 60px;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .category {
            &__desc-wrp {
                display: none;
            }
            &__m-select-wrp {
                display: flex;
                margin-top: 30px;
            }
            &__m-select {
                width: 33.3%;
                border: none;
                padding: 15px 30px;
                appearance: none;
                border-right: 1px solid #dad7d7;
                background-color: #EFEFEF;
                option {
                    border: none;
                    text-align: center;
                    font-family: $font-base;
                    font-weight: 700;
                    color: black;
                    font-size: em(14);
                }
            }
            &__m-title {
                display: block;
                padding: 0 30px;
                padding-top: 100px;
                span {
                    font-family: $font-base;
                    font-weight: 700;
                    font-size: em(18);
                    color: black;
                }
            }
            &__select-wrp {
                margin-left: 0; 
                border-bottom: none;
                padding-bottom: 0;
                padding-top: 25px;
                display: none;
            }
            &__select-txt {
                font-size: em(14);
                padding: 15px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #EFEFEF;
                i {
                    display: none;
                }
            }
            &__select {
                width: 100%;
            }
            &__select-inner {
                width: 33.3%;
                margin: 0;
            }
            &__heading-wrp {
                display: none;
            }
            &__list-wrp {
                padding: 0;
            }
            &__item-row {
                flex-wrap: wrap;
                padding: 30px;
                margin-bottom: 0;
                &:nth-child(even) {
                    background-color: #F7F7F7;
                }
            }
            &__item {
                width: 33.3%;
                &:last-child {
                    width: 33.3%;
                    text-align: right;
                }
                &--size {
                    text-align: center;
                }
                &--name {
                    width: 100%;
                    font-size: em(14);
                    font-weight: 700;
                    margin-bottom: 20px;
                }
            }
        }
    }
    @media only screen and (max-width: 375px) {
        .category {
            &__m-select {
                padding: 15px 20px;
            }
        }
    }
    @media only screen and (max-width: 320px) {
        .category {
            &__m-select {
                padding: 15px;
            }
        }
    }
</style>

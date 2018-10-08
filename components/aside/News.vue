<template>
    <div class="news">
        <div class="news__top">
            <span>Статьи</span>
            <nuxt-link to="">Все статьи</nuxt-link>
        </div>
        <nuxt-link to="" v-for="(item, index) in items" :key="index" class="news__item">
            <div class="news__title">{{ item.title }}</div>
            <div class="news__date">{{ item.date }}</div>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Арматура и все о ней',
                    date: '11.01.1997'
                },
                {
                    title: 'Арматура и все о ней',
                    date: '11.01.1998'
                },
                {
                    title: 'Арматура и все о ней',
                    date: '11.01.1999'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    .news {
        border: 1px solid #E5E5E5;
        margin-bottom: 50px;
        &__top {
            padding: 0 15px;
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
        }
        &__top span {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(16);
            color: #273751;
        }
        &__top a {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(16);
            color: #DDAE2A;
            border-bottom: 1px solid #DDAE2A;
        }
        &__item {
            padding: 0 15px;
            padding-top: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #E5E5E5;
            display: block;
            &:last-child {
                border-bottom: none;
            }
        }
        &__title {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: #000;
        }
        &__date {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(12);
            color: #B9B9B9;
            text-align: right;
        }
    }
</style>

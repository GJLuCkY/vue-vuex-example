<template>
    <div class="content-inner">
        <div class="price">
            <div class="price__inner">
                <div class="price__overlay"></div>
                <div class="price__txt-wrp">
                    <p>Большой ассортимент качественного строительного товара</p>
                    <a :href="settings.price_list" target="_blank" class="price__btn">скачать прайс-лист</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            settings: 'getSettings'
        })
    }
}
</script>

<style lang="scss">
    .price {
        &__inner {
            background-image: url('/images/price-bg.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            height: 545px;
            position: relative;
        }
        &__overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(#000, 0.3);
        }
        &__txt-wrp {
            position: absolute;
            z-index: 1;
            left: 155px;
            bottom: 70px;
            max-width: 540px;
        }
        &__txt-wrp p {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(30);
            color: white;
        }
        &__btn {
            cursor: pointer;
            background-color: #fff;
            color: #273751;
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            margin-top: 60px;
            border-radius: 40px;
            padding: 10px 20px;
            display: inline-block;
        }
    }
    @media only screen and (max-width: 480px) {
        .price {
            &__inner {
                height: 100vh;
            }
            &__txt-wrp {
                max-width: 100%;
                left: 0;
                bottom: initial;
                top: 50%;
                transform: translate(0,-50%);
                text-align: center;
                p {
                    font-size: em(20);
                }
            }
            &__btn {
                color: white;
                background-color: #0061FF;
            }
        }
    }
</style>

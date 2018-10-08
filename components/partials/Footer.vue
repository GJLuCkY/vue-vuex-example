<template>
    <div class="footer">
        <div class="footer__inner">
            <div class="footer__copyr-wrp">
                <p>
                    2018. Интернет-каталог строительных<br> 
                    материалов
                </p>
            </div>
            <div class="footer__tel-wrp">
                <a href="">{{settings.contact_mobile}}</a>
                <a href="">{{settings.contact_phone}}</a>
            </div>
            <div class="footer__mail-wrp">
                <a href="">{{settings.contact_email}}</a>
            </div>
            <div class="footer__address-wrp">
                <p>
                    {{settings.contact_address}}
                </p>
            </div>
            <!-- <div class="footer__payment-wrp">
                <span>Мы принимаем к оплате:</span>
                <div class="footer__icon-wrp">
                    <img src="/images/mastercard.png" alt="master card">
                    <img src="/images/visa.png" alt="visa">
                </div>
            </div> -->
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
    .footer {
        background-color: #273751;
        padding: 50px 0;
        &__inner {
            max-width: 1580px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
        &__copyr-wrp p {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: white;
        }
        &__tel-wrp a {
            font-family: $font-cursive;
            font-weight: 400;
            font-size: em(16);
            color: white;
            display: block;
            margin-bottom: 25px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__mail-wrp a {
            font-family: $font-cursive;
            font-weight: 400;
            font-size: em(16);
            color: white;
        }
        &__address-wrp p {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: white;
        }
        &__payment-wrp span {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: white;
            display: block;
            margin-bottom: 25px;
        }
        &__icon-wrp img {
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    @media only screen and (max-width: 1600px) {
        .footer {
            &__inner {
                max-width: 1375px;
            }
        }
    }
    @media only screen and (max-width: 1366px) {
        .footer {
            &__inner {
                max-width: 1280px;
            }
        }
    }
    @media only screen and (max-width: 1280px) {
        .footer {
            &__inner {
                max-width: 1200px;
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        .footer {display: none;}
    }
</style>

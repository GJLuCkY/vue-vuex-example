<template>
    <div class="contacts">
        <div class="contacts__title-wrp">
            <span>Контакты</span>
        </div>
        <div class="contacts__map-wrp">
            <img src="/images/map.jpg" alt="albion map">
        </div>
        <div class="contacts__row">
            <div class="contacts__col">
                <div class="contacts__col-inner">
                    <div class="contacts__subtitle-wrp">
                        <span>Адрес:</span>
                    </div>
                    <div class="contacts__txt-wrp">
                        <p>{{settings.contact_address}}</p>
                    </div>
                </div>
            </div>
            <div class="contacts__col">
                <div class="contacts__col-inner">
                    <div class="contacts__subtitle-wrp">
                        <span>Телефон:</span>
                    </div>
                    <div class="contacts__txt-wrp">
                        <p>
                            Тел/факс 42-52-32,<br>
                            <a href="">
                                {{settings.contact_phone}}
                            </a><br>
                            <a href="">
                                {{settings.contact_mobile}}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="contacts__col">
                <div class="contacts__col-inner">
                    <div class="contacts__subtitle-wrp">
                        <span>Электронная почта:</span>
                    </div>
                    <div class="contacts__txt-wrp">
                        <p>{{settings.contact_email}}</p>
                    </div>
                </div>
            </div>
            <div class="contacts__col">
                <div class="contacts__col-inner">
                    <div class="contacts__subtitle-wrp">
                        <span>Режим работы:</span>
                    </div>
                    <div class="contacts__txt-wrp">
                        <p>
                            Пн – Пт – 9:00-18:00<br> 
                            Суббота – 9:00-14:00<br> 
                            Воскресенье – выходной. 
                        </p>
                    </div>
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
    .contacts {
        width: 100%;
        padding: 0 100px;
        padding-right: 0;
        margin-bottom: 250px;
        &__title-wrp span {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(45);
            color: #273751;
        }
        &__subtitle-wrp span {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(16);
            color: black;
        }
        &__subtitle-wrp  {
            margin-bottom: 10px;
        }
        &__txt-wrp p {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(16);
            color: black;
        }
        &__row {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        &__map-wrp img {
            width: 100%;
        }
        &__map-wrp {
            margin: 45px 0;
        }
    }
    @media only screen and (max-width: 1600px) {
        .contacts {
            padding: 0 60px;
            padding-right: 0;
            margin-bottom: 170px;
        }
    }
    @media only screen and (max-width: 1024px) {
        .contacts {
            height: 100vh;
            margin-bottom: 0;
            padding: 0;
            padding-top: 65px;
            background-color: #273751;
            &__title-wrp span {
                color: white;
            }
            &__title-wrp {
                text-align: center;
            }
            &__row {
                flex-wrap: wrap;
            }
            &__col {
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 50px;
            }
            &__col-inner {
                width: 150px;
                height: 85px;
            }
            &__subtitle-wrp span, &__txt-wrp p {
                color: white;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .contacts {
            &__map-wrp {
                height: 200px;
                img {
                    height: 100%;
                }
            }
            &__col-inner {
                width: 160px;
            }
            &__txt-wrp p {
                font-size: 0.8em;
            }
            &__subtitle-wrp span {
                font-size: 0.9em;
            }
        }
    }
    @media only screen and (max-width: 320px) {
        .contacts {
            height: auto;
            padding-bottom: 30px;
            &__row {
                padding: 0 20px;
            }
            &__col-inner {
                width: 100%;
                height: auto;
            }
            &__col {
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
</style>
<template>
    <div class="content-inner">
        <div class="about about--p">
            <div :class="['about__row', {'about__row--even' : index%2 != 0 }]" v-for="(block, index) in blocks" :key="index">
                <div class="about__left">
                    <div class="about__left-inner">
                        <div class="about__title-wrp">
                            <span>{{block.title}}</span>
                        </div>
                        <div class="about__txt-wrp">
                            <p>
                                {{block.text}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="about__right">
                    <img :src="block.image" alt="" class="about__img">
                    <div class="about__m-txt">
                        <p>{{block.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            blocks: [
                {
                    title: 'О компании',
                    text: 'Альбион строй 2030 является одной из лидирующих компаний по обеспечению строительными материалами областных центров Северного Казахстана, имеющей репутацию надежного и предсказуемого партнера, готового внести свой вклад в развитие вашего бизнеса.',
                    image: '/images/about1.jpg'
                },
                {
                    title: 'Склад',
                    text: 'Склады товарищества оснащены качественным грузоподъемным оборудованием и представляют собой четкий отлаженный механизм по приему и отгрузке товарной продукции, которая используются в строительстве объектов гражданского и промышленного назначения.',
                    image: '/images/sklad.jpg'
                },
                {
                    title: 'Персонал',
                    text: 'Персонал компании постоянно работает над расширением ассортимента продукции,предлагаемой потребителю и повышением качества обслуживания клиентов.',
                    image: '/images/personal.jpg'
                },
                {
                    title: 'Продукция',
                    text: 'Имея тесные связи с основными производителями металлопродукции и строительных материалов Казахстана и России, компания обеспечивает своевременную и бесперебойную поставку любых строительных материалов по заявкам потребителя.',
                    image: '/images/product.jpg'
                },
            ]
        }
    },
    head: {
        title: 'О нас'
    }
}
</script>
<style lang="scss" scoped>
    .about {
        &--p {
            margin-bottom: 0 !important;
            padding-right: 0;
        }
        &__row {
            display: flex;
            margin-bottom: 150px;
            justify-content: space-between;
            &:first-child {
                margin-top: 100px;
            }
            &--even {
                .about__left {
                    order: 2;
                }
                .about__right {
                    order: 1;
                }
            }
        }
        &__img {
            width: 100%;
            height: 335px;
            object-fit: cover;
        }
        &__left {
            display: flex;
            align-items: center;
            width: 45%;
        }
        &__right {
            width: 45%;
        }
        &__m-txt {
            display: none;
        }
    }
    @media only screen and (max-width: 1366px) {
        .about {
            padding: 0 60px;
            padding-right: 0;
            &__row:first-child {
                margin-top: 60px;
            }
            &__row {
                margin-bottom: 100px;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .about {
            padding: 0;
            &__m-txt {
                display: block;
                p {
                    font-family: $font-base;
                    font-weight: 400;
                    font-size: em(16);
                    color: #000;
                    text-align: center;
                    padding: 0 30px;
                    margin-top: 60px;
                }
            }
            &__left-inner {
                width: 100%;
            }
            &__title-wrp {
                text-align: center;
            }
            &__txt-wrp {
                display: none;
            }
            &__row {
                flex-wrap: wrap;
                padding: 100px 0;
                padding-bottom: 120px;
                margin-bottom: 0;
                &--even {
                    background-color: #273751;
                    .about__title-wrp span {
                        color: white;
                    }
                    .about__m-txt p {
                        color: white;
                    }
                    .about__left {
                        order: 1;
                    }
                    .about__right {
                        order: 2;
                    }
                }
                &:first-child {
                    margin-top: 0;
                }
            }
            &__left, &__right {
                width: 100%;
            }
            &__right {
                img {
                    height: 200px;
                    margin-top: 50px;
                }
            }
        }
    }
    @media only screen and (max-width: 375px) {
        .about {
            &__row {
                padding: 80px 0;
            }
            &__right img {
                margin-top: 40px;
            }
        }
    }
    @media only screen and (max-width: 320px) {
        .about {
            &__row {
                padding: 60px 0;
                &:first-child {
                    padding-top: 80px;
                }
            }
        }
    }
</style>





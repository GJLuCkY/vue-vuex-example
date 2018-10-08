<template>
    <div class="subscribe">
        <div class="subscribe__inner">
            <h4>Будь всегда в курсе!</h4>
            <span>Узнавайте о скидках и акциях первым</span>
            <div class="subscribe__input-wrp">
                <input type="mail" class="subscribe__input" placeholder="Ваш e-mail">
                <button class="subscribe__btn">
                    <img src="/images/subscribe-icon.svg" alt="subscribe icon" class="subscribe__icon">
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .subscribe {
        background-color: #273751;
        margin-top: 60px;
        margin-bottom: 60px;
        padding: 10px 20px;
        padding-bottom: 20px;
        &__inner h4 {
            font-family: $font-base;
            font-weight: 700;
            font-size: em(16);
            color: white;
            margin-bottom: 10px;
        }
        &__inner span {
            font-family: $font-base;
            font-weight: 400;
            font-size: em(14);
            color: white;
            display: block;
            margin-bottom: 15px;
        }
        &__input-wrp {
            position: relative;
        }
        &__input {
            background-color: #fff;
            padding: 5px;
        }
        &__btn {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 1;
            display: inline-flex;
            background-color: #FBCC39;
            width: 35px;
            height: 100%;
            align-items: center;
            justify-content: center;
            padding: 8px;
            cursor: pointer;
        }
    }
    @media only screen and (max-width: 1280px) {
        .subscribe {
            &__input-wrp {
                overflow: hidden;
            }
        }
    }
</style>


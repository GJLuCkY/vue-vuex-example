<template>
  <div class="callback" :class="{'callback--open': getCallbackForm}">
    <div class="callback__inner">
      <i class="callback__close" @click="hideCallback">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.689 24.518">
          <defs>
            <style>
              .cancel-1 {
                fill: #1d1d1b;
              }
            </style>
          </defs>
          <g transform="translate(-0.003 0)">
            <path class="cancel-1" d="M11.167,12.262.238,23.191a.777.777,0,1,0,1.1,1.1L12.348,13.279,23.358,24.29a.777.777,0,0,0,1.1-1.1L13.529,12.262,24.464,1.326a.777.777,0,0,0-1.1-1.1L12.348,11.245,1.329.227a.777.777,0,0,0-1.1,1.1Z" transform="translate(0 0)"/>
          </g>
        </svg>
      </i>
      <div class="callback__title-wrp">
        <span>Обратная связь</span>
      </div>
      <div class="callback__subtitle-wrp">
        <span>Возникли вопросы? Задайте их нам и мы с радостью ответим на них.</span>
      </div>
      <form class="callback__form" @submit.prevent="handleSubmit">
        <input type="text" class="callback__input" v-model="form.client_name" placeholder="Имя" required>
        <input type="tel" class="callback__input" v-model="form.client_phone" placeholder="Телефон" required>
        <input type="mail" class="callback__input" v-model="form.client_email" placeholder="E-mail">
        <input type="text" class="callback__input" v-model="form.message" placeholder="Сообщение">
        <input type="submit" class="callback__submit" value="Отправить">
      </form>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  data () {
    return {
      form: {
        client_name: "",
        client_phone: "",
        client_email: "",
        message: ""
      }
    }
  },
  computed: {
    getCallbackForm() {
      return this.$store.state.callback.show;
    }
  },
  methods: {
    hideCallback() {
      this.$store.dispatch("HIDE_CALLBACK_FORM");
    },
    handleSubmit() {
      axios.post('/order', this.form)
        .then((response) => {
          if (response.status == 201) {
            this.hideCallback();
            // alert('success');
          }
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }
}
</script>

<style lang="scss">
.callback {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  display: none;
  background-color: rgba(#000, 0.4);
  &--open {
    display: block;
  }
  &__close {
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 35px;
    top: 35px;
    cursor: pointer;
  }
  &__inner {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 80px 200px 80px 565px;
  }
  &__title-wrp {
    span {
      font-family: $font-base;
      font-weight: 400;
      font-size: em(30);
      color: #000;
    }
  }
  &__subtitle-wrp {
    margin-top: 25px;
    margin-bottom: 50px;
    span {
      font-family: $font-base;
      font-weight: 400;
      font-size: em(16);
      color: #000;
    }
  }
  &__input {
    font-family: $font-base;
    display: block;
    width: 730px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: em(16);
    color: #000;
    padding-bottom: 13px;
    border-bottom: 1px solid rgba(#707070, 0.5);
  }
  &__submit {
    font-family: $font-base;
    font-weight: 400;
    font-size: em(16);
    color: #000;
    padding-bottom: 10px;
    border-bottom: 1px solid #120D9A;
    background-color: transparent;
    cursor: pointer;
    padding-left: 0;
    padding-right: 0;
  }
}
@media only screen and (max-width: 1440px) {
  .callback {
    &__inner {
      padding: 80px 100px 80px 465px;
    }
  }
}
@media only screen and (max-width: 1366px) {
  .callback {
    &__inner {
      padding: 60px 100px 60px 465px;
    }
    &__input {
      width: 530px;
      margin-bottom: 30px;
    }
  }
}
@media only screen and (max-width: 601px) {
  .callback {
    &__inner {
      padding: 60px 30px;
      width: 100%;
    }
    &__input {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 320px) {
  .callback {
    &__inner {
      padding: 30px 15px;
    }
    &__close {
      right: 20px;
      top: 20px;
    }
  }
}
</style>

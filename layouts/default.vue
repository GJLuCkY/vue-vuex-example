<template>
  <div>
    <Header></Header>
    <div class="content-wrp">
      <Aside></Aside><nuxt/>
    </div>
    <Footer></Footer>
    <Callback></Callback>
  </div>
</template>

<script>
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import Aside from '@/components/partials/Aside';
import Callback from "@/components/partials/Callback";
export default {
  components: {
    Header,
    Footer,
    Aside,
    Callback
  }
}
</script>
<style lang="scss">
  .content-wrp {
    max-width: 1580px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 25px 0;
  }
  .content-inner {
    width: 83%;
    margin-left: 30px;
    overflow: hidden;
  }
  .aside {
    width: 17%;
  }
  .about {
    padding: 0 100px;
    &__title-wrp span {
        font-family: $font-base;
        font-weight: 400;
        font-size: em(45);
        color: #273751;
    }
    &__txt-wrp p {
        font-family: $font-base;
        font-weight: 400;
        font-size: em(16);
        color: black;
        max-width: 435px;
        margin-top: 50px;
    }
  }
  @media only screen and (max-width: 1600px) {
	  .content-wrp {
		  max-width: 1375px;
	  }
  }
  @media only screen and (max-width: 1366px) {
	  .content-wrp {
		  max-width: 1280px;
	  }
  }
  @media only screen and (max-width: 1280px) {
    .content-wrp {
      max-width: 1200px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .aside {
      display: none;
    }
    .content-inner {
      width: 100%;
      margin-left: 0;
    }
    .content-wrp {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>

<template>
  <div class="content-inner">
    <Slider></Slider>
    <About></About>
    <Contacts></Contacts>
  </div>
</template>

<script>
import Contacts from '@/components/partials/Contacts.vue';
import About from '@/components/home/About.vue';
import Slider from '@/components/home/Slider.vue';
export default {
  components: {
    Contacts,
    About,
    Slider
  },
  head: {
    title: 'Главная'
  }
}
</script>
<style lang="scss">
  
</style>


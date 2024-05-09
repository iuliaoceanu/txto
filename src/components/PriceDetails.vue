<template>
  <section id="price-details" class="price-details">

      <h2 v-html="priceDetails.title" />
      <p v-html="priceDetails.description" />
      <BaseButton text="Cumpara TXTO" />

  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const priceDetails = computed(() => state[activeLanguage.value].priceDetailsSection)
</script>

<style lang="scss">
  .price-details {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/bkg-light-mobile.png');
      background-size: cover;
      padding: 50px 20px 210px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (min-width: 768px) {
      background-image: url('../assets/images/bkg-light-tab1.png');
      //background-size: cover;
      padding: 50px 139px;
      z-index: 999;
      height: fit-content;

      h2 {
        padding-bottom: 20px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 70px 214px 85px 214px;
      height: 100%;
      //height: auto;
      //width: 100%;

      h2 {
        padding-bottom: 30px;
      }

      p {
        width: 597px;
        padding-bottom: 20px;
      }
    }

    @media only screen and (min-width: 1512px) {
      background-image: url('../assets/images/bkg-light-desktop.png');
      background-size: cover;
      width: 1450px;
      margin: 0 auto;
    }
  }
</style>
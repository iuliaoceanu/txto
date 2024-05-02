<template>
  <section class="price-details">
    <h2>{{ priceDetails.title }}</h2>
    <p>{{ priceDetails.description }}</p>
    <p>{{ priceDetails.secondDescription }}</p>
    <p>{{ priceDetails.thirdDescription }}</p>
    <BaseButton>Cumpara TXTO</BaseButton>
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
      padding-top: 80px;
      padding-bottom: 162px;
      display: flex;
      flex-direction: column;

      p {
        padding: 5px 0;
      }
    }

    @media only screen and (min-width: 768px) {
      background-image: url('../assets/images/bkg-light-tab1.png');
      padding: 60px 139px;
      display: flex;
      align-items: center;

      h2 {
        padding-bottom: 30px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 100px 215px 115px 215px;

      h2 {
        padding-bottom: 50px;
      }

      p {
        width: 597px;
        padding-bottom: 20px;
      }
    }

    @media only screen and (min-width: 1512px) {}
  }
</style>
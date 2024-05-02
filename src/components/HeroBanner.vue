<template>
  <section class="hero-banner">
    <div class="align-text-and-images">
      <div class="text">
        <h1>{{ title }}</h1>
        <p>{{ heroBanner.description }}</p>
      </div>
      <div class="images">
        <img class="img1" src="../assets/images/Group%2042.png">
        <img class="img2" src="../assets/images/txto-junior-pack%201.png">
      </div>
    </div>
    <BaseButton>Cadou TXTO!</BaseButton>
    <img class="line" src="../assets/images/line-tab2.png">
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const title = computed(() => state[activeLanguage.value].mainTitle)
  const heroBanner = computed(() => state[activeLanguage.value].heroBannerSection)
</script>

<style lang="scss">
  .hero-banner {
    @media only screen and (min-width: 0px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        padding-top: 20px;
        line-height: 31px;
      }

      .images {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .img1 {
        display: none;
      }

      .img2 {
        width: 266px;
        height: 239px;
      }

      .line {
        display: none;
      }
    }

    @media only screen and (min-width: 768px) {
      padding-top: 50px;
      align-items: normal;

      h1 {
        padding-bottom: 20px;
      }

      .align-text-and-images {
        margin: 0 60px;
        display: flex;
        flex-direction: row;
      }

      .img2 {
        width: 293px;
        height: 263px;
        margin-left: 20px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding-top: 50px;

      .align-text-and-images, button {
        margin: 0 180px;
      }

      h1, p {
        width: 377px;
      }

      p {
        font-size: 2.4rem;
      }

      .img2 {
        width: 356.8px;
        height: 321.21px;
        margin-left: 50px;
      }

      .line {
         display: flex;
       }
    }
    @media only screen and (min-width: 1512px) {}
  }
</style>
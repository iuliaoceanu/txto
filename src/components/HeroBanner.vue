<template>
  <section class="hero-banner">
    <div>
      <div class="text">
        <h1 v-html="title" />
        <p v-html="heroBanner.description" />
        <BaseButton text="Cadou TXTO!" />
      </div>
      <div class="images">
        <img class="img1" src="../assets/images/Group%2042.png" />
        <img class="img2" src="../assets/images/txto-junior-pack%201.png" />
      </div>
    </div>
    <BaseButton text="Cadou TXTO!" />
    <img class="line" src="../assets/images/line-tab2.png" />
    <img class="line-desktop" src="../assets/images/line-desktop.png" />
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
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        padding-top: 20px;
        line-height: 31px;
      }

      p + .base-button {
        display: none;
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
      }

      .line, .line-desktop {
        display: none;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 50px 60px 0 60px;

      h1 {
        padding-bottom: 20px;
      }

      > div {
        display: flex;
        flex-direction: row;
      }

      p + .base-button {
        display: block;
      }

      div + .base-button {
        display: none;
      }

      .img2 {
        width: 293px;
        margin-left: 20px;
      }
    }

    @media only screen and (min-width: 1024px) {
      margin-top: 50px;
      padding: 0;

      > div {
        padding: 0 90px 0 180px;
      }

      p {
        font-size: 2.4rem;
      }

      .img2 {
        width: 356.8px;
        transform: rotate(15deg);
        z-index: 1;
      }

      .line {
        display: flex;
        width: 100%;
       }
    }

    @media only screen and (min-width: 1512px) {
      > div {
        padding: 0 247px;
      }

      .images {
        display: flex;
        flex-direction: row;
        margin-left: 50px;
      }

      .img1 {
        width: 358px;
        display: flex;
        z-index: 2;
      }

      .img2 {
        width: 331px;
        transform: rotate(5deg);
        margin-left: -70px;
        z-index: 1;
      }

      .line {
        display: none;
      }

      .line-desktop {
        width: 100%;
        display: block;
        margin-top: 40px;
      }
    }
  }
</style>
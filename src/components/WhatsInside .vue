<template>
  <section id="whats-inside" class="whats-inside">
    <h2 v-html="whatsInside.title" />
    <div>
      <p v-html="whatsInside.description" />
      <img class="img1" src="../assets/images/regulament.png" />
      <img class="img2" src="../assets/images/box%202.png" />
      <img class="img3" src="../assets/images/pen.png" />
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const whatsInside = computed(() => state[activeLanguage.value].whatsInsideSection)
</script>

<style lang="scss">
  .whats-inside {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/bkg-green-mobile.png');
      background-size: cover;
      padding: 40px 20px 59px 20px;

      .img1, .img3 {
        display: none;
      }

      > div {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }

      .img2 {
        width: 182px;
        margin: 20px 0;
      }
    }

    @media only screen and (min-width: 768px) {
      background-image: url('../assets/images/bkg-green-tab1.png');
      padding: 30px 20px 30px 55px;

      h2 {
        text-align: center;
      }

      > div {
        flex-direction: row;
      }

      .img1, .img3 {
        display: block;
      }

      .img1 {
        width: 119.15px;
        margin: 0 20px 0 10px;
      }

      .img3 {
        width: 78.13px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 60px 140px 80px 140px;

      > div {
        padding-top: 30px;
      }

      p {
        padding-right: 30px;
      }
    }

    @media only screen and (min-width: 1512px) {
      background-image: url('../assets/images/bkg-green-desktop.png');
      width: 1400px;
      margin: 0 auto;

      > div {
        padding: 30px 100px 10px 120px;
      }
    }
  }
</style>
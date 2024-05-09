<template>
  <section id="why-to-play" class="why-to-play">
    <h2 v-html="whyToPlay.title" />
    <div>
      <ReasonsItem
          v-for="(reason, index) in whyToPlay.reasons"
          :key="index"
          :iconSrc="reason.iconSrc"
          :reason="reason.title"
          :description="reason.description"
      ></ReasonsItem>
    </div>
  </section>
</template>

<script setup>
  import ReasonsItem from "./ReasonsItem.vue";

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const whyToPlay = computed(() => state[activeLanguage.value].whyToPlaySection)
</script>

<style lang="scss">
  .why-to-play {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/bkg-pink-mobile.png');
      background-size: cover;
      padding: 0 20px 52px 20px;

      h2 {
        padding: 85px 0 20px 0;
      }
    }

    @media only screen and (min-width: 768px) {
      background-image: url('../assets/images/bkg-pink-tab1.png');
      background-size: cover;
      padding: 0 63px 80px 63px;

      > div {
        display: flex;
        flex-direction: row;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 10px 156px 95px 156px;
    }

    @media only screen and (min-width: 1512px) {
      background-image: url('../assets/images/bkg-pink-desktop.png');
      background-size: cover;
      width: 1330px;
      margin: 0 auto;

      > div {
        margin: 0 0 0 50px;
      }
    }
  }
</style>
<template>
  <section class="why-to-play">
    <h2>{{ whyToPlay.title }}</h2>
    <div class="align-reasons-and-text">
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
      padding-bottom: 89px;

      h2 {
        padding: 100px 0 40px 0;
      }
    }

    @media only screen and (min-width: 768px) {
      background-image: url('../assets/images/bkg-pink-tab1.png');
      padding: 0 60px 80px 60px;

      h2 {
        text-align: center;
      }

      .align-reasons-and-text {
        display: flex;
        flex-direction: row;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
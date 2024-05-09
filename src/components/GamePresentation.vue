<template>
  <section id="game-presentation" class="game-presentation">
    <div>
      <p v-html="gamePresentation.description" />
      <Carousel :slides="slides" />
    </div>
    <img src="../assets/images/line2-desktop.png" />
  </section>
</template>

<script setup>
  import Carousel from "./Carousel.vue";

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const gamePresentation = computed(() => state[activeLanguage.value].gamePresentationSection)

  const slides = [
    { id: 1, src: "src/assets/images/cards/1.png" },
    { id: 2, src: "src/assets/images/cards/2.png" },
    { id: 3, src: "src/assets/images/cards/3.png" }
  ];
</script>

<style lang="scss">
  .game-presentation {
    @media only screen and (min-width: 0px) {
      padding: 30px 0;
      overflow: hidden;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      div + img {
        display: none;
      }

      p {
        padding: 0 20px;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 20px 139px;

      p {
        padding: 0;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 30px 267px;

      > div {
        flex-direction: column-reverse;
      }

      p + img {
        margin-bottom: 30px;
      }
    }

    @media only screen and (min-width: 1512px) {
      margin-top: 70px;
      padding: 0;

      > div {
        flex-direction: row;
        padding: 0 247px;
      }

      p + img {
        margin-left: 50px;
      }

      div + img {
        width: 100%;
        display: flex;
        margin-top: 60px;
      }
    }
  }
</style>
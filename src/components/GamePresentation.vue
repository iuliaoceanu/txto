<template>
  <section class="game-presentation">
    <div class="text">
      <p>{{ gamePresentation.description }}</p>
      <p>{{ gamePresentation.secondDescription }}</p>
    </div>
    <img src="../assets/images/Group%2032.png">
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const gamePresentation = computed(() => state[activeLanguage.value].gamePresentationSection)
</script>

<style lang="scss">
  .game-presentation {
    @media only screen and (min-width: 0px) {
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        padding-bottom: 15px;
      }

      img {
        width: 490.72px;
        height: 285.81px;
        margin-top: 20px;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 10px 139px;
    }

    @media only screen and (min-width: 1024px) {
      flex-direction: column-reverse;

      p {
        width: 491px;
      }

      img {
        margin-bottom: 30px;
      }
    }
    @media only screen and (min-width: 1512px) {}
  }
</style>
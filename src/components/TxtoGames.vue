<template>
  <section id="txto-games" class="txto-games">
    <h2 v-html="txtoGames.title" />
    <ul>
      <TxtoGamesItem v-for="game in txtoGames.games" :key="game.id" :id="game.id" :title="game.title"
                         :description="game.description">
      </TxtoGamesItem>
    </ul>
  </section>
</template>

<script setup>
  import TxtoGamesItem from "./TxtoGamesItem.vue";
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const txtoGames = computed(() => state[activeLanguage.value].txtoGamesSection)
</script>

<style lang="scss">
  .txto-games {
    @media only screen and (min-width: 0px) {
        padding: 20px 20px 0 20px;

      ul {
        padding-left: 0;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 30px 63px 0 63px;

      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 150px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 30px 191px;

      h2 {
        //position: absolute;
      }
    }

    @media only screen and (min-width: 1512px) {
      padding: 50px 211px;

      h2 {
        position: relative;
      }

      ul {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
</style>
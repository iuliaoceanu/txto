<template>
  <section class="txto-games">
    <h2>{{ txtoGames.title }}</h2>
    <ul class="games">
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
        padding-top: 20px;

      //h3 {
      //  padding-top: 15px;
      //}
    }

    @media only screen and (min-width: 768px) {
      padding: 30px 60px 0 60px;

      h2 {
        text-align: center;
      }

      .games {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 20px;
      }

      .game2 {
        padding-left: 80px;
      }

      p {
        width: 270px;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
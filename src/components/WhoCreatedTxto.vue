<template>
  <section id="who-created-txto" class="who-created-txto">
    <h2 v-html="whoCreatedTXTO.title" />
    <p v-html="whoCreatedTXTO.description" />
    <img src="../assets/images/Group%2048.png" />
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const whoCreatedTXTO = computed(() => state[activeLanguage.value].whoCreatedTxtoSection)
</script>

<style lang="scss">
  .who-created-txto {
    @media only screen and (min-width: 0px) {
      padding: 0 20px;

      img {
        display: none;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 10px 139px;

      h2 {
        padding-bottom: 20px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 20px 214px;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      img {
        width: 538px;
        display: flex;
        margin-top: 40px;
      }
    }

    @media only screen and (min-width: 1512px) {
      padding: 20px 456px;
    }
  }
</style>
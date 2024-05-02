<template>
  <section class="who-created-txto">
    <h2>{{ whoCreatedTXTO.title }}</h2>
    <p>{{ whoCreatedTXTO.description }}</p>
    <p>{{ whoCreatedTXTO.secondDescription }}</p>
    <p>{{ whoCreatedTXTO.thirdDescription }}</p>
    <p>{{ whoCreatedTXTO.forthDescription }}</p>
    <p>{{ whoCreatedTXTO.fifthDescription }}</p>
    <img src="../assets/images/Group%2048.png">
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
      padding-top: 20px;

      p {
        padding-bottom: 10px;
      }

      img {
        display: none;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 20px 139px;

      h2 {
        padding-bottom: 30px;
      }
    }
    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
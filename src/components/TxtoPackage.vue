<template>
  <section class="txto-package">
    <div>
      <div>
        <p v-html="txtoPackage.description" />
        <BaseButton text="Intra in joc!" />
      </div>
      <img src="../assets/images/Group%2033.png" />
      <BaseButton text="Intra in joc!" />
    </div>
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const  txtoPackage  = computed(() => state[activeLanguage.value].txtoPackageSection)
</script>

<style lang="scss">
  .txto-package {
    @media only screen and (min-width: 0px) {
      padding: 0 20px;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p + .base-button {
        display: none;
      }

      img {
        width: 276px;
        margin-top: 20px;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 0 139px;
    }

    @media only screen and (min-width: 1024px) {
      padding: 0 267px;
    }

    @media only screen and (min-width: 1512px) {
      padding: 0 320px;

      > div {
        flex-direction: row-reverse;
      }

      div > div {
        padding-top: 60px;
        padding-left: 110px;
      }

      p + .base-button {
        display: block;
      }

      img + .base-button {
        display: none;
      }
    }
  }
</style>
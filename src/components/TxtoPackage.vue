<template>
  <section class="txto-package">
    <p class="text1">{{ txtoPackage.description }}</p>
    <p class="text2">{{ txtoPackage.secondDescription }}</p>
    <img src="../assets/images/Group%2033.png">
    <BaseButton>Intra in joc!</BaseButton>
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const txtoPackage = computed(() => state[activeLanguage.value].txtoPackageSection)
</script>

<style lang="scss">
  .txto-package {
    @media only screen and (min-width: 0px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      .text2 {
        display: none;
      }

      img {
        width: 276px;
        height: 418px;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 0 139px;
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
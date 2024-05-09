<template>
  <section class="txto-community">
    <h2 v-html="txtoCommunity.title" />
    <p v-html="txtoCommunity.description" />
    <SocialMediaLinks />
  </section>
</template>

<script setup>
  import SocialMediaLinks from "../components/SocialMediaLinks.vue";

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const txtoCommunity = computed(() => state[activeLanguage.value].txtoCommunitySection)
</script>

<style lang="scss">
  .txto-community {
    @media only screen and (min-width: 0px) {
      padding: 10px 20px 0 20px;
    }

    @media only screen and (min-width: 768px) {
      padding: 10px 139px;

      h2 {
        padding-bottom: 20px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 40px 214px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        padding-bottom: 10px;
      }
    }

    @media only screen and (min-width: 1512px) {
      padding: 40px 456px;
    }
  }
</style>
<template>
  <section class="txto-community">
    <h2>{{ txtoCommunity.title }}</h2>
    <p>{{ txtoCommunity.description }}</p>
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
      padding-top: 10px;
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
<template>
  <section class="txto-games-item">
    <h3>{{ id + '. ' + title }}</h3>
    <p v-html="description" />
  </section>
</template>

<script setup>
  const props = defineProps({
    id: Number,
    title: String,
    description: String
  })
</script>

<style lang="scss">
  .txto-games-item {
    @media only screen and (min-width: 0px) {
      h3 {
        padding-top: 15px;
      }
    }

    @media only screen and (min-width: 768px) {}

    @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1512px) {}
  }
</style>
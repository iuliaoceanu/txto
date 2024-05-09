<template>
  <button class="base-button" v-html="text" @click="emits('click')" />
</template>

<script setup>
  defineProps({
    text: String,
  })
  const emits = defineEmits(['click'])
</script>

<style lang="scss">
  @import '../css/quasar.variables.scss';

  .base-button {
    @media only screen and (min-width: 0px) {
      background-color: $orange;
      color: white;
      font-size: 1.8rem;
      width: 214px;
      height: 40px;
      border: none;
      border-radius: 4px;
      margin-top: 30px;
      //margin: 30px auto 20px auto;
    }

    @media only screen and (min-width: 748px) {
      margin: 30px 0 20px 0;
    }
  }
</style>

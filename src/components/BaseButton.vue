<template>
  <button class="base-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
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
      margin: 30px auto 20px auto;
    }

    @media only screen and (min-width: 748px) {
      margin: 30px 0 20px 0;
    }
  }
</style>

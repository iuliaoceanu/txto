<template>
  <section class="txto-package">
    <p class="text1">TXTO este foarte versatil datorita faptului ca se pot juca mai multe jocuri cu un singur pachet de carti.</p>
    <p class="text2">Numarul de carti din fiecare litera a fost atent calculat, pentru a ...</p>
    <img src="../assets/images/Group%2033.png">
    <BaseButton>Intra in joc!</BaseButton>
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';
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
<template>
  <section class="price-details">
    <h2>Pret si optiuni de cumparare</h2>
    <p>Un joc TXTO Junior costa 60 RON. La acest cost se va mai adauga costul de livrare de aproximativ 25 RON.</p>
    <p>Daca veti cumpara doua jocuri, transportul va fi gratuit.</p>
    <p>Iar la trei sau mai multe jocuri cumparate, aveti transport gratuit si discount de 15%, deci veti plati in total 165 RON.</p>
    <BaseButton>Cumpara TXTO</BaseButton>
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';
</script>

<style lang="scss">
  .price-details {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/bkg-light-mobile.png');
      background-size: cover;
      padding-top: 80px;
      padding-bottom: 162px;
      display: flex;
      flex-direction: column;

      p {
        padding: 5px 0;
      }
    }

    @media only screen and (min-width: 768px) {
      background-image: url('../assets/images/bkg-light-tab1.png');
      padding: 60px 139px;

      h2 {
        padding-bottom: 30px;
      }
    }
    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
<template>
  <section class="hero-banner">
    <div class="align-text-and-images">
      <div class="text">
        <h1>TXTO, jocul cuvintelor, al imaginatiei, si al creativitatii! </h1>
        <p>Creat special pentru dezvoltarea armonioasa a copiilor, si pentru
          a lasa amintiri copilaresti!</p>
      </div>
      <div class="images">
        <img class="img1" src="../assets/images/Group%2042.png">
        <img class="img2" src="../assets/images/txto-junior-pack%201.png">
      </div>
    </div>
    <BaseButton>Cadou TXTO!</BaseButton>
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';
</script>

<style lang="scss">
  .hero-banner {
    @media only screen and (min-width: 0px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        padding-top: 20px;
        line-height: 31px;
      }

      .images {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .img1 {
        display: none;
      }

      .img2 {
        width: 266px;
        height: 239px;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 50px 60px 0 60px;
      align-items: normal;

      h1 {
        padding-bottom: 20px;
      }

      .align-text-and-images {
        display: flex;
        flex-direction: row;
      }

      .img2 {
        width: 293px;
        height: 263px;
        margin-left: 20px;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
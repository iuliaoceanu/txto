<template>
  <section class="testimonials">
    <h2>Iata si cateva pareri</h2>
    <div class="align-comments">
      <div class="comm">
        <figure>
          <img class="icon1" src="../assets/icons/Vector%206.png">
          <p>Am jucat TXTO prima oara si mi-a placut ca am castigat!</p>
        </figure>
        <span>Sorin (17 ani)</span>
      </div>
      <div class="comm">
        <figure>
          <img class="icon2" src="../assets/icons/Vector%205.png">
          <p>E cel mai cool joc de cuvinte ce l-am jucat vreodata!</p>
        </figure>
        <span>Alice (17 ani)</span>
      </div>
    </div>
    <BaseButton>Cumpara TXTO</BaseButton>
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';
</script>

<style lang="scss">
  .testimonials {
    @media only screen and (min-width: 0px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      figure {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        margin-top: 42px;

        .icon1 {
          width: 14.86px;
          height: 11.12px;
        }

        .icon2 {
          width: 14.97px;
          height: 16.14px;
        }
      }

      span {
        font-size: 1.7rem;
        text-align: right;
        float: right;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 0 60px;

      h2 {
        text-align: center;
      }

      .align-comments {
        display: flex;
        flex-direction: row;
      }

      .icon1, .icon2 {
        margin-right: 10px;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
<template>
  <div class="question">
    <figure>
      <img src="../assets/icons/Vector%209.png">
      <span v-html="question" />
    </figure>
    <p v-html="answer" />
  </div>
</template>

<script setup>
  const props = defineProps({
    question: String,
    answer: String
  });
</script>

<style lang="scss">
  .question {
    @media only screen and (min-width: 0px) {
      figure{
        margin-left:0;

        img {
          width: 11.6px;
          margin-right: 5px;
        }
      }

      span {
        font-size: 2rem;
      }

      p {
        padding-bottom: 10px;
      }
    }

    @media only screen and (min-width: 768px) {
        //width: 300px;
        padding-right: 25px;
    }

    @media only screen and (min-width: 1024px) {
      span {
        font-size: 2.2rem;
      }

      p {
        padding-bottom: 40px;
      }
    }

    @media only screen and (min-width: 1512px) {
    }
  }
</style>
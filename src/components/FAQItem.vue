<template>
  <div class="question">
    <figure>
      <img class="icon" src="../assets/icons/Vector%209.png">
      <span>{{ question }}</span>
    </figure>
    <p>{{ answer }}</p>
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
        margin-left: 20px;
      }

      .icon {
        width: 11.6px;
        height: 12.66px;
      }

      span {
        font-size: 2rem;
      }

      p {
        padding-bottom: 10px;
      }
    }

    @media only screen and (min-width: 768px) {
        width: 300px;
        margin-right: 23px;

      figure{
        margin-left: 0;
      }
    }
    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
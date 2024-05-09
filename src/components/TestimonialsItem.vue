<template>
  <div class="comments">
    <figure>
      <img :src="iconSrc" />
      <p v-html="comment" />
    </figure>
    <span v-html="author" />
  </div>
</template>

<script setup>
  const props = defineProps({
    iconSrc: String,
    comment: String,
    author: String
  });
</script>

<style lang="scss">
  .comments {
    @media only screen and (min-width: 0px) {
      figure {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        margin: 0;

        img {
          width: 14.86px;
          margin-right: 5px;
        }

        p {
          margin: 20px 0 0 0;
        }
      }

      span {
        font-size: 1.7rem;
        float: right;
      }
    }

    @media only screen and (min-width: 768px) {
      figure, span {
        margin-right: 40px;
      }
    }

    @media only screen and (min-width: 1024px) {
      figure, span {
        margin: 0;
      }

      figure {
        margin: 30px 30px 0 0;
      }

      span {
        padding: 15px 20px;
        font-size: 2rem;
        float: left;
      }
    }
    @media only screen and (min-width: 1512px) {
      margin-right: 50px;
    }
  }
</style>

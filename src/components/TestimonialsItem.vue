<template>
  <div class="comments">
    <figure>
      <img class="icon" :src="iconSrc">
      <p>{{ comment }}</p>
    </figure>
    <span>{{ author }}</span>
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
        margin-top: 42px;

        .icon {
          width: 14.86px;
          height: 14.12px;
        }
      }

      span {
        font-size: 1.7rem;
        text-align: right;
        float: right;
      }
    }

    @media only screen and (min-width: 768px) {
      .icon {
        margin-right: 10px;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>

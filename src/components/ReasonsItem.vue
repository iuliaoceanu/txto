<template>
  <div class="reasons">
    <div>
      <figure>
        <img :src="iconSrc" />
        <span v-html="reason" />
      </figure>
    </div>
    <p v-html="description" />
  </div>
</template>

<script setup>
  const props = defineProps({
    iconSrc: String,
    reason: String,
    description: String,
  });
</script>

<style lang="scss">
  .reasons {
    @media only screen and (min-width: 0px) {
      > div {
        width: 304px;
        height: 105px;
        display: flex;
        background-image: url('../assets/images/circle.png');
        background-size: cover;

        figure {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 10px;

          img {
            width: 47px;
            height: 40px;
            margin-left: 10px;
          }
        }

        span {
          font-size: 1.9rem;
          margin-left: 5px;
        }
      }

      p {
        padding: 20px 0;
      }
    }

    @media only screen and (min-width: 768px) {
      margin-right: 50px;

      p {
        text-align: justify;
      }
    }

    @media only screen and (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        width: 347px;
        height: 120px;

        figure {
          margin-left: 20px;
        }
      }

      span {
        font-size: 2.2rem;
      }
    }

    @media only screen and (min-width: 1512px) {
      margin-right: 80px;
    }
  }
</style>

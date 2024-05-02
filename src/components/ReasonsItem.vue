<template>
  <div class="reasons-and-text">
    <div class="reasons">
      <figure>
        <img class="icon" :src="iconSrc">
        <span>{{ reason }}</span>
      </figure>
    </div>
    <p>{{ description }}</p>
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
  .reasons-and-text {
    @media only screen and (min-width: 0px) {
      p {
        padding: 20px 0;
      }

      .reasons {
        width: 304px;
        height: 105px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../assets/images/circle.png');
        background-size: cover;
        margin-left: 20px;

        figure {
          display: flex;
          flex-direction: row;
          margin-left: 10px;
        }

        .icon {
          width: 47px;
          height: 40px;
          margin-top: 10px;
          margin-left: 10px;
        }

        span {
          font-size: 1.9rem;
          margin-left: 5px;
        }
      }
    }

    @media only screen and (min-width: 768px) {
      margin-right: 50px;

      .reasons {
        margin-left: 0;
      }

      p {
        text-align: justify;
        width: 290px;
      }
    }
    @media only screen and (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      .reasons {
        width: 347px;
        height: 120px;

        figure {
          margin-left: 20px;
        }
      }

      p {
        width: 320px;
      }

      span {
        font-size: 2.2rem;
      }
    }

    @media only screen and (min-width: 1512px) {}
  }
</style>

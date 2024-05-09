<template>
  <div class="social-media">
    <img class="insta" src="../assets/icons/insta.png">
    <img class="fb" src="../assets/icons/fb.png">
    <img class="yt" src="../assets/icons/youtube.png">
  </div>
</template>

<style lang="scss">
  .social-media {
    @media only screen and (min-width: 0px) {
      display: flex;
      flex-direction: row;

      .insta, .fb {
        width: 36.7px;
        margin-right: 10px;
      }

      .yt {
        width: 54.02px;
        margin-right: 10px;
      }
    }

    @media only screen and (min-width: 768px) {}

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
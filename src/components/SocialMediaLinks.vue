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
      margin: 10px 20px;

      .insta, .fb {
        width: 36.7px;
        height: 36.7px;
        margin: 0 5px;
      }

      .yt {
        width: 54.02px;
        height: 36.7px;
        margin: 0 5px;
      }
    }

    @media only screen and (min-width: 768px) {
      margin: 20px 0;
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
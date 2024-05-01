<template>
  <section class="whats-inside">
    <h2>Ce contine jocul TXTO?</h2>
    <div class="align-content">
      <p>Pachetul contine un set de carti cu toate literele alfabetului, si are un set de reguli pentru 3 jocuri + mini markerul TXTO!</p>
      <img class="img1" src="../assets/images/regulament.png">
      <img class="img2" src="../assets/images/box%202.png">
      <img class="img3" src="../assets/images/pen.png">
    </div>
  </section>
</template>

<style lang="scss">
  .whats-inside {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/bkg-green-mobile.png');
      background-size: cover;
      padding-top: 40px;
      padding-bottom: 89px;

      .img1, .img3 {
        display: none;
      }

      .align-content {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }

      .img2 {
        width: 182px;
        height: 224px;
        margin: 10px 0;
      }
    }

    @media only screen and (min-width: 768px) {
      background-image: url('../assets/images/bkg-green-tab1.png');
      padding: 50px 20px 60px 60px;

      h2 {
        text-align: center;
        padding-bottom: 20px;
      }

      .img1, .img3 {
        display: block;
      }

      .img1 {
        width: 119.15px;
        height: 175.21px;
        margin: 0 20px 0 10px;
      }

      .img3 {
        width: 78.13px;
        height: 152px;
      }

      .align-content {
        flex-direction: row;
      }
    }
    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
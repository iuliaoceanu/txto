<template>
  <section class="why-to-play">
    <h2>De ce joaca copiii TXTO?</h2>
    <div class="align-reasons-and-text">
      <div class="reasons-and-text">
        <div class="reasons">
          <figure>
            <img class="icon" src="../assets/icons/image%202.png">
            <span>pentru dezvoltarea inteligentei emotionale</span>
          </figure>
        </div>
        <p>TXTO este creat special sa dezvolte inteligenta emotionala si creativitatea. Copiii sunt stimulati sa creeze noi cuvinte si implicit se creeaza noi conexiuni mentale.</p>
      </div>
      <div class="reasons-and-text">
        <div class="reasons">
          <figure>
            <img class="icon" src="../assets/icons/image%202.png">
            <span>pentru socializare si prieteni noi</span>
          </figure>
        </div>
        <p>Cu siguranta va veti face prieteni noi si veti fi mai aproape jucand TXTO.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .why-to-play {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/bkg-pink-mobile.png');
      background-size: cover;
      padding-bottom: 89px;

      h2 {
        padding: 100px 0 40px 0;
      }

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
      background-image: url('../assets/images/bkg-pink-tab1.png');
      padding: 0 60px 80px 60px;

      h2 {
        text-align: center;
      }

      .align-reasons-and-text {
        display: flex;
        flex-direction: row;

        .reasons-and-text {
          margin-right: 50px;
        }

        .reasons {
          margin-left: 0;
        }

        p {
          text-align: justify;
          width: 290px;
        }
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
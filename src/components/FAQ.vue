<template>
  <section class="faq">
    <h2>Intrebari frecvente</h2>
    <div class="questions">
      <div class="question">
        <figure>
          <img class="icon" src="../assets/icons/Vector%209.png">
          <span>Cate carti are TXTO?</span>
        </figure>
        <p>Pachetul contine 72 de carti ce au desenate toate literele alfabetului.</p>
      </div>
      <div class="question">
        <figure>
          <img class="icon" src="../assets/icons/Vector%209.png">
          <span>Se poate returna?</span>
        </figure>
        <p>Da, desigur. Trebuie doar sa ne trimiteti inapoi pachetul de carti la adresa specificata in sectiunea contact.</p>
      </div>
      <div class="question">
        <figure>
          <img class="icon" src="../assets/icons/Vector%209.png">
          <span>Cate jocuri are TXTO?</span>
        </figure>
      <p>Pachetul contine carti cu toate literele alfabetului, si are un set de reguli pentru 3 jocuri.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .faq {
    @media only screen and (min-width: 0px) {
      padding: 20px 0;

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
      padding: 0 60px 30px 60px;

      h2 {
        padding: 20px 0;
      }

      figure{
        margin-left: 0;
      }

      .questions {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .question {
          width: 300px;
          margin-right: 23px;
        }
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
<template>
  <section class="txto-games">
    <h2>Jocurile TXTO</h2>
    <div class="games">
      <div class="game1">
        <h3>1. NAMES</h3>
        <p>Scopul jocului este sa formezi numele folosind oricarui jucator folosind 4 litere consecutive!
        • Fiecare jucätor isi scrie numele cu markerul special, pe eticheta reutilizabila si o pozitioneaza cât mai vizibil pe bluza sa.
        Se distribuie 4 carti fiecarui jucator; restul cartilor sunt asezate in pachet pe, masa, literele find in jos.
        • Fiecare jucator va incerca sã indeparteze adversarii din joc formând oricare ansamblu de 4 litere consecutive din numele acestora: de exemplu, pentru a o elimina pe Andreea vei avea nevoie de oricare din combinatiile ANDR, NDRE, DREE sau REEA.</p>
      </div>
      <div class="game2">
        <h3>2. FAZAN</h3>
        <p>Scopul jocului este sa formezi numele folosind oricarui jucator folosind 4 litere consecutive!
        • Fiecare jucätor isi scrie numele cu markerul special, pe eticheta reutilizabila si o pozitioneaza cât mai vizibil pe bluza sa.
        Se distribuie 4 carti fiecarui jucator; restul cartilor sunt asezate in pachet pe, masa, literele find in jos.
        • Fiecare jucator va incerca sã indeparteze adversarii din joc formând oricare ansamblu de 4 litere consecutive din numele acestora: de exemplu, pentru a o elimina pe Andreea vei avea nevoie de oricare din combinatiile ANDR, NDRE, DREE sau REEA.</p>
      </div>
      <div class="game3">
        <h3>3. CHRONOS</h3>
        <p>Scopul jocului este sa formezi numele folosind oricarui jucator folosind 4 litere consecutive!
        • Fiecare jucätor isi scrie numele cu markerul special, pe eticheta reutilizabila si o pozitioneaza cât mai vizibil pe bluza sa.
        Se distribuie 4 carti fiecarui jucator; restul cartilor sunt asezate in pachet pe, masa, literele find in jos.
        • Fiecare jucator va incerca sã indeparteze adversarii din joc formând oricare ansamblu de 4 litere consecutive din numele acestora: de exemplu, pentru a o elimina pe Andreea vei avea nevoie de oricare din combinatiile ANDR, NDRE, DREE sau REEA.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .txto-games {
    @media only screen and (min-width: 0px) {
        padding-top: 20px;

      h3 {
        padding-top: 15px;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 30px 60px 0 60px;

      h2 {
        text-align: center;
      }

      .games {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: 20px;
      }

      .game2 {
        padding-left: 80px;
      }

      p {
        width: 270px;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
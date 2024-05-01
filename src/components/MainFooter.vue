<template>
  <section class="main-footer">
    <div class="footer-menu">
      <ul>
        <li>Home</li>
        <li>Ce este TXTO?</li>
        <li>Jocuri</li>
        <li>Beneficii</li>
        <li>Pareri/Testimoniale</li>
        <li>Ce contine pachetul TXTO</li>
        <li>Intrebari frecvente</li>
        <li>Pret si detalii cumparare</li>
        <li>Despre creator</li>
        <li>Contact</li>
      </ul>
      <SocialMediaLinks />
    </div>
  </section>
</template>

<script setup>
  import SocialMediaLinks from "../components/SocialMediaLinks.vue";
</script>

<style lang="scss">
  @import '../css/quasar.variables.scss';

  .main-footer {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/footer-curve.png');
      background-size: cover;
      margin-top: 40px;
      padding-top: 5px;
      height: 102px ;

      .footer-menu {
        background-color: $dark-green;
        color: $light-yellow;
        font-size: 2rem;
        line-height: 4.4rem;
        margin-top: 50px;
        padding-bottom: 50px;
      }
    }

    @media only screen and (min-width: 768px) {}
    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
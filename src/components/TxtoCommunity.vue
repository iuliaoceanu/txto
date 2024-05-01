<template>
  <section class="txto-community">
    <h2>Comunitatea TXTO?</h2>
    <p>Am creat comunitatea TXTO pentru a fi mai aproape si pentru a da mai departe din experientele placute ale copiiilor ce joaca texto. Comunitatea este atat pe Instagram, Facebook si Youtube si are rolul de a va informa despre noile jocuri lansate si despre cum TXTO reuseste sa aduca mai multe experiente placute!</p>
    <SocialMediaLinks />
  </section>
</template>

<script setup>
  import SocialMediaLinks from "../components/SocialMediaLinks.vue";
</script>

<style lang="scss">
  .txto-community {
    @media only screen and (min-width: 0px) {
      padding-top: 10px;
    }

    @media only screen and (min-width: 768px) {
      padding: 20px 139px;

      h2 {
        padding-bottom: 30px;
      }
    }
    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
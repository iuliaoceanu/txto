<template>
  <main class="home-page">
    <MainHeader />

    <HeroBanner />

    <GamePresentation />

    <TxtoPackage />

    <TxtoGames />

    <WhyToPlay />

    <Testimonials />

    <WhatsInside />

    <FAQ />

    <PriceDetails />

    <WhoCreatedTxto />

    <TxtoCommunity />

    <Contact />

    <MainFooter />
  </main>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});

import MainHeader from  "../components/MainHeader.vue";
import HeroBanner from "../components/HeroBanner.vue";
import GamePresentation from "../components/GamePresentation.vue";
import TxtoPackage from "../components/TxtoPackage.vue";
import TxtoGames from "../components/TxtoGames.vue";
import WhyToPlay from "../components/WhyToPlay.vue";
import Testimonials from "../components/Testimonials.vue";
import WhatsInside from "../components/WhatsInside .vue";
import FAQ from "../components/FAQ.vue";
import PriceDetails from "../components/PriceDetails.vue";
import WhoCreatedTxto from "../components/WhoCreatedTxto.vue";
import TxtoCommunity from "../components/TxtoCommunity.vue";
import Contact from "../components/Contact.vue";
import MainFooter from  "../components/MainFooter.vue";
</script>

<style lang="scss">
.home-page {
  @media only screen and (min-width: 0px) {
    background: linear-gradient(180deg, #F0E8C3 0%, #F5DB81 49.5%, #E7D992 100%);
    z-index: 0;

    h1, h2, h3, p {
      margin: 10px 20px;
    }

    span {
      margin: 0px 20px;
    }

  }
  @media only screen and (min-width: 768px) {
    h1, h2, h3, p {
      margin: 0;
    }

    h2 {
      text-align: center;
    }
  }

  @media only screen and (min-width: 1024px) {}
  @media only screen and (min-width: 1512px) {}
}
</style>

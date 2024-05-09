<template>
  <section class="main-footer">
    <div class="footer-menu">
      <ul>
        <li v-for="page in pages" :key="page.id">
          <a :href="'#' + page.id" @click.prevent="scrollToSection(page.id)">{{ page.title }}</a>
        </li>
      </ul>
      <div class="social-media-container">
        <SocialMediaLinks class="social-media-links" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import SocialMediaLinks from "../components/SocialMediaLinks.vue";

  const pages = [
    { id: 'home', title: 'Home' },
    { id: 'game-presentation', title: 'Ce este TXTO?' },
    { id: 'txto-games', title: 'Jocuri' },
    { id: 'why-to-play', title: 'Beneficii' },
    { id: 'testimonials', title: 'Pareri' },
    { id: 'whats-inside', title: 'Pachetul TXTO' },
    { id: 'faq', title: 'Intrebari' },
    { id: 'price-details', title: 'Pret' },
    { id: 'who-created-txto', title: 'Despre' },
    { id: 'contact', title: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<style lang="scss">
  @import '../css/quasar.variables.scss';

  .main-footer {
    @media only screen and (min-width: 0px) {
      background-image: url('../assets/images/footer-curve.png');
      background-size: cover;
      margin-top: 40px;
      padding-top: 5px;
      height: 102px;

      .footer-menu {
        background-color: $dark-green;
        margin-top: 50px;
        padding: 0 20px 50px 40px;
      }

      ul {
        font-size: 2rem;
        line-height: 4.4rem;
        padding: 0;
      }

      a {
        color: $light-yellow;
      }
    }

    @media only screen and (min-width: 768px) {
      .footer-menu {
        padding: 0 100px;
      }

      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
      }

      .social-media-container {
        text-align: right;
      }

      .social-media-links {
        display: inline-block;
        margin: -30px 30px 30px 0;
      }
    }

    @media only screen and (min-width: 1024px) {
      .footer-menu {
        padding: 0 214px;
      }
    }

    @media only screen and (min-width: 1512px) {
      .footer-menu {
        padding: 0 456px;
      }
    }
  }
</style>
<template>
  <section id="home" class="main-header">
    <img class="logo" src="../assets/icons/logo_png%201.png" />

    <img v-if="isMobile" class="menu-icon" @click="toggleMobileMenu" :src="isMobileMenuOpen ? 'src/assets/icons/close-menu-icon.png' : 'src/assets/icons/menu-icon.png'" :class="{ 'close-menu-icon': isMobileMenuOpen, 'menu-icon': !isMobileMenuOpen }" />
    <transition name="fade">
      <div v-if="isMobile && isMobileMenuOpen" class="mobile-menu">
        <ul>
          <li v-for="page in pages" :key="page.id" @click="scrollToSection(page.id)">
            {{ page.title }}
          </li>
        </ul>
<!--        <img class="close-menu" @click="toggleMobileMenu" src="../assets/icons/close-menu-icon.png" />-->
      </div>
    </transition>

    <ul v-if="!isMobile" class="desktop-menu">
      <li v-for="page in pages" :key="page.id">
        <a :href="'#' + page.id" @click.prevent="scrollToSection(page.id)">{{ page.title }}</a>
      </li>
    </ul>

    <img class="header-curve-mobile" src="../assets/images/header-curve-mobile.png" />
    <img class="header-curve-tab" src="../assets/images/header-curve-tab.png" />
    <img class="header-curve-desktop" src="../assets/images/header-curve-desktop.png" />
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const pages = [
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

  const isMobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  const isMobile = computed(() => {
    return window.innerWidth <= 1023;
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMobileMenuOpen.value = false;
    }
  };
</script>

<style lang="scss">
  @import '../css/quasar.variables.scss';

  .main-header {
    @media only screen and (min-width: 0px) {
      height: 52px;
      padding: 19px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $blue-header;

      .desktop-menu {
        display: none;
      }

      .logo {
        width: 58px;
      }

      .menu-icon, .close-menu-icon {
        cursor: pointer;
        z-index: 2;
      }

      .menu-icon {
        width: 21px;
      }

      .close-menu-icon {
        width: 32px;
      }

      .mobile-menu {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: $blue-header;
      }

      .mobile-menu ul {
        padding: 0;
      }

      .mobile-menu ul li {
        text-align: center;
        font-size: 2rem;
        line-height: 4.4rem;
        color: $light-yellow;
      }

      .header-curve-tab, .header-curve-desktop {
        display: none;
      }

      .header-curve-mobile {
        height: 49px;
        width: 100%;
        top: 17px;
        left: 0;
        position: absolute;
        pointer-events: none;
      }
    }

    @media only screen and (min-width: 768px) {
      .header-curve-mobile, .header-curve-desktop {
        display: none;
      }

      .header-curve-tab {
        display: flex;
        height: 74px;
        width: 100%;
        margin-top: 10px;
        left: 0;
        position: absolute;
        pointer-events: none;
      }
    }

    @media only screen and (min-width: 1024px) {
      font-size: 1.8rem;

      .header-curve-tab {
        display: none;
      }

      .mobile-menu {
        display: none;
      }

      .desktop-menu {
        display: flex;
      }

      a {
        color: $light-yellow;
        margin-right: 20px;
      }
    }
    @media only screen and (min-width: 1512px) {}
  }
</style>

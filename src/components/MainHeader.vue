<template>
  <section class="main-header">
    <img class="logo" src="../assets/icons/logo_png%201.png">
    <img class="menu-icon" @click="toggleMenu" src="../assets/icons/Vector.png">
    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu">
<!--        <div class="align-top">-->
<!--          <img class="logo2" src="../assets/icons/logo_png%201.png">-->
<!--          <img class="close-menu" @click="toggleMenu" src="../assets/icons/carbon_close-outline.png">-->
<!--        </div>-->
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
        <img class="close-menu" @click="toggleMenu" src="../assets/icons/carbon_close-outline.png">
      </div>
    </transition>
    <img class="header-curve" src="../assets/images/header-curve.png">
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
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

      .logo {
        width: 58px;
        height: 22px;
      }

      .menu-icon {
        cursor: pointer;
        width: 21px;
        height: 15.91px;
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

      //.align-top {
      //  display: flex;
      //  flex-direction: row;
      //  justify-content: space-between;
      //  top: 10px;
      //}

      .close-menu {
        width: 32px;
        height: 32px;
        top: 10px;
        right: 19px;
        position: absolute;
        cursor: pointer;
      }

      .header-curve {
        height: 49px;
        width: 100%;
        top: 17px;
        left: 0;
        position: absolute;
        pointer-events: none;
      }
    }

    @media only screen and (min-width: 768px) {}
    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>

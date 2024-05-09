<template>
  <section id="contact" class="contact">
    <div>
      <h2 v-html="contact.title" />
      <p v-html="contact.description" />
    </div>
    <form>
      <label for="email">email</label>
      <input type="text" id="email" name="email" placeholder="email">
      <label for="message">mesaj pentru TXTO</label>
      <textarea id="message" name="message" placeholder="mesaj pentru TXTO"></textarea>
      <button>TRIMITE</button>
    </form>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const contact = computed(() => state[activeLanguage.value].contactSection)
</script>

<style lang="scss">
  @import '../css/quasar.variables.scss';

  .contact {
    @media only screen and (min-width: 0px) {
      padding: 20px;

      form {
        width: 270px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        input, textarea {
          border-radius: 4px;
          border: none;
          margin: 10px 0;
        }

        label, input::placeholder, textarea::placeholder {
          font-size: 1.6rem;
        }

        input {
          height: 38px;
        }

        textarea {
          height: 132px;
        }

        button {
          width: 270px;
          height: 40px;
          margin-top: 20px;
          font-size: 1.8rem;
          background-color: $blue;
          color: white;
          border: none;
          border-radius: 4px;
        }
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 10px 70px 0 139px;
      display: flex;
      flex-direction: row;
      align-items: center;

      h2 {
        padding-bottom: 10px;
      }

      > div {
        margin-right: 35px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 10px 214px 50px 214px;
      align-items: start;

      form {
        margin-left: 30px;
      }
    }

    @media only screen and (min-width: 1512px) {
      padding: 10px 456px 50px 456px;
    }
  }
</style>
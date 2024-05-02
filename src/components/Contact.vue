<template>
  <section class="contact">
    <div class="align-content">
      <h2>{{ contact.title }}</h2>
      <p>{{ contact.description }}</p>
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
      padding: 20px 0;

      form {
        width: 300px;
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
          width: 300px;
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
      padding: 0 50px 0 139px;
      display: flex;
      flex-direction: row;
      align-items: center;

      h2 {
        text-align: left;
        padding-bottom: 10px;
      }

      p {
        width: 230px;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
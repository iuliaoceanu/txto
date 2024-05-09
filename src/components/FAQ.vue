<template>
  <section id="faq" class="faq">
    <h2 v-html="faq.title" />
    <div>
      <FAQItem
          v-for="(question, index) in faq.questions"
          :key="index"
          :question="question.question"
          :answer="question.answer"
      ></FAQItem>
    </div>
  </section>
</template>

<script setup>
  import FAQItem from "./FAQItem.vue";

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const faq = computed(() => state[activeLanguage.value].faqSection)
</script>

<style lang="scss">
  .faq {
    @media only screen and (min-width: 0px) {
      padding: 0 20px;
    }

    @media only screen and (min-width: 768px) {
      padding: 0 75px 30px 75px;

      h2 {
        padding: 10px 0;
      }

      > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 20px 267px;

      h2 {
        //position: absolute;
      }

      > div {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
      }
    }

    @media only screen and (min-width: 1512px) {
      padding: 20px 536px;

      h2 {
        text-align: center;
      }

      > div {
        align-items: center;
      }
    }
  }
</style>
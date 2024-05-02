<template>
  <section class="faq">
    <h2>{{ faq.title }}</h2>
    <div class="questions">
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
      padding: 20px 0;
    }

    @media only screen and (min-width: 768px) {
      padding: 0 60px 30px 60px;

      h2 {
        padding: 20px 0;
      }

      .questions {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
<template>
  <section id="testimonials" class="testimonials">
    <h2 v-html="testimonials.title" />
    <div>
      <TestimonialsItem
          v-for="(testimonial, index) in testimonials.comments"
          :key="index"
          :iconSrc="testimonial.iconSrc"
          :comment="testimonial.comment"
          :author="testimonial.author"
      ></TestimonialsItem>
    </div>
    <BaseButton text="Cumpara TXTO" />
  </section>
</template>

<script setup>
  import BaseButton from '../components/BaseButton.vue';
  import TestimonialsItem from './TestimonialsItem.vue';

  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useLanguage } from '../store/language.js'

  const { state } = useStore()
  const { activeLanguage } = useLanguage()

  const testimonials = computed(() => state[activeLanguage.value].testimonialsSection)
</script>

<style lang="scss">
  .testimonials {
    @media only screen and (min-width: 0px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px 30px 20px;
    }

    @media only screen and (min-width: 768px) {
      padding: 0 94px 30px 94px;

      > div {
        display: flex;
        flex-direction: row;
      }
    }

    @media only screen and (min-width: 1024px) {
      padding: 0 156px 30px 156px;
    }

    @media only screen and (min-width: 1512px) {
      padding: 0 440px 50px 440px;
    }
  }
</style>
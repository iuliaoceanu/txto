<template>
  <section class="testimonials">
    <h2>{{ testimonials.title }}</h2>
    <div class="align-comments">
      <TestimonialsItem
          v-for="(testimonial, index) in testimonials.comments"
          :key="index"
          :iconSrc="testimonial.iconSrc"
          :comment="testimonial.comment"
          :author="testimonial.author"
      ></TestimonialsItem>
    </div>
    <BaseButton>Cumpara TXTO</BaseButton>
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
    }

    @media only screen and (min-width: 768px) {
      padding: 0 60px;

      h2 {
        text-align: center;
      }

      .align-comments {
        display: flex;
        flex-direction: row;
      }
    }

    @media only screen and (min-width: 1024px) {}
    @media only screen and (min-width: 1512px) {}
  }
</style>
<template>
  <div class="carousel">
    <div id="slides">
      <div v-for="slide in slides" :key="slide.id">
        <img class="slide-img" :src="slide.src" />
      </div>
    </div>
    <div>
      <button @click="moveSlide('next')" :disabled="currentIndex == 0"><img src="../assets/icons/arrow-left.png" /></button>
      <button @click="moveSlide('prev')" :disabled="currentIndex == slides.length - 1"><img src="../assets/icons/arrow-right.png" /></button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    slides: Object,
  })

  const currentIndex = ref(1);
  const transform = ref(0);

  const moveSlide = (direction) => {
    const image = [...document.getElementsByClassName("slide-img")];
    const slides = document.getElementById("slides");
    const width = image[currentIndex.value].clientWidth;
    if ( direction == 'next' ) {
      transform.value += width;
      currentIndex.value = (currentIndex.value - 1);
    }
    else {
      transform.value -= width;
      currentIndex.value = (currentIndex.value + 1);
    }
    slides.style.transform = `translateX(${transform.value}px)`;
  };
</script>

<style lang="scss">
  .carousel {
    margin: 20px 0;
    > div {
      display: flex;
      transition: transform 0.5s ease;
    }

    .slide-img {
      width: 148.28px;
      margin-right: 15px;
    }

    div + div {
      display: flex;
      justify-content: center;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      margin: 30px 15px 0 0;

      img {
        width: 46px;
      }
    }
  }
</style>

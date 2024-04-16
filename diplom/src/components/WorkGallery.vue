<template>
    <div class="work-gallery">
      <img v-for="(image, index) in images" :src="image.src" :alt="image.alt" :key="index" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
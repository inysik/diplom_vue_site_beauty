<template>
    <div class="contact center">
      <h2 class="our-work_title masters_title">Контакты</h2>
      <div class="map-container">
        <div id="container" style="width: 1296px; height: 576px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const map = new mapgl.Map('container', {
          center: [30.158, 59.992],
          styleZoom: 16,
          pitch: 40,
          rotation: -45,
          key: '466b9a48-59d8-4e18-81c7-df492c808c8f',
         style: 'e05ac437-fcc2-4845-ad74-b1de9ce07555',
          defaultBackgroundColor: '#3b3b3b',
        });
      }
    }
  }
  </script>
  
  <style scoped>

  
</style>
  
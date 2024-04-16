
   <template>
    <div class="our-work">
      <h2 class="our-work_title">Наши работы</h2>
  
      <ul class="nav-ul center menu">
        <li v-for="(category, index) in categories" :key="index" class="nav-ul_li">
          <a  class="nav_link" :class="{ 'nav_link__active': activeIndex === index }" @click="setActiveCategory(index)">{{ category }}</a>
        </li>
      </ul>
  
      <div class="our-work-cards center" >
        <WorkGallery class="works" :images="filteredImages" />
      </div>
    </div>
  </template>
  
  <script>
  import WorkGallery from './WorkGallery.vue';
  import work1 from '@/assets/img/work-1.png';
  import work2 from '@/assets/img/work-2.png';
  import work3 from '@/assets/img/work-3.jpg';
  import work4 from '@/assets/img/work-4.png';
  import work5 from '@/assets/img/work-5.jpg';
  import work6 from '@/assets/img/work-6.jpg';
  import work7 from '@/assets/img/work-7.png';
  import work8 from '@/assets/img/work-8.jpg';
  import work9 from '@/assets/img/work-9.jpg';
 
  
  export default {
    components: {
      WorkGallery,
    },
    data() {
      return {
        categories: ['Показать все', 'Парикмахерские услуги', 'Маникюр', 'Макияж'],
        activeIndex: 0,
        allImages: [
          { src: work1, alt: 'Work 1', category: 'Парикмахерские услуги' },
          { src: work2, alt: 'Work 2', category: 'Макияж' },
          { src: work3, alt: 'Work 3', category: 'Маникюр' },
          { src: work4, alt: 'Work 3', category: 'Макияж' },
          { src: work5, alt: 'Work 3', category: 'Парикмахерские услуги' },
          { src: work6, alt: 'Work 3', category: 'Макияж' },
          { src: work7, alt: 'Work 3', category: 'Маникюр' },
          { src: work8, alt: 'Work 3', category: 'Макияж' },
          { src: work9, alt: 'Work 3', category: 'Макияж' },
        ]
      };
    },
    computed: {
      filteredImages() {
        if (this.activeIndex === 0) {
          return this.allImages;
        } else {
          return this.allImages.filter(image => image.category === this.categories[this.activeIndex]);
        }
      },
    },
    methods: {
      setActiveCategory(index) {
        this.activeIndex = index;
      },
    },
  };
  </script>
   <style>
.works{
    display: grid;
    grid-template-columns: repeat(3,1fr);
     gap: 20px;
}
li {
    list-style-type:  none;
  }
  
  ul {
    list-style-type: "";
  }
</style>
   
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Logo from '../components/Logo.vue'
import OurWork from '../components/OurWork.vue'
import NotFound from '../components/NotFound.vue'
import PriceForServices from '../components/PriceForServices.vue'
import OurTeam from '../components/OurTeam.vue'
import Contacts from '../components/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'Главная',
    components: {
      Banner:Banner,
      About:About,
      Services:Services,
      Logo:Logo,
      OurWork:OurWork, 
      Footer:Footer,
    }
  },
  {
    path: '/our_team',
    name: 'Мастера',
    components: {
     
      OurTeam:OurTeam,
      Footer:Footer,
    }
  },
  {
    path: '/price_for_services',
    name: 'Косметика',
    components: {
     
      PriceForServices:PriceForServices,
      Footer:Footer,
    }
  },
  {
    path: '/contact',
    name: 'Контакты',
    components: {
    
      Contacts:Contacts,
      Footer:Footer,
    }
  },
  {
    path: '/:catchAll(.*)',
     component:NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

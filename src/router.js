import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import TeamView from './components/TeamView.vue'

// 💡 導入 6 個核心研究方向的詳細檢視組件
import GeoAiView from './components/Geoai.vue'
import TourismMobilityView from './components/MobileMapping.vue'
import SmartCityPlanningView from './components/UrbanInformatics.vue'
import UrbanPrivacyView from './components/IntelligentAnalytics.vue'

import BookView from './components/book.vue'
import PubView from './components/Pub.vue' // 💡 新增 Publications 頁面組件
import OpeningView from  './components/Opening.vue' // 💡 新增 Opening 頁面組件
import NewsView from './components/NewsView.vue'
// import Geoai from './components/Geoai.vue'
const routes = [
  {
    path: '/',
    component: HomeView,
    beforeEnter: (to) => to.query.page === 'director' ? { path: '/team' } : true
  },
  { path: '/team', component: TeamView },
  { path: '/book', component: BookView }, 
  { path: '/Pub', component: PubView }, // 💡 Publications 頁面路由
  {path: '/opening', component: OpeningView}, // 💡 Opening 頁面路由
  { path: '/news', component: NewsView },
  // 🔄 6 個核心研究方向的獨立新網頁路由路徑
  { path: '/research/geo-ai', component: GeoAiView },
  { path: '/research/tourism-mobility', component: TourismMobilityView },
  { path: '/research/smart-city-planning', component: SmartCityPlanningView },
  { path: '/research/urban-privacy', component: UrbanPrivacyView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 確保點擊跳轉時，畫面會自動回到網頁最頂端
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

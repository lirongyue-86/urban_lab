import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import TeamView from './components/TeamView.vue'

// 💡 導入 6 個核心研究方向的詳細檢視組件
import GeoAiView from './components/GeoAiView.vue'
import TourismMobilityView from './components/TourismMobilityView.vue'
import UrbanComputingView from './components/UrbanComputingView.vue'
import SmartCityPlanningView from './components/SmartCityPlanningView.vue'
import HumanBehaviorView from './components/HumanBehaviorView.vue'
import UrbanPrivacyView from './components/UrbanPrivacyView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/team', component: TeamView },
  
  // 🔄 6 個核心研究方向的獨立新網頁路由路徑
  { path: '/research/geo-ai', component: GeoAiView },
  { path: '/research/tourism-mobility', component: TourismMobilityView },
  { path: '/research/urban-computing', component: UrbanComputingView },
  { path: '/research/smart-city-planning', component: SmartCityPlanningView },
  { path: '/research/human-behavior', component: HumanBehaviorView },
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
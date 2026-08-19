<template>
  <section id="research-anchor" class="section">
    <h2 class="section-title">Core Research Directions</h2>
    
    <div class="research-container">
      <div 
        v-for="(item, index) in researchDirections" 
        :key="item.title" 
        :class="['research-row', { 'reverse': index % 2 !== 0 }]"
      >
        <div class="image-box">
          <div class="placeholder-img">
            <img v-if="typeof item.icon === 'string' && (item.icon.includes('data:image') || item.icon.includes('.jpg') || item.icon.includes('.png')) || typeof item.icon !== 'string'" :src="item.icon" :alt="item.title" />
            <template v-else>{{ item.icon }}</template>
          </div>
        </div>

        <div class="text-box">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <router-link :to="item.url" class="read-more">Read More →</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import geoAiImg from '../assets/GeoAI.jpg'
import tourismImg from '../assets/TourismMobilityView.jpg'
import smartCityImg from '../assets/SmartCity.jpg'
import privacyImg from '../assets/Privacy.jpg'

// 💡 僅將內容翻譯並更新為對應的英文學術介紹
const researchDirections = ref([
  { 
    icon: geoAiImg, 
    title: 'GeoAI for object recognition and geospatial data analysis',
    url:'/research/geo-ai'
  },
  { 
    icon: tourismImg, 
    title: 'Mobile mapping for autonomous driving and robotics', 
    url: '/research/tourism-mobility' 
  },
  { 
    icon: smartCityImg, 
    title: 'Urban informatics and smart cities', 
    url: '/research/smart-city-planning' 
  },
  { 
    icon: privacyImg, 
    title: 'Intelligent analytics and quality control for spatial big data', 
    url: '/research/urban-privacy'
  }
])
</script>

<style scoped>
/* 关键修正：防止导航栏遮挡 */
#research-anchor {
  scroll-margin-top: 100px; 
}

.section { padding: 50px 0; display: flex; flex-direction: column; align-items: center; }
.section-title { width: 90%; max-width: 1000px; margin-bottom: 50px; color: #1e3a8a; font-size: 2.5rem; border-left: 5px solid #0284c7; padding-left: 15px; }
.research-container { width: 90%; max-width: 1000px; display: flex; flex-direction: column; gap: 60px; }
.research-row { display: flex; align-items: center; gap: 40px; }
.research-row.reverse { flex-direction: row-reverse; }
.image-box { flex: 1; display: flex; justify-content: center; }

/* 💡 修正處 1：加入 overflow: hidden 確保塞入的圖片不會超出這塊 12px 的圓角邊框 */
.placeholder-img { 
  width: 100%; 
  height: 200px; 
  background: #e2e8f0; 
  border-radius: 12px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 4rem; 
  overflow: hidden; 
}

/* 💡 修正處 2：全新加入針對子層 img 的樣式。這能強迫圖片填滿 200px 高度，且 object-fit: cover 會像背景圖一樣完美裁切，絕對不變形 */
.placeholder-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-box { flex: 1.5; }
.text-box h3 { font-size: 1.75rem; color: #0f172a; margin-bottom: 15px; }
.text-box p { font-size: 1.1rem; color: #475569; line-height: 1.6; margin-bottom: 20px; }
.read-more { display: inline-block; color: #0284c7; text-decoration: none; font-weight: bold; font-size: 1.1rem; transition: color 0.2s; }
.read-more:hover { color: #0369a1; }

@media (max-width: 768px) {
  .research-row, .research-row.reverse { flex-direction: column; gap: 20px; }
  .placeholder-img { height: 150px; }
}
</style>

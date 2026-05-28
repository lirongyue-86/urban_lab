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
import UrbanComputImg from '../assets/UrbanComputing.jpg'
import humanImg from '../assets/human.jpg'
import privacyImg from '../assets/Privacy.jpg'

// 💡 僅將內容翻譯並更新為對應的英文學術介紹
const researchDirections = ref([
  { 
    icon: geoAiImg, 
    title: 'Geospatial Artificial Intelligence (GeoAI)', 
    desc: 'Integrating deep learning algorithms with remote sensing imagery for intelligent target extraction, advanced change detection, and automatic object recognition.', 
    url: '/research/geo-ai' 
  },
  { 
    icon: tourismImg, 
    title: 'Smart Tourism and Mobility', 
    desc: 'Leveraging multi-source spatiotemporal big data to analyze tourist movement behaviors, destination carrying capacity, and spatial equity in public transit.', 
    url: '/research/tourism-mobility' 
  },
  { 
    icon: UrbanComputImg, 
    title: 'Urban Computing and Big Data', 
    desc: 'Focusing on intelligent data analytics and developing international standards for spatial big data quality control to empower sustainable urban decision-making.', 
    url: '/research/urban-computing' 
  },
  { 
    icon: smartCityImg, 
    title: 'Smart City Planning & Digital Twins', 
    desc: 'Utilizing high-density LiDAR point clouds for automated 3-D urban modeling and developing dynamic digital twins to optimize infrastructure distribution.', 
    url: '/research/smart-city-planning' 
  },
  { 
    icon: humanImg, 
    title: 'Human Behavior Analysis', 
    desc: 'Modeling and predicting individual mobility patterns in complex urban spaces by pioneering spatiotemporal uncertainty theories and error ellipse trajectory corrections.', 
    url: '/research/human-behavior' 
  },
  { 
    icon: privacyImg, 
    title: 'Urban Privacy and Public Safety', 
    desc: 'Balancing spatial location privacy preservation with real-time prediction and early warning systems for emerging pathogens to enhance spatiotemporal public health security.', 
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
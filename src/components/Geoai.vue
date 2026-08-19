<template>
  <div class="academic-container">
    <!-- 背景流光与网格动画 -->
    <div class="bg-grid"></div>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <!-- 顶栏标题 -->
    <header class="header">
      <h1 class="main-title">Object Recognition & Geospatial Analysis</h1>
      <p class="subtitle">Advancing Spatial Intelligence through Deep Learning, Remote Sensing, and Mobile Measurement Systems</p>
      
      <!-- 板块切换导航标签 -->
      <div class="tab-navigation">
        <button 
          :class="['tab-btn', currentTab === 'achievements' ? 'active' : '']"
          @click="switchTab('achievements')"
        >
          Core Technologies & Achievements <span class="count">{{ achievements.length }}</span>
        </button>
        <button 
          :class="['tab-btn', currentTab === 'publications' ? 'active' : '']"
          @click="switchTab('publications')"
        >
          Featured Publications <span class="count">{{ publications.length }}</span>
        </button>
      </div>
    </header>

    <!-- 主展示区 -->
    <main class="showcase-grid">
      
      <!---------------------------------------
        板块一：核心成果展示 (Achievements)
      ---------------------------------------->
      <template v-if="currentTab === 'achievements'">
        <div 
          v-for="(item, index) in achievements" 
          :key="'ach-' + index"
          class="card"
          @mousemove="handleMouseMove($event, index)"
          @mouseleave="handleMouseLeave(index)"
          @click="handleCardClick(item.link)"
          :ref="el => setCardRef(el, index)"
        >
          <div class="card-glow" :style="item.glowStyle"></div>
          <div class="image-wrapper">
            <img :src="item.image" :alt="item.title" />
            <div class="tag">{{ item.tag }}</div>
          </div>
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            
            <!-- 指标标签 -->
            <div class="metrics-list" v-if="item.metrics">
              <span v-for="(metric, mIndex) in item.metrics" :key="mIndex" class="metric-badge">
                {{ metric }}
              </span>
            </div>

            <div class="card-footer" v-if="item.link">
              <span class="explore-link">{{ item.linkText || 'Explore Details' }} &rarr;</span>
            </div>
          </div>
        </div>
      </template>

      <!---------------------------------------
        板块二：学术论文发表 (Publications)
      ---------------------------------------->
      <template v-if="currentTab === 'publications'">
        <div 
          v-for="(pub, index) in publications" 
          :key="'pub-' + index"
          class="card pub-card"
          @mousemove="handleMouseMove($event, index)"
          @mouseleave="handleMouseLeave(index)"
          @click="handleCardClick(pub.link)"
          :ref="el => setCardRef(el, index)"
        >
          <div class="card-glow" :style="pub.glowStyle"></div>
          <div class="pub-badge-top">
            <span class="journal-tag">{{ pub.journal }}</span>
            <span class="if-tag">Published: {{ pub.year }}</span>
          </div>
          <div class="card-content pub-content">
            <h3 class="pub-title">{{ pub.title }}</h3>
            <p class="pub-authors">{{ pub.authors }}</p>
            <p class="pub-desc">{{ pub.desc }}</p>
            
            <div class="metrics-list">
              <span v-for="(badge, bIdx) in pub.badges" :key="bIdx" class="metric-badge pub-metric">
                {{ badge }}
              </span>
            </div>

            <div class="card-footer">
              <span class="explore-link">View Publication &rarr;</span>
            </div>
          </div>
        </div>
      </template>

    </main>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'

// 引入图片资源
import landslideImg from '../assets/focus/geoai_slide.jpg'
import roadImg from '../assets/focus/geoai_defect.jpg'
import buildingImg from '../assets/focus/geoai_building.png'
import signboardImg from '../assets/focus/geoai_sign.jpg'

// 当前选中的板块：'achievements' 或 'publications'
const currentTab = ref('achievements')
const cardRefs = []

// 收集当前 DOM 元素的引用（安全绑定）
const setCardRef = (el, index) => {
  if (el) {
    cardRefs[index] = el
  }
}

// 切换 Tab 时重置引用数组，防止越界或指向错误
const switchTab = (tabName) => {
  currentTab.value = tabName
  cardRefs.length = 0
}

// 板块一：成果数据
const achievements = reactive([
  {
    title: 'AI-based Landslide Detection',
    tag: 'Remote Sensing',
    desc: 'Automated extraction from remote sensing imagery. Improves extraction speed 8-fold with >90% accuracy, providing boundaries, areas, and heights. Adopted byemorized by HK Government.',
    image: landslideImg,
    link: 'https://doi.org/10.1109/TGRS.2020.3015826',
    linkText: 'View Associated Paper',
    glowStyle: {}
  },
  {
    title: 'Road Defect Detection System',
    tag: 'Urban Infrastructure',
    desc: 'Advanced computer vision framework for automated pavement distress identification and structural health monitoring of transportation networks.',
    image: roadImg,
    link: 'https://doi.org/10.1016/j.aei.2026.104427',
    linkText: 'View Associated Paper',
    glowStyle: {}
  },
  {
    title: 'Building Defect Detection (Indoor)',
    tag: 'Structural Health',
    desc: 'DB-Detection model based on Backpack MMS, fusing point clouds and panoramic images (mAP: 0.67) with 3D positioning and automated reporting.',
    image: buildingImg,
    link: '',
    glowStyle: {}
  },
  {
    title: 'Signboard Defect Detection Tech',
    tag: 'Urban Safety',
    desc: 'Intelligent multi-attribute framework capable of classifying signboard types and detecting structural/surface anomalies like corrosion and peeling.',
    image: signboardImg,
    link: '',
    glowStyle: {}
  }
])

// 板块二：论文数据
const publications = reactive([
  {
    title: 'Landslide Recognition by Deep Convolutional Neural Network and Change Detection',
    journal: 'IEEE Transactions on Geoscience and Remote Sensing (TGRS)',
    year: '2021',
    authors: 'Shi, W., Zhang, M., Ke, H., Fang, X., Zhan, Z., & Chen, S.',
    desc: 'Presents a CNN-and-change-detection framework for automated, high-speed landslide recognition and attribute extraction from remote-sensing imagery.',
    link: 'https://doi.org/10.1109/TGRS.2020.3015826',
    badges: ['Remote Sensing', 'CNN', 'Change Detection'],
    glowStyle: {}
  },
  {
    title: 'CrackDualMamba: A Lightweight Dual-stream Mamba with Novel Focal Dice Balanced Loss for Vehicle-based Road Crack Segmentation',
    journal: 'Advanced Engineering Informatics',
    year: '2026',
    authors: 'Bai, C., Shi, W., Zhang, M., & Zhao, H.',
    desc: 'Introduces a lightweight dual-stream network for detailed road-crack segmentation in challenging vehicle-based imagery, combining local detail awareness with global context modelling.',
    link: 'https://doi.org/10.1016/j.aei.2026.104427',
    badges: ['Road Infrastructure', 'Vision Mamba', 'Crack Segmentation'],
    glowStyle: {}
  },
  {
    title: 'PolyU-BPCoMa: A Dataset and Benchmark Towards Mobile Colorized Mapping Using a Backpack Multisensorial System',
    journal: 'International Journal of Applied Earth Observation and Geoinformation',
    year: '2022',
    authors: 'Shi, W., Chen, P., Wang, M., Bao, S., Xiang, H., Yu, Y., & Yang, D.',
    desc: 'Documents an approximately 800 GB benchmark dataset for mobile colorized mapping, combining 3D LiDAR, spherical imagery, GNSS and IMU across indoor and outdoor environments.',
    link: 'https://doi.org/10.1016/j.jag.2022.102962',
    badges: ['Mobile Mapping', 'Multisensor Dataset', 'Colorized Point Clouds'],
    glowStyle: {}
  },
  {
    title: 'CGSANet: A Contour-Guided and Local Structure-Aware Encoder–Decoder Network for Accurate Building Extraction from Very High-Resolution Remote Sensing Imagery',
    journal: 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing',
    year: '2021',
    authors: 'Chen, S., Shi, W., Zhou, M., Zhang, M., & Xuan, Z.',
    desc: 'Proposes a contour-guided and multiregion-guided network for accurate building extraction, with strong results on the WHU and NZ32km² building datasets.',
    link: 'https://doi.org/10.1109/JSTARS.2021.3139017',
    badges: ['Building Extraction', 'VHR Imagery', 'Deep Learning'],
    glowStyle: {}
  }
])

const handleCardClick = (link) => {
  if (!link) return
  window.open(link, '_blank')
}

const handleMouseMove = (e, index) => {
  const card = cardRefs[index]
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const xc = rect.width / 2
  const yc = rect.height / 2
  const dx = (x - xc) / 15
  const dy = (yc - y) / 15

  card.style.transform = `perspective(1000px) rotateX(${dy}deg) rotateY(${dx}deg) scale3d(1.01, 1.01, 1.01)`
  
  // 根据当前激活的板块设定对应的目标数组动态高光
  if (currentTab.value === 'achievements' && achievements[index]) {
    achievements[index].glowStyle = {
      opacity: '1',
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15), transparent 65%)`
    }
  } else if (currentTab.value === 'publications' && publications[index]) {
    publications[index].glowStyle = {
      opacity: '1',
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15), transparent 65%)`
    }
  }
}

const handleMouseLeave = (index) => {
  const card = cardRefs[index]
  if (!card) return
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  if (achievements[index]) achievements[index].glowStyle.opacity = '0'
  if (publications[index]) publications[index].glowStyle.opacity = '0'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.academic-container {
  position: relative;
  min-height: 100vh;
  background-color: #0b0f19;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  padding: 60px 20px;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
}

.glow-orb {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(150px);
  z-index: 1;
  opacity: 0.08;
  animation: float 12s infinite alternate ease-in-out;
}
.orb-1 { background: #38bdf8; top: -150px; left: -100px; }
.orb-2 { background: #6366f1; bottom: -150px; right: -100px; animation-delay: -6s; }

@keyframes float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

.header {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 40px;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin-bottom: 12px;
}

.subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto 30px auto;
  line-height: 1.5;
}

/* 切换标签按钮栏样式 */
.tab-navigation {
  display: inline-flex;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 6px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  gap: 8px;
}

.tab-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-btn:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.03);
}

.tab-btn.active {
  color: #ffffff;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.3);
  box-shadow: 0 4px 15px -4px rgba(56, 189, 248, 0.3);
}

.tab-btn .count {
  font-size: 0.7rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 10px;
}

.tab-btn.active .count {
  background: rgba(56, 189, 248, 0.3);
  color: #38bdf8;
}

/* 网格排版 */
.showcase-grid {
  position: relative;
  z-index: 2;
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.card {
  position: relative;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  transition: transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.card:hover {
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 10px 30px -10px rgba(56, 189, 248, 0.15);
}

.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 3;
}

.image-wrapper {
  position: relative;
  height: 200px;
  background: #020617;
  overflow: hidden;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
}
.card:hover .image-wrapper img {
  transform: scale(1.06);
  opacity: 1;
}

.tag {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  padding: 4px 10px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 6px;
  backdrop-filter: blur(4px);
}

.card-content {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.card-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #f8fafc;
}
.card-content p {
  font-size: 0.825rem;
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 14px;
}

/* 论文卡片样式 */
.pub-card {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.8) 100%);
}

.pub-badge-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px 0 22px;
  position: relative;
  z-index: 4;
}

.journal-tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: #38bdf8;
  letter-spacing: 0.5px;
}

.if-tag {
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(56, 189, 248, 0.1);
  color: #7dd3fc;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.pub-content .pub-title {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 8px;
}

.pub-authors {
  font-size: 0.85rem;
  color: #cbd5e1;
  font-weight: 500;
  margin-bottom: 12px;
}

.pub-desc {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.6;
}

/* 指标标签栏 */
.metrics-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
  margin-top: auto;
}
.metric-badge {
  font-size: 0.68rem;
  background: rgba(56, 189, 248, 0.08);
  color: #7dd3fc;
  border: 1px solid rgba(56, 189, 248, 0.15);
  padding: 2px 8px;
  border-radius: 4px;
}

.card-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 12px;
  margin-top: auto;
}

.explore-link {
  font-size: 0.78rem;
  font-weight: 500;
  color: #38bdf8;
  letter-spacing: 0.3px;
  transition: color 0.2s;
}
.card:hover .explore-link {
  color: #7dd3fc;
}
</style>

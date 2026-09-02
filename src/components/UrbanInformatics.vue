<template>
  <div class="academic-container">
    <!-- 背景流光与网格动画 -->
    <div class="bg-grid"></div>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <!-- 顶栏标题 -->
    <header class="header">
      <h1 class="main-title">Urban Informatics & Smart Cities</h1>
      <p class="subtitle">Shaping the Future of Sustainable, Smart Urban Systems through Convergent Science, Global Standards, and Advanced Spatial Analytics</p>
    </header>

    <!-- 主展示区：6大核心板块网格 -->
    <main class="showcase-grid">
      <div 
        v-for="(item, index) in topics" 
        :key="index"
        class="card"
        @mousemove="handleMouseMove($event, index)"
        @mouseleave="handleMouseLeave(index)"
        @click="handleCardClick(item.link)"
        :ref="el => cardRefs[index] = el"
      >
        <div class="card-glow" :style="item.glowStyle"></div>
        <div class="image-wrapper">
          <img :src="item.image" :alt="item.title" />
          <div class="tag">{{ item.tag }}</div>
        </div>
        <div class="card-content">
          <h3>{{ item.title }}</h3>
          <p class="card-desc">{{ item.desc }}</p>
          
          <!-- 亮点/引言摘录 -->
          <div class="highlights-box" v-if="item.highlights">
            <div v-for="(h, hIdx) in item.highlights" :key="hIdx" class="highlight-item">
              &ldquo;{{ h }}&rdquo;
            </div>
          </div>

          <!-- 指标或标签栏 -->
          <div class="metrics-list" v-if="item.metrics">
            <span v-for="(m, mIdx) in item.metrics" :key="mIdx" class="metric-badge">
              {{ m }}
            </span>
          </div>

          <div class="card-footer" v-if="item.linkText">
            <span class="explore-link">{{ item.linkText }} &rarr;</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 引入你提供的图片资源 (请确保路径与你的项目对应)
import bookImg from '../assets/focus/ur_book.png'         // 1. Urban Informatics Book
import sciBullImg from '../assets/focus/ur_ar.jpg'      // 2. The Science of Urban Informatics
import juiImg from '../assets/focus/ur_jo.png'          // 3. Journal of Urban Informatics
import indexImg from '../assets/focus/ur_in.png'        // 4. Smart City Index 2025
import mapImg from '../assets/focus/ur_hdmap.png'          // 5. HD Map Hong Kong
import confImg from '../assets/focus/ur_con.png'         // 6. ICUI 2025 Conference

const topics = reactive([
  {
    title: 'Foundational Book: Urban Informatics',
    tag: 'Springer Monograph',
    desc: 'The first book to comprehensively introduce the theories, technologies, and applications of Urban Informatics, published by Springer.',
    highlights: ['compulsory read', 'must-read book', 'the best introduction book so far (for planners)'],
    metrics: ['2.8M+ Downloads', 'Top Springer Global Book', 'Adopted by MIT, Cambridge, Tsinghua, HKU'],
    image: bookImg,
    link: 'https://link.springer.com/book/10.1007/978-981-15-8983-6',
    linkText: 'Explore Monograph',
    glowStyle: {}
  },
  {
    title: 'The Science of Urban Informatics',
    tag: 'Science Bulletin Perspective',
    desc: 'A landmark perspective paper establishing urban informatics as an emerging convergent science, addressing complex challenges in global urbanization.',
    highlights: ['Convergent Science', 'Data-Intensive Paradigm'],
    metrics: ['Published in Science Bulletin', 'Leading Global Scholars'],
    image: sciBullImg,
    link: 'https://www.researchgate.net/publication/350704718_Urban_Informatics',
    linkText: 'Read Perspective Article',
    glowStyle: {}
  },
  {
    title: 'Journal of Urban Informatics',
    tag: 'Academic Journal',
    desc: 'An international premier journal dedicated to publishing cutting-edge research, methodologies, and applications in the field of urban informatics.',
    highlights: ['Global Peer Review', 'Cutting-edge Urban Research'],
    metrics: ['Elsevier Platform', 'Open Science'],
    image: juiImg,
    link: 'https://link.springer.com/journal/44212',
    linkText: 'Visit Journal',
    glowStyle: {}
  },
  {
    title: 'Smart City Index 2025',
    tag: 'Whitebook Report',
    desc: 'Comprehensive benchmarking and whitebook evaluation framework assessing smart city developments and innovations worldwide.',
    highlights: ['ISUI Initiative', 'Global City Benchmarking'],
    metrics: ['2025 Whitebook', 'Downloadable Report'],
    image: indexImg,
    link: 'http://isocui.org/#/smart_city_index',
    linkText: 'Download Whitebook',
    glowStyle: {}
  },
  {
    title: 'HD Map Content Specification for HK',
    tag: 'Standardization',
    desc: 'Official consultation document defining data acquisition and standardization specifications for High-Definition Maps in Hong Kong.',
    highlights: ['Multi-Sensor Fusion', 'Mobile Measurement Systems'],
    metrics: ['SmartSpace Research', 'Consultation Document'],
    image: mapImg,
    link: 'https://www.polyu.edu.hk/scri/publications/high-definition-map-content-specification-for-hong-kong/',
    linkText: 'View Specification',
    glowStyle: {}
  },
  {
    title: 'Urban Informatics Conference Series',
    tag: 'Global Summit',
    desc: 'The premier international conference series (ICUI & Global Smart Cities Summit) gathering world-class experts in urban intelligence.',
    highlights: ['Global Academic Exchange', 'GSCS & ICUI 2025'],
    metrics: ['International Summit', 'Annual Gathering'],
    image: confImg,
    link: 'https://isocui.org/icui2025/',
    linkText: 'Visit ICUI 2025 Website',
    glowStyle: {}
  }
])

const cardRefs = ref([])

const handleCardClick = (link) => {
  if (!link) return
  window.open(link, '_blank')
}

const handleMouseMove = (e, index) => {
  const card = cardRefs.value[index]
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const xc = rect.width / 2
  const yc = rect.height / 2
  const dx = (x - xc) / 15
  const dy = (yc - y) / 15

  card.style.transform = `perspective(1000px) rotateX(${dy}deg) rotateY(${dx}deg) scale3d(1.01, 1.01, 1.01)`
  
  topics[index].glowStyle = {
    opacity: '1',
    background: `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15), transparent 65%)`
  }
}

const handleMouseLeave = (index) => {
  const card = cardRefs.value[index]
  if (!card) return
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  topics[index].glowStyle.opacity = '0'
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
  margin-bottom: 50px;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 20px;
  margin-bottom: 16px;
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
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.5;
}

.showcase-grid {
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
  height: 220px;
  background: #020617;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保证封面、白皮书全图展示不被裁切 */
  padding: 10px;
  opacity: 0.9;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
}
.card:hover .image-wrapper img {
  transform: scale(1.05);
  opacity: 1;
}

.tag {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  padding: 4px 10px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 6px;
  backdrop-filter: blur(4px);
  z-index: 4;
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
.card-desc {
  font-size: 0.825rem;
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 12px;
}

/* 学术引言/书评样式 */
.highlights-box {
  background: rgba(56, 189, 248, 0.04);
  border-left: 2px solid #38bdf8;
  padding: 8px 12px;
  margin-bottom: 12px;
  border-radius: 0 6px 6px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.highlight-item {
  font-size: 0.75rem;
  color: #cbd5e1;
  font-style: italic;
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

@media (max-width: 768px) {
  .academic-container { padding: 36px 16px; }
  .header { margin-bottom: 32px; }
  .main-title { font-size: 2rem; line-height: 1.2; }
  .showcase-grid { grid-template-columns: 1fr; gap: 18px; }
  .image-wrapper { height: 190px; }
  .card-content { padding: 18px; }
}
</style>

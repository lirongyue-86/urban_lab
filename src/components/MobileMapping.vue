<template>
  <div class="academic-container">
    <!-- 背景流光与网格动画 -->
    <div class="bg-grid"></div>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <!-- 顶栏标题 -->
    <header class="header">
      <h1 class="main-title">Mobile Mapping Systems</h1>
      <p class="subtitle">Advanced Multi-Platform Spatial Intelligence & Autonomous Perception</p>
    </header>

    <!-- 主展示区 -->
    <main class="showcase-grid">
      <div 
        v-for="(item, index) in systems" 
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
          <p>{{ item.desc }}</p>
          <div class="card-footer" v-if="item.link">
            <span class="explore-link">Explore Details &rarr;</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import backpackImg from '../assets/focus/backpa_MM.png'
import handelImg from '../assets/focus/handel.png'
import vieImg from '../assets/focus/viechle.png'
import robImg from '../assets/focus/rob.png'

const systems = reactive([
  {
    title: 'Vehicle-based MMS',
    tag: 'Automotive',
    desc: 'Fast 3D scanning and high-precision mapping for large-scale urban environments.',
    image: vieImg,
    link: 'https://smartspacetech.com.hk',
    glowStyle: {}
  },
  {
    title: 'Handheld MMS',
    tag: 'Portable',
    desc: 'Flexible height adjustment and ergonomic design for indoor close-range measurement.',
    image: handelImg,
    link: '',
    glowStyle: {}
  },
  {
    title: 'Backpack Mobile Mapping System',
    tag: 'Wearable',
    desc: 'Real-time 3D data acquisition and digital twin creation in GPS-denied environments.',
    image: backpackImg,
    link: '',
    glowStyle: {}
  },
  {
    title: 'Robotics MMS',
    tag: 'Autonomous',
    desc: 'Integration with advanced SLAM technology on quadruped robots for intelligent inspection.',
    image: robImg,
    link: '',
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
  
  // 更加克制柔和的 3D 倾斜
  const xc = rect.width / 2
  const yc = rect.height / 2
  const dx = (x - xc) / 15
  const dy = (yc - y) / 15

  card.style.transform = `perspective(1000px) rotateX(${dy}deg) rotateY(${dx}deg) scale3d(1.01, 1.01, 1.01)`
  
  // 学术冷色调光晕 (使用纯正的科技蓝)
  systems[index].glowStyle = {
    opacity: '1',
    background: `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15), transparent 65%)`
  }
}

const handleMouseLeave = (index) => {
  const card = cardRefs.value[index]
  if (!card) return
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  systems[index].glowStyle.opacity = '0'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.academic-container {
  position: relative;
  min-height: 100vh;
  background-color: #0b0f19; /* 更沉稳的高级深色背景 */
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  padding: 60px 20px;
}

/* 精致的矩阵网格背景 */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
}

/* 克制的环境光效，告别红粉浮夸感 */
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

/* 顶栏学术排版 */
.header {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 60px;
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
  font-size: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin-bottom: 12px;
}

.subtitle {
  color: #94a3b8;
  font-size: 1rem;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

/* 卡片网格布局 */
.showcase-grid {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

/* 学术风格炫酷卡片 */
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
  height: 190px;
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
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  padding: 4px 10px;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 6px;
  backdrop-filter: blur(4px);
}

.card-content {
  padding: 24px;
}
.card-content h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #f8fafc;
}
.card-content p {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 12px;
}

.explore-link {
  font-size: 0.8rem;
  font-weight: 500;
  color: #38bdf8;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}
.card:hover .explore-link {
  color: #7dd3fc;
}
</style>
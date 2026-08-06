<template>
  <div class="hero-full-width">
    <section id="home" class="hero-section">
      <h1>Welcome to the Lab of Urban Informatics</h1>
      <p class="subtitle"> Smart Cities Research Institute</p>
      <p class="description">
        We aims at being a global centre of excellence in urban
         informatics and a living laboratory of smart city development 
         for Hong Kong and the Guangdong-Hong Kong-Macao Greater Bay Area.

      </p>
    </section>

    <div class="scroll-indicator" @click="scrollToResearch">
      <span class="arrow">▼</span>
    </div>
  </div>

  <div class="main-content">
    <hr class="divider" />
    <ResearchSection />
    <hr class="divider" />
    <ContactSection />
  </div>
</template>

<script setup>
import ResearchSection from './ResearchSection.vue'
import ContactSection from './ContactSection.vue'

const scrollToResearch = () => {
  const element = document.getElementById('research-anchor')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-full-width {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* 【核心修改】线性渐变改为纯黑遮罩（0.55透明度），叠加在你的背景图上方以实现调暗效果 */
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), 
              url('../assets/Welcome.png') no-repeat center center;
  background-size: cover;
  background-attachment: fixed; /* 保持背景视差滚动的效果，如不需要可删掉此行 */
  
  padding: 150px 20px;
  box-sizing: border-box;
}

/* 下拉箭头样式 */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  cursor: pointer;
  animation: bounce 2s infinite;
  z-index: 10;
}
.arrow { display: block; font-size: 2rem; color: #38bdf8; }
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
}

/* 【核心修改】删除了原有的 .hero-full-width::before 伪元素及相关的 moveBackground 动画，去除了科技感圆点 */

.hero-section { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; text-align: center; }
.hero-section h1 { font-size: 3rem; color: #ffffff; margin-bottom: 10px; }
.subtitle { font-size: 1.6rem; color: #38bdf8; margin-bottom: 30px; font-weight: bold; }
.description { font-size: 1.2rem; line-height: 1.8; color: #cbd5e1; }
.main-content { max-width: 1200px; margin: 0 auto; padding: 0 5%; }
.divider { border: 0; height: 1px; background: #e2e8f0; margin: 60px auto; }
</style>
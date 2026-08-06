<template>
  <div class="pub-container">
    <div class="pub-wrap">
      
      <div v-if="currentView === 'years'" class="animate-fadeIn">
        <header class="pub-header">
          <h1 class="pub-title">Selected Publications</h1>
          <p class="pub-subtitle">

          </p>
        </header>

        <div class="year-grid">
          <button 
            v-for="year in uniqueYears" 
            :key="year"
            @click="navigateToYear(year)"
            class="year-card"
          >
            <span class="year-num">{{ year }}</span>
            <span class="arrow-icon">→</span>
          </button>
        </div>
      </div>

      <div v-else class="animate-fadeIn">
        <div class="detail-header">
          <button @click="backToYears" class="back-btn">
            <span class="back-arrow">←</span> Back to Years
          </button>
          <h2 class="detail-title">
            Published Papers in <span class="year-highlight">{{ selectedYear }}</span>
          </h2>
        </div>

        <div class="paper-list">
          <div 
            v-for="(paper, index) in filteredPublications" 
            :key="index"
            class="paper-item"
          >
            <div class="tags-row">
              <span v-if="paper.impactFactor" class="if-tag">
                IF: {{ paper.impactFactor }}
              </span>
              <span class="journal-tag">
                {{ paper.journal }}
              </span>
            </div>

            <h3 class="paper-title">{{ paper.title }}</h3>
            <p class="paper-authors">{{ paper.authors }}</p>

            <div class="paper-footer">
              <a 
                v-if="paper.doi" 
                :href="paper.doi" 
                target="_blank"
                class="pub-site-link"
              >
                Publisher Site <span class="link-arrow">↗</span>
              </a>
              <span v-else class="indexed-tag">
                🔒 Indexed Document
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 导入论文数据
import { shiPublicationsEn } from './PubData.js'
const publicationsData = shiPublicationsEn;

const currentView = ref('years')
const selectedYear = ref('')

// 显式将 item.year 转为 Number 或干净的 String，防止它在 map 阶段被意外隐式拼接
const uniqueYears = computed(() => {
  const years = publicationsData.map(item => {
    const parsedYear = parseInt(item.year, 10);
    return isNaN(parsedYear) ? item.year : parsedYear;
  })
  return [...new Set(years)].sort((a, b) => b - a)
})

const filteredPublications = computed(() => {
  if (!selectedYear.value) return []
  return publicationsData.filter(item => parseInt(item.year, 10) === parseInt(selectedYear.value, 10))
})

const navigateToYear = (year) => {
  selectedYear.value = year
  currentView.value = 'detail'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const backToYears = () => {
  currentView.value = 'years'
  selectedYear.value = ''
}
</script>

<style scoped>
/* 采用原生高质感 CSS，不依赖任何第三方 UI 框架 */
.pub-container {
  min-height: 100vh;
  background-color: #f8fafc;
  /* 淡淡的学术风波点背景 */
  background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #334155;
  padding: 40px 20px;
}

.pub-wrap {
  max-width: 1100px;
  margin: 0 auto;
}

/* 头部样式 */
.pub-header {
  margin-bottom: 48px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 24px;
}

.pub-title {
  font-size: 42px;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  letter-spacing: -1px;
}

.pub-subtitle {
  font-size: 16px;
  color: #64748b;
  margin-top: 8px;
  font-weight: 500;
}

/* 年份网格布局 - 间距完全隔开 */
.year-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

/* 年份卡片美化 */
.year-card {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px 20px; /* 稍微上下加宽一点，使卡片更平衡 */
  cursor: pointer;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.year-card:hover {
  border-color: #2563eb;
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05);
}

.year-num {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;
  transition: color 0.3s;
}

.year-card:hover .year-num {
  color: #2563eb;
}

.arrow-icon {
  position: absolute;
  right: 16px;
  bottom: 16px;
  color: #94a3b8;
  font-size: 14px;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s;
}

.year-card:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
  color: #2563eb;
}

/* 详情页样式 */
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 20px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  color: #475569;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.back-btn:hover {
  color: #2563eb;
  border-color: #bfdbfe;
  background-color: #f8fafc;
}

.back-arrow {
  margin-right: 6px;
  transition: transform 0.2s;
}

.back-btn:hover .back-arrow {
  transform: translateX(-3px);
}

.detail-title {
  font-size: 26px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.year-highlight {
  color: #2563eb;
  background-color: #eff6ff;
  padding: 2px 10px;
  border-radius: 8px;
  border: 1px solid #dbeafe;
}

/* 论文列表容器 */
.paper-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 论文单项卡片 */
.paper-item {
  position: relative;
  background: #ffffff;
  padding: 24px 30px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: all 0.3s;
}

.paper-item:hover {
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
  border-color: #cbd5e1;
}

.tags-row {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}

.if-tag {
  background-color: #ecfdf5;
  color: #059669;
  border: 1px solid #a7f3d0;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
}

.journal-tag {
  background-color: #f8fafc;
  color: #021f62;
  border: 1px solid #e2e8f0;
  font-size: 11px;
  font-weight: 600;
  font-family: monospace;
  padding: 2px 8px;
  border-radius: 6px;
}

.paper-title {
  font-size: 18px;
  font-weight: 700;
  color: #021f62;
  line-height: 1.4;
  margin: 0 0 8px 0;
}

.paper-authors {
  font-size: 14px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.paper-footer {
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: flex-end;
}

.pub-site-link {
  font-size: 13px;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  background-color: #eff6ff;
  padding: 6px 14px;
  border-radius: 10px;
  border: 1px solid #dbeafe;
  transition: all 0.2s;
}

.pub-site-link:hover {
  background-color: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
}

.link-arrow {
  display: inline-block;
  transition: transform 0.2s;
}

.pub-site-link:hover .link-arrow {
  transform: translate(2px, -2px);
}

.indexed-tag {
  font-size: 12px;
  color: #94a3b8;
  font-style: italic;
}

/* 动效 */
.animate-fadeIn {
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
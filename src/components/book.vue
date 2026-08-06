<template>
  <div class="book-container">
    <div class="book-wrap">
      
      <header class="book-header">
        <h1 class="book-title">Books</h1>
        <p class="pub-subtitle">
          Published Books and Research Monographs by Prof. John W.Z. SHI
        </p>
      </header>

      <div class="book-layout">
        <aside class="timeline-nav">
          <div class="timeline-sticky">
            <p class="timeline-nav-title">Timeline</p>
            <div class="timeline-buttons">
              <button 
                @click="scrollToSection('all')" 
                :class="['timeline-btn', { active: activeSection === 'all' }]"
              >
                All Years
              </button>
              <button 
                v-for="year in uniqueYears" 
                :key="year"
                @click="scrollToSection(year)"
                :class="['timeline-btn', { active: activeSection === year }]"
              >
                {{ year }}
              </button>
            </div>
          </div>
        </aside>

        <main class="book-list-wrapper">
          <div class="book-list">
            <div 
              v-for="book in orderedBooks" 
              :key="book.id" 
              :id="'book-node-' + book.id"
              :data-year="book.year"
              class="book-card-with-img"
            >
              
              <div class="book-cover-wrap">
                <img 
                  :src="book.image" 
                  :alt="book.title"
                  class="book-cover-img"
                  @error="handleImageError"
                />
              </div>

              <div class="book-card-body">
                <div class="book-meta">
                  <span class="meta-year-badge">{{ book.year }}</span>
                  <span :class="['meta-publisher-badge', getPublisherClass(book.publisher)]">
                    🏢 {{ book.publisher }}
                  </span>
                  <span class="meta-type-badge">{{ book.type.toUpperCase() }}</span>
                </div>

                <h2 class="book-card-title">{{ book.title }}</h2>
                
                <div class="book-description">
                  <p>{{ book.description }}</p>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 导入刚刚整理干净的无重复数据文件
import { shiBooks } from './Monographs.js'

// 用来控制高亮的响应式变量
const activeSection = ref('all')

// 严格按照 JS 文件里的原始 id 顺序渲染（剔除了 0，从 1 到 17）
const orderedBooks = computed(() => {
  return [...shiBooks].sort((a, b) => a.id - b.id)
})

// 提取独一无二的年份（降序排列，供左侧时间轴使用）
const uniqueYears = computed(() => {
  const years = shiBooks.map(item => item.year)
  return [...new Set(years)].sort((a, b) => b - a)
})

// 漏填或加载失败时的图片兜底机制（保持原样）
const handleImageError = (e) => {
  e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="200" viewBox="0 0 140 200"><rect width="140" height="200" fill="%23f1f5f9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%2394a3b8">No Cover</text></svg>'
}

// 更加精准的滚动定位逻辑：解决一年有多本书时的锚点冲突
const scrollToSection = (year) => {
  activeSection.value = year
  if (year === 'all') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    // 在 DOM 中找到该年份的第一本书
    const element = document.querySelector(`[data-year="${year}"]`)
    if (element) {
      const offset = 40; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

// 出版社颜色标签分类样式（保持原样）
const getPublisherClass = (publisher) => {
  if (!publisher) return 'pub-default';
  if (publisher.includes('Springer')) return 'pub-springer';
  if (publisher.includes('Taylor') || publisher.includes('CRC')) return 'pub-taylor';
  if (publisher.includes('Science Press')) return 'pub-science';
  return 'pub-default';
}
</script>

<style scoped>
/* ===================================================
   下方样式完全保持你提供的精美代码不变，一字未改
   =================================================== */
.book-container {
  min-height: 100vh;
  background-color: #f8fafc;
  background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #334155;
  padding: 40px 20px;
}

.book-wrap {
  max-w: 1150px;
  margin: 0 auto;
}

.book-header {
  margin-bottom: 48px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 24px;
}

.book-badge {
  display: inline-block;
  padding: 6px 14px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 16px;
}

.book-title {
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

.book-layout {
  display: flex;
  gap: 40px;
  position: relative;
}

.timeline-nav {
  width: 180px;
  flex-shrink: 0;
}

.timeline-sticky {
  position: sticky;
  top: 40px;
  background: white;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.timeline-nav-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
}

.timeline-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.timeline-btn {
  background: none;
  border: none;
  text-align: left;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.timeline-btn:hover {
  background-color: #f1f5f9;
  color: #1e293b;
}

.timeline-btn.active {
  background-color: #2563eb;
  color: #ffffff;
}

.book-list-wrapper {
  flex-grow: 1;
}

.book-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.book-card-with-img {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 26px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  display: flex;
  gap: 28px;
  align-items: flex-start;
}

.book-card-with-img:hover {
  border-color: #cbd5e1;
  transform: translateY(-2px);
  box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.08);
}

.book-cover-wrap {
  width: 140px;          
  flex-shrink: 0;          
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.12); 
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
}

.book-cover-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.book-card-with-img:hover .book-cover-img {
  transform: scale(1.03);    
}

.book-card-body {
  flex-grow: 1;
}

.book-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 14px;
  align-items: center;
}

.meta-year-badge {
  background-color: #0f172a;
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 6px;
}

.meta-type-badge {
  background-color: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
}

.meta-publisher-badge {
  font-size: 12px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 6px;
  border: 1px solid transparent;
}

.pub-springer { background-color: #eef2ff; color: #4f46e5; border-color: #c7d2fe; }
.pub-taylor { background-color: #fff7ed; color: #c2410c; border-color: #ffedd5; }
.pub-science { background-color: #fef2f2; color: #b91c1c; border-color: #fee2e2; }
.pub-default { background-color: #f8fafc; color: #64748b; border-color: #e2e8f0; }

.book-card-title {
  font-size: 23px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
  margin: 0 0 14px 0;
}

.book-description {
  font-size: 14.5px;
  color: #475569;
  line-height: 1.65;
  background: #f8fafc;
  padding: 16px 20px;
  border-radius: 12px;
  border-left: 4px solid #cbd5e1;
}

.book-description p {
  margin: 0;
}

@media (max-width: 768px) {
  .book-layout { flex-direction: column; gap: 20px; }
  .timeline-nav { width: 100%; }
  .timeline-sticky { position: relative; top: 0; }
  .timeline-buttons { flex-direction: row; overflow-x: auto; padding-bottom: 8px; white-space: nowrap; }
  
  .book-card-with-img {
    flex-direction: column; 
    align-items: center;
    gap: 20px;
  }
  .book-cover-wrap { width: 150px; }
  .book-card-title { font-size: 20px; text-align: center; }
  .book-meta { justify-content: center; }
  .book-title { font-size: 32px; }
}
</style>

<template>
  <div class="team-page">
    <router-link to="/" class="back-btn">← Back to Home</router-link>

    <section class="section">
      <h2 class="section-title">Director</h2>
      
      <div class="director-container">
        
        <div class="left-column">
          <img :src="directorImg" alt="Director Photo" class="director-photo">
          
        </div>

        <div class="right-column">
          <div class="director-meta">
            <h3>{{ director.name }}</h3>
            <p class="title">{{ director.title }}</p>
          </div>

          <div class="info-block">
            <h4 class="block-title">Short Biography</h4>
            <p class="bio-text">{{ director.bio }}</p>
          </div>

          <div class="scholar-block">
            <a :href="director.scholarUrl" target="_blank" rel="noopener" class="scholar-link">
              <img :src=gg alt="Google Scholar" class="scholar-icon">
              <span>View Google Scholar Profile</span>
            </a>
          </div>

          <div class="info-block positions-block">
            <h4 class="block-title">Professional Positions</h4>
            <ul class="positions-list">
              <li v-for="(pos, index) in director.positions" :key="index">
                {{ pos }}
              </li>
            </ul>
          </div>

          <!-- Selected Awards and Honors 板块 -->
          <div class="info-block awards-block">
            <h4 class="block-title">Selected Awards and Honors</h4>
            <ul class="awards-list">
              <li v-for="(award, index) in director.awards" :key="index">
                {{ award }}
              </li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import gg from '../assets/googlesc.png'
// 假设当前 vue 文件在 src/components/，照片在 src/assets/focus/director.png
import directorImg from '../assets/director.jpg'
//  assets/Staff/ 目录下图片的函数
const getStaffAvatar = (name) => {
  return new URL(`../assets/Staff/${name}`, import.meta.url).href
}

// 1. 实验室负责人数据
const director = ref({
  name: 'Prof. John W.Z. SHI',
  title: 'DSci, AIEAS, FASS, FISPRS, FISUI, FCSGPC, FHKIS, DoFTRI, DoSCRI',
  avatarName: 'SHI Wen-Zhong.png', 
  scholarUrl: 'https://scholar.google.com/citations?user=3vQE5GYAAAAJ&hl=zh-CN&oi=ao',
  
  bio: 'Professor John W.Z. Shi is an Academician of the International Eurasian Academy of Sciences and a Fellow of the Academy of Social Sciences (UK), the Chinese Society for Geodesy, Photogrammetry and Cartography, ISPRS, and the Hong Kong Institute of Surveyors. His research covers urban informatics for smart cities, mobile mapping for autonomous driving and robotics, geographic information science and remote sensing, AI-based object extraction and change detection from satellite imagery, and intelligent analytics and quality control for spatial big data. He has published more than 350 research articles in Web of Science-indexed journals and 20 books. According to Stanford’s World’s Top 2% Scientists list, he ranks among the top 0.27% of cited researchers in Geological & Geomatics Engineering. He holds more than 60 granted patents.',
  
  positions: [
    'Director, PolyU‑Shenzhen Technology and Innovation Research Institute (Futian)',
    'Director, Otto Poon Charitable Foundation Smart Cities Research Institute',
    'Chair Professor in Geographic Information Science and Remote Sensing',
    'Director, PolyU‑Wuhan University Joint Research Laboratory on Spatial Information',
    'President, International Society for Urban Informatics',
    'Editor‑in‑Chief, International Journal of Urban Informatics'
  ],

  awards: [
    'In 2026, Professor Shi was elected a Fellow of ISPRS.',
    'In 2025, Professor Shi was elected a Fellow of the Chinese Society for Geodesy, Photogrammetry and Cartography.',
    'In 2025, Professor Shi received the Geographic Information Science and Technology Progress Award.',
    'In 2024, Professor Shi was named an Honorary Fellow of HKIES.',
    'In 2024, Professor Shi was recognised as a Leading Figure in Smart Cities.',
    'In 2023, Professor Shi received a Gold Medal at the 48th Geneva International Exhibition of Inventions for “Advanced Real-time Prediction and Early Warning System for the Spread of Emerging Pathogens.”',
    'In 2023, Professor Shi received a Gold Medal at the Asian International Innovation Invention Award for “Advanced Real-time Prediction and Early Warning System for the Spread of Emerging Pathogens.”',
    'In 2022, Professor Shi received the Smart Living Partnership Awards recognition for the “Outstanding One-stop Virus Decisions Support Platform.”',
    'In 2021, Professor Shi was elected a Fellow of the Academy of Social Sciences (UK).',
    'In 2021, Professor Shi received the CPGIS Distinguished Scholar Award.',
    'In 2021, Professor Shi received a Gold Medal at the Geneva Inventions Expo for “Smart City Platform: A Comprehensive System for Spatial Data Infrastructure.”',
    'In 2020, Professor Shi received the Founder’s Award from the International Spatial Accuracy Research Association.',
    'In 2019, Professor Shi was elected an Academician of the International Eurasian Academy of Sciences.',
    'In 2019, Professor Shi was elected a Fellow of the Hong Kong Institute of Surveyors.',
    'In 2018, Professor Shi was elected a Fellow of the Royal Institution of Chartered Surveyors (UK).',
    'In 2017, Professor Shi received the Grand Award for Science and Technology Progress in Surveying and Mapping from the Chinese Society for Surveying, Mapping and Geoinformation as the primary contributor.',
    'In 2012, Professor Shi received the Wang Zhizhuo Award from the International Society for Photogrammetry and Remote Sensing, an honour awarded once every four years.',
    'In 2011, Professor Shi was named a Distinguished Alumnus of Wuhan University.',
    'In 2008, Professor Shi received the Award of Innovative Publication Engineering from the General Administration of Press and Publication of China as the primary contributor.',
    'In 2007, Professor Shi received the Second-class National Natural Science Award from the State Council of China as the primary contributor, the highest award in natural science in China.',
    'In 2007, Professor Shi received the First-class Progress Award in Science and Technology from the Ministry of Education, China, as the third contributor.',
    'In 2006, Professor Shi received the Chang Jiang Scholars Chair Professor Award from the Ministry of Education, China.',
    'In 2006, Professor Shi received the First-place ESRI Award for Best Scientific Paper in GIS from the American Society of Photogrammetry and Remote Sensing.',
    'In 2006, Professor Shi received the Distinguished Young Scholar Fund (B) from the National Natural Science Foundation of China.',
    'In July 1998, Professor Shi received the President’s Award for Outstanding Performance/Achievement as one of three awardees selected from more than 1,000 faculty members.'
  ]
})
</script>

<style scoped>
/* 🎯 页面整体放大布局 */
.team-page { 
  padding: 40px 0; 
  max-width: 1200px; 
  margin: 0 auto;
  font-size: 1.2rem; 
  line-height: 1.8;
}

/* 返回按钮 */
.back-btn { 
  display: inline-block; 
  margin-bottom: 30px; 
  color: #0284c7; 
  text-decoration: none; 
  font-weight: bold; 
  font-size: 1.15rem;
  transition: color 0.2s;
}
.back-btn:hover {
  color: #0369a1;
  text-decoration: underline;
}

.section { padding: 10px 0; }

/* 标题样式 */
.section-title { 
  font-size: 2.6rem; 
  color: #0f172a; 
  border-left: 6px solid #3e80a1; 
  padding-left: 18px; 
  margin-bottom: 10px; 
}

/* 施老师双栏主卡片样式 */
.director-container {
  display: flex;
  gap: 50px;
  align-items: flex-start;
  background: #f8fafc;
  padding: 45px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.03);
  margin-bottom: 60px;
}

/* 左侧栏：固定宽度，承载照片 */
.left-column {
  width: 320px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 右侧栏：弹性自适应，承载名字、简介、链接、头衔、荣誉 */
.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* 老师照片 */
.director-photo {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
}

/* 姓名与职衔 */
.director-meta h3 {
  font-size: 2.1rem;
  margin: 0 0 8px 0;
  color: #0f172a;
}
.director-meta .title {
  font-weight: bold;
  color: #0284c7;
  font-size: 1.3rem;
  margin: 0;
}

/* 独立内容块样式 */
.info-block .block-title {
  font-size: 1.45rem;
  color: #1e3a8a;
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 6px;
}

.bio-text {
  color: #334155;
  text-align: justify;
  margin: 0;
  font-size: 1.15rem;
}

/* Google Scholar 链接块 */
.scholar-block {
  margin-top: -5px;
}
.scholar-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #0284c7;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.02);
}
.scholar-link:hover {
  background-color: #f1f5f9;
  border-color: #0284c7;
  text-decoration: underline;
}
.scholar-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

/* 任职头衔和荣誉列表 */
.positions-list, .awards-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
/* 任职头衔列表 */
.positions-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  color: #334155;
  font-size: 1.1rem;
}
.positions-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0284c7;
  font-weight: bold;
  font-size: 1.3rem;
  top: -2px;
}

/* 🏆 荣誉奖项列表专属样式 */
.awards-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  color: #334155;
  font-size: 1.1rem;
}
.awards-list li::before {
  content: "★";
  position: absolute;
  left: 0;
  color: #d97706; /* 用一个金色/琥珀色的小星星突出荣誉 */
  font-size: 0.9rem;
  top: 1px;
}

/* 响应式屏幕断点适配 */
@media (max-width: 900px) {
  .director-container {
    flex-direction: column;
    padding: 30px;
    gap: 35px;
  }
  .left-column {
    width: 100%;
    align-items: center;
  }
  .director-photo {
    max-width: 280px; 
  }
}
</style>

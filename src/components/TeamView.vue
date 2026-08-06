<template>
  <div class="team-page">
    <router-link to="/" class="back-btn">← Back to Home</router-link>

    <section class="section">
      <h2 class="section-title">Director</h2>
      
      <div class="director-container">
        
        <div class="left-column">
          <img :src="directorImg" alt="Director Photo" class="director-photo">
          
          <div class="info-block">
            <h4 class="block-title">Education</h4>
            <ul class="education-list">
              <li v-for="(edu, index) in director.education" :key="index">
                <strong>{{ edu.degree }}</strong><br>
                <span class="inst">{{ edu.institution }}</span>, <span class="year">{{ edu.year }}</span>
              </li>
            </ul>
          </div>
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
// 动态解析 assets/Staff/ 目录下图片的函数
const getStaffAvatar = (name) => {
  return new URL(`../assets/Staff/${name}`, import.meta.url).href
}

// 1. 实验室负责人数据
const director = ref({
  name: 'Prof. John W.Z. SHI',
  title: 'Chair Professor / Lab Director',
  avatarName: 'SHI Wen-Zhong.png', 
  scholarUrl: 'https://scholar.google.com/citations?user=3vQE5GYAAAAJ&hl=zh-CN&oi=ao',
  
  bio: 'Professor John Shi is Academician of International Eurasian Academy of Sciences and Fellow of Academy of Social Sciences (UK). He is a Fellow of the Chinese Society for Geodesy, Photogrammetry and Cartography, Fellow of isprs and Hong Kong Institute of Surveyors.is research covers urban informatics for smart cities, mobile mapping for autonomous driving and robotics, geographic information science and remote sensing, AI-based object extraction and change detection from satellite imagery, intelligent analytics and quality control for spatial big data. He has published over 350 research articles in journals indexed by Web of Science and 20 books. He is the world’s top 0.27% cited researcher in Geological & Geomatics Engineering according to Stanford World’s Top 2% Scientists. He has over 60 patents granted.',
  
  education: [
    { degree: 'B.Eng. in Aerial Photogrammetry', institution: 'Wuhan Technical University of Surveying and Mapping (now Wuhan University)', year: '1985' },
    { degree: 'M.Eng. in Aerial Photogrammetry', institution: 'Wuhan Technical University of Surveying and Mapping (now Wuhan University)', year: '1988' },
    { degree: 'Ph.D. in Geospatial Science', institution: 'University of Osnabrück (Vechta), Germany', year: '1994' }
  ],
  
  positions: [
    'Director, PolyU‑Shenzhen Technology and Innovation Research Institute (Futian)',
    'Director, Otto Poon Charitable Foundation Smart Cities Research Institute',
    'Chair Professor in Geographic Information Science and Remote Sensing',
    'Director, PolyU‑Wuhan University Joint Research Laboratory on Spatial Information',
    'President, International Society for Urban Informatics',
    'Editor‑in‑Chief, International Journal of Urban Informatics'
  ],

  awards: [
    '2026 Professor Shi Wenzhong from The Hong Kong Polytechnic University has been elected as an ISPRS Fellow ',
    '2025 Fellow of the Chinese Society for Geodesy, Photogrammetry and Cartography',
    '2025 Geographic Information Science and Technology Progress Award',
    '2024 HKIES Honorary Fellow',
    '2024 Leading Figure in Smart Cities',
    '2023 Gold Medal in 48th Geneva International Exhibition of Inventions, “Advanced Real-time Prediction and Early Warning System for the Spread of Emerging Pathogens”',
    '2023 Gold Medal in Asian International Innovation Invention Award, “Advanced Real-time Prediction and Early Warning System for the Spread of Emerging Pathogens”',
    '2022 Smart Living Partnership Awards 2022, “Outstanding One-stop Virus Decisions Support Platform”',
    '2021 Fellow, Academy of Social Sciences (UK)',
    '2021 CPGIS Distinguished Scholar Award',
    '2021 Gold Medal in Geneva Inventions Expo, “Smart City Platform: A Comprehensive System for Spatial Data Infrastructure”',
    '2020 Founder’s Award, International Spatial Accuracy Research Association',
    '2019 Academician, International Eurasian Academy of Sciences',
    '2019 Fellow, Hong Kong Institute of Surveyors',
    '2018 Fellow, Royal Institution of Chartered Surveyors (UK)',
    '2017 Science and Technology Progress Award in Surveying and Mapping (Grand Award), by Chinese Society for Surveying, Mapping and Geoinformation (as primary contributor)',
    '2012 The Wang Zhizhuo Award, by International Society for Photogrammetry and Remote Sensing (one awardee every four years)',
    '2011 Distinguished Alumna of Wuhan University',
    '2008 Award of Innovative Publication Engineering, by General Administration of Press and Publication of China (as primary contributor)',
    '2007 National Natural Science Award by the State Council of China (Second-class, as the primary contributor, the highest award in natural science in China)',
    '2007 Progress Award in Science and Technology by Ministry of Education, China (First-class, as the third contributor)',
    '2006 Award of Chang Jiang Scholars, Chair Professor, by Ministry of Education, China',
    '2006 ESRI Award for Best Scientific Paper in GIS (First place), by American Society of Photogrammetry and Remote Sensing',
    '2006 Distinguished Young Scholar Fund (B), by National Natural Science Foundation, China',
    '07/98 The President’s Award for Outstanding Performance/Achievement (one of the three awardees selected from over 1000 faculty members)'
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

/* 左侧栏：固定宽度，承载照片和教育经历 */
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

/* 教育背景列表 */
.education-list, .positions-list, .awards-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.education-list li {
  margin-bottom: 15px;
  color: #475569;
  font-size: 1.1rem;
}
.education-list li strong {
  color: #0f172a;
}
.education-list .inst {
  font-size: 1.05rem;
}
.education-list .year {
  color: #64748b;
  font-weight: 500;
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
  .left-column .info-block {
    width: 100%;
  }
}
</style>
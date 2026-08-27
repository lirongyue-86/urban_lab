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
  
  bio: 'Professor John W.Z. Shi is an Academician of the International Eurasian Academy of Sciences and a Fellow of the Academy of Social Sciences (UK), the Chinese Society for Geodesy, Photogrammetry and Cartography, International Society for Photogrammetry and Remote Sensing, and the Hong Kong Institute of Surveyors. His research covers urban informatics for smart cities,geographic information science and remote sensing, mobile mapping for autonomous driving and robotics,  AI-based object recognition and change detection from satellite imagery, and intelligent analytics modeling and quality control for spatial big data. He has published more than 350 research articles in Web of Science-indexed journals and 20 books. According to Stanford’s World’s Top 2% Scientists list, he ranks among the top 0.27% of cited researchers in Geological & Geomatics Engineering. He holds more than 70 granted patents.',
  
  positions: [
    'Director, PolyU‑Shenzhen Technology and Innovation Research Institute (Futian)',
    'Director, Otto Poon Charitable Foundation Smart Cities Research Institute',
    'Chair Professor in Geographic Information Science and Remote Sensing',
    'Director, PolyU‑Wuhan University Joint Research Laboratory on Spatial Information',
    'President, International Society for Urban Informatics',
    'Editor‑in‑Chief, International Journal of Urban Informatics'
  ],

  awards: [
    '2026 — Fellow of International Society for Photogrammetry and Remote Sensing.',
    '2025 — Fellow of the Chinese Society for Geodesy, Photogrammetry and Cartography.',
    '2025 — Geographic Information Science and Technology Progress Award (Grand Prize), awarded by the China Geographic Information Industry Association.',
    '2025 — Springer Nature Editorial Contribution Award, awarded by Springer Nature for service as Editor-in-Chief of Urban Informatics.',
    '2024 — Honorary Fellow of HKIES.',
    '2024 — Smart City Pioneer List Leading Figure, awarded by the China Smart City Conference.',
    '2024 — PolyU Top Patent Filing Award 2023, awarded by The Hong Kong Polytechnic University for the highest number of patents granted during 2019–2023.',
    '2023 — Outstanding Invention Award in Smart City Technologies, awarded by the Hong Kong Federation of Innovative Technology and Manufacturing Industries.',
    '2023 — Science and Technology Progress Award in Surveying and Mapping (First Prize) for “Technology of Detecting Typical Regional Changes in Beijing and Its Application on Suspected Illegal Constructions”, awarded by the Beijing Society for Surveying and Mapping.',
    '2023 — Gold Medal for mobile mapping technologies at the Asia International Innovation Invention Exhibition, awarded by the Exhibition.',
    '2023 — Gold Medal for “Advanced Real-time Prediction and Early Warning System for the Spread of Emerging Pathogens”, awarded by the 48th Geneva International Exhibition of Inventions.',
    '2023 — Gold Medal at the Smart City Technology Innovation Awards, awarded by the International Society for Urban Informatics.',
    '2023 — ETNet Smart Living Partnership Award 2022 for “A Decision-Support Platform for COVID-19 Pandemic Control”, awarded by ETNet.',
    '2022 — Faculty Award for Outstanding Achievement in Knowledge Transfer 2021 – Society, awarded by the Faculty of Construction and Environment, The Hong Kong Polytechnic University.',
    '2021 — Fellow of the Academy of Social Sciences (UK).',
    '2021 — Research Team of the Year, awarded by the Royal Institution of Chartered Surveyors Award 2021 (Hong Kong).',
    '2021 — Distinguished Scholar Award, awarded by Chinese Professionals in Geographic Information Systems (CPGIS).',
    '2021 — Smart 50 Award for “A Comprehensive Spatial Analysis and Onset Risk Prediction Platform for COVID-19 Pandemic in Hong Kong”, awarded by Smart 50 Awards.',
    '2021 — Gold Medal for “Smart City Platform: A Comprehensive System for Spatial Data Infrastructure”, awarded by the Geneva Inventions Expo.',
    '2020 — Founder’s Award, awarded by the International Spatial Accuracy Research Association.',
    '2019 — Academician of the International Eurasian Academy of Sciences.',
    '2019 — Fellow of the Hong Kong Institute of Surveyors.',
    '2019 — Hunan Provincial Science and Technology Progress Award (Second Award) for reliable integrated space-air-ground monitoring of mineral resources conditions, awarded by the Hunan Provincial Science and Technology Department.',
    '2018 — Fellow of the Royal Institution of Chartered Surveyors (UK).',
    '2018 — Science and Technology Progress Award in Surveying and Mapping (First Award) for authenticity evaluation standards and technologies for quantitative remote sensing products, awarded by the Chinese Society for Surveying, Mapping and Geoinformation.',
    '2018 — Beijing Municipal Science and Technology Award (Third Award) for urban national geographical condition monitoring, awarded by the People’s Government of Beijing Municipality.',
    '2018 — Dean’s Award for Outstanding Achievement in Research Funding, awarded by The Hong Kong Polytechnic University.',
    '2017 — China Science and Technology Progress Award in Surveying and Mapping (Grand Award) for reliable national geographic survey and dynamic monitoring, awarded by the Chinese Society for Surveying, Mapping and Geoinformation.',
    '2014 — “Science and Technology Leader in Surveying and Mapping”, awarded by the National Administration of Surveying, Mapping and Geoinformation of China.',
    '2014 — Distinguished Alumnus of the School of Remote Sensing Information Engineering, awarded by Wuhan University.',
    '2012 — Wang Zhizhuo Award, awarded by the International Society for Photogrammetry and Remote Sensing.',
    '2011 — Distinguished Alumnus, awarded by Wuhan University.',
    '2008 — Award of Innovative Publication Engineering for the book Three-Dimensional Spatial Information Systems: Models and Algorithms, awarded by the General Administration of Press and Publication of China.',
    '2007/08 — Dean’s Award for Outstanding Performance/Achievement in Research and Scholarly Activities, awarded by the Faculty of Construction and Land Use, The Hong Kong Polytechnic University.',
    '2007/08 — President’s Award for Outstanding Performance/Achievement in Research and Scholarly Activities, awarded by The Hong Kong Polytechnic University.',
    '2007 — State Natural Science Award (Second Class) for Principles of Modeling Uncertainties in Spatial Data and Analysis, awarded by the State Council of the People’s Republic of China.',
    '2007 — Progress Award in Science and Technology (First Class) for Integrated Modeling of Complex 3D Spatial Objects, awarded by the Ministry of Education, China.',
    '2006 — ESRI Award for Best Scientific Paper in GIS, awarded by the American Society for Photogrammetry and Remote Sensing.',
    '2006 — Chang Jiang Scholars Chair Professor Award, awarded by the Ministry of Education, China.',
    '2006 — Distinguished Young Scholar Fund (Category B), awarded by the National Natural Science Foundation of China.',
    '2006 — International Award (Gold Plaque) for Theory and Methods on Modeling Uncertainties in Spatial Data, awarded by PTeC, The Hong Kong Polytechnic University.',
    '2006 — Most Valuable Consultancy Project Award for Structural Health Monitoring and Safety Evaluation of Long-Span Bridges, awarded by The Hong Kong Polytechnic University and PolyU Technology & Consultancy Co. Ltd.',
    '2006 — Lilac-Bauhinia Medal (Silver), awarded by the Heilongjiang Provincial Government.',
    '2006 — Distinguished Alumnus, awarded by the China Universities Alumni (HK) Association.',
    '2005/06 — Award of Overseas Placements for Young Professors, awarded by The Hong Kong Polytechnic University.',
    '2005 — Science and Technology Progress Award in Surveying and Mapping (First Class) for theories and methods for modeling uncertainties in spatial data and spatial analyses, awarded by the State Bureau of Surveying and Mapping and the Chinese Society for Geodesy, Photogrammetry and Cartography.',
    '2001 — Outstanding Professional Services and Innovation Award: Highest Consultancy Growth Award, awarded by The Hong Kong Polytechnic University.',
    '1999/2000 — President’s Award for Outstanding Performance/Achievement in Research and Scholarly Activity, awarded by The Hong Kong Polytechnic University.',
    'July 1991–June 1994 — Scholarship for PhD Candidates, awarded by ITC, the Netherlands.',
    'December 1990 — Distinguished Scientific Research Award, awarded by the Guangdong Research Institute of Lands and Surveys.',
    'July 1988 — Science and Technology Progress Award in Surveying and Mapping for Integration of GIS and Remote Sensing for Urban Planning and Management, awarded in China.',
    'May 1988 — Outstanding MSc Dissertation Award, awarded by Wuhan Technical University of Surveying and Mapping.',
    'July 1985 — Research Achievement Award for University Students, awarded by Hubei Province.',
    'July 1985 — Outstanding Bachelor Graduate Award, awarded by Wuhan Technical University of Surveying and Mapping.',
    '1979 — Outstanding Student Award, awarded by Shanxi Province.'
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

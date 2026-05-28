<template>
  <div class="team-page">
    <router-link to="/" class="back-btn">← Back to Home</router-link>

    <section class="section">
      <h2 class="section-title">Our Team</h2>
      
      <h3 class="sub-title">Director</h3>
      <div class="director-container">
        
        <div class="left-column">
          <img :src="getStaffAvatar(director.avatarName)" alt="Director Photo" class="director-photo">
          
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
              <img :src="getStaffAvatar('googlescholar.png')" alt="Google Scholar" class="scholar-icon">
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
        </div>
      </div>

      <h3 class="sub-title">Ph.D. Students</h3>
      <div class="student-grid">
        <div v-for="student in students" :key="student.name" class="student-card">
          <img :src="getStaffAvatar(student.avatarName)" alt="Student Avatar" class="avatar-small">
          <h4>{{ student.name }}</h4>
          <p class="role">{{ student.role }}</p>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 动态解析 assets/Staff/ 目录下图片的函数
const getStaffAvatar = (name) => {
  return new URL(`../assets/Staff/${name}`, import.meta.url).href
}

// 1. 实验室负责人数据（已更新为施老师数据）
const director = ref({
  name: 'Prof. John W.Z. SHI',
  title: 'Chair Professor / Lab Director',
  avatarName: 'SHI Wen-Zhong.png', 
  scholarUrl: 'https://scholar.google.com/citations?user=3vQE5GYAAAAJ&hl=zh-CN&oi=ao',
  
  bio: 'John W.Z. Shi is an Academician of the International Eurasian Academy of Sciences and Fellow of the Academy of Social Sciences (UK). His research focuses on urban informatics, smart cities, Geo‑AI, remote sensing, spatial big data quality control, mobile mapping and 3D modelling. He has published over 300 SCI papers, holds more than 60 patents, and has received the State Natural Science Award and multiple Gold Medals at the Geneva International Exhibition of Inventions.',
  
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
  ]
})

// 2. 博士生数据（完整保留您的 23 位同学数据）
const students = ref([
  { name: 'He LIU', role: 'Ph.D. Student', avatarName: 'Liuhe.png' },
  { name: 'Yijia LIU', role: 'Ph.D. Student', avatarName: 'Liuyijia.png' },
  { name: 'Shuyu ZHANG', role: 'Ph.D. Student', avatarName: 'Zhangshuyu.png' },
  { name: 'Jiahui ZOU', role: 'Ph.D. Student', avatarName: 'Zoujiahui.png' },
  { name: 'Yue XIA', role: 'Ph.D. Student', avatarName: 'Xiayue.png' },
  { name: 'Fan SHI', role: 'Ph.D. Student', avatarName: 'Shifan.png' },
  { name: 'Wenguang PENG', role: 'Ph.D. Student', avatarName: 'Pengguangwen.png' },
  { name: 'Kexin TANG', role: 'Ph.D. Student', avatarName: 'Tangkexin.png' },
  { name: 'Qiru ZHONG', role: 'Ph.D. Student', avatarName: 'Zhongqiru.png' },
  { name: 'Huilin ZHAO', role: 'Ph.D. Student', avatarName: 'Zhaohuilin.png' },
  { name: 'Chenrui BAI', role: 'Ph.D. Student', avatarName: 'Baicherui.png' },
  { name: 'Zeyu PU', role: 'Ph.D. Student', avatarName: 'Puzeyu.png' },
  { name: 'Yitao WEI', role: 'Ph.D. Student', avatarName: 'Weiyitao.png' },
  { name: 'Anqi DAI', role: 'Ph.D. Student', avatarName: 'Daianqi.png' },
  { name: 'Mingyan NIE', role: 'Ph.D. Student', avatarName: 'Niemingyan.png' },
  { name: 'Fanxin ZENG', role: 'Ph.D. Student', avatarName: 'Zengfanxin.png' },
  { name: 'Ge MU', role: 'Ph.D. Student', avatarName: 'Muge.png' },
  { name: 'Shengyu LU', role: 'Ph.D. Student', avatarName: 'Lushengyu.png' },
  { name: 'Linya PENG', role: 'Ph.D. Student', avatarName: 'Penglinya.png' },
  { name: 'Jing YANG', role: 'Ph.D. Student', avatarName: 'Yangjing.png' },
  { name: 'Daping YANG', role: 'Ph.D. Student', avatarName: 'Yangdaping.png' },
  { name: 'Yuehuan LI', role: 'Ph.D. Student', avatarName: 'Liyuehuan.png' },
  { name: 'Jiaxin LIU', role: 'Ph.D. Student', avatarName: 'Liujiaxin.png' }
])
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

.sub-title { 
  font-size: 1.7rem; 
  color: #1e3a8a; 
  margin-top: 40px; 
  margin-bottom: 25px; 
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   施老师双栏主卡片样式
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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

/* 右侧栏：弹性自适应，承载名字、简介、链接、头衔 */
.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* 老师照片：保留原始尺寸比例，去除圆形强制裁剪 */
.director-photo {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px; /* 轻微圆角使之更现代温和 */
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
.education-list, .positions-list {
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


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. 学生网格与卡片样式（保持原样）
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
.student-grid { 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  gap: 35px; 
}

.student-card { 
  border: 1px solid #e2e8f0; 
  padding: 35px 25px; 
  border-radius: 14px; 
  text-align: center; 
  transition: all 0.3s ease; 
  background: #ffffff; 
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); 
}

.student-card:hover { 
  transform: translateY(-5px); 
  box-shadow: 0 15px 25px -5px rgb(0 0 0 / 0.08); 
  border-color: #0284c7; 
}

.avatar-small { 
  width: 110px; 
  height: 110px; 
  border-radius: 50%; 
  object-fit: cover; 
  margin-bottom: 20px; 
  border: 3px solid #e2e8f0; 
}

.student-card h4 { 
  font-size: 1.4rem; 
  margin: 0 0 8px 0; 
  color: #0f172a; 
}

.student-card .role { 
  font-size: 1.05rem; 
  color: #64748b; 
  margin-bottom: 0; 
}


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. 响应式屏幕断点适配
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@media (max-width: 1024px) {
  .student-grid {
    grid-template-columns: repeat(3, 1fr); 
  }
}

@media (max-width: 900px) {
  /* 导师双栏卡片在中小屏幕下转为垂直单栏流 */
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

@media (max-width: 768px) { 
  .student-grid {
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .student-grid {
    grid-template-columns: 1fr; 
  }
}
</style>


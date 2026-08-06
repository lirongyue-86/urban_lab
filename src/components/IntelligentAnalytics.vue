<template>
  <div class="research-detail-container">
    <div class="bg-grid"></div>

    <div class="content-wrapper">
      <router-link to="/" class="back-btn">
        ← Back to Home
      </router-link>

      <header class="header-section">
        <h1 class="title">Intelligent Analytics and Quality Control for Spatial Big Data</h1>
        <p class="subtitle">Pioneering Uncertainty Principles, AI Quality Inspection, and Spatial Public Health Analytics</p>
      </header>

      <!-- 1. 专著与理论体系 -->
      <section class="card-section">
        <h2>1. Foundational Monograph: Principles of Uncertainty</h2>
        <div class="book-grid">
          <div class="text-content">
            <p>Authored as the first comprehensive book on the uncertainty principle in spatial data and analysis, outlining systematic frameworks from data modeling to web service-based quality information.</p>
            <ul class="chapter-list">
              <li><strong>Section I-II:</strong> Overview, Mathematical Foundations, & Modeling Positional/Attribute Uncertainties</li>
              <li><strong>Section III-IV:</strong> Uncertain Topological Relationships & Spatial Analysis Uncertainty (Buffer, Overlay, Line Simplification)</li>
              <li><strong>Section V-VII:</strong> Quality Control for Object/Field-Based Data, DEM Interpolation, Metadata & Web Services</li>
            </ul>
          </div>
          <div class="image-box">
            <img :src="imgBook" alt="Principles of Modeling Uncertainties in Spatial Data and Spatial Analyses" />
            <span class="img-caption">Book Cover</span>
          </div>
        </div>
      </section>

      <!-- 2. 顶级奖项与荣誉 -->
      <section class="card-section">
        <h2>2. Prestigious Awards & Recognition</h2>
        <div class="awards-grid">
          <div class="award-card">
            <img :src="imgAw1" alt="State Natural Science Award" />
            <h3>State Natural Science Award (2nd Class)</h3>
            <p>The top award on natural science in China for "Uncertainty Principles in Geo-spatial Data and Spatial Analysis".</p>
          </div>
          <div class="award-card">
            <img :src="imgAw2" alt="ISARA Founder's Award" />
            <h3>ISARA Founder's Award (2020)</h3>
            <p>Awarded to Prof. Wenzhong Shi for substantial and lasting contributions to the foundations of spatial accuracy.</p>
          </div>
        </div>
      </section>

      <!-- 3. 标准规范与官方认证 -->
      <section class="card-section">
        <h2>3. Spatial Data Quality Standards & Applications</h2>
        <div class="standards-grid">
          <div class="standard-item">
            <span class="tag">International</span>
            <p>ASPRS Manual of GIS: “Spatial data quality and uncertainty”.</p>
          </div>
          <div class="standard-item">
            <span class="tag">Mainland China</span>
            <p>CAGIS group standard & China industrial standard for global geographic information resources quality inspection.</p>
          </div>
          <div class="standard-item">
            <span class="tag">HK, Macao & GBA</span>
            <p>Applied in Lands Department (HK), Cartography and Cadastre Bureau (Macao), and GBA standard initiatives (e.g., Land Use Data Fusion).</p>
          </div>
        </div>
        <div class="cert-gallery">
          <img :src="imgSt1" alt="Standard Document" />
          <img :src="imgSt2" alt="Macao Certification" />
          <img :src="imgSt3" alt="Lands Department HK" />
        </div>
      </section>

      <!-- 4. 软件系统创新：QC Spatial - 3Dx -->
      <section class="card-section">
        <h2>4. QC Spatial - 3Dx Software Innovation</h2>
        <div class="software-showcase">
          <div class="software-info">
            <p>
              Integrates <strong>AI algorithm modules</strong> to provide automatic inspection, human-computer interaction, and batch inspection for massive 3D spatial data. It efficiently outputs comprehensive quality reports to assist inspectors.
            </p>
          </div>
          <div class="software-image">
            <img :src="imgSoftware" alt="QC Spatial - 3Dx Software Interface" />
            <span class="img-caption">QC Spatial - 3Dx 3D Data Quality Checking Software</span>
          </div>
        </div>
      </section>

      <!-- 5. 疫情防控与空间大数据预测应用 -->
      <section class="card-section highlight-card">
        <h2>5. Spatial Big Data Application: COVID-19 Risk Prediction Platform</h2>
        
        <div class="breakthrough-banner">
          <div class="stat-badge">
            <span class="number">4-5</span>
            <span class="unit">Days Ahead</span>
          </div>
          <p class="breakthrough-desc">
            The advanced predictive model can <strong>advance the prediction of the development trend of the epidemic 4 to 5 days</strong> in advance, providing crucial early warning windows for public health interventions and resource allocation.
          </p>
        </div>

        <div class="achievements-subgrid">
          <div class="achievement-card">
            <h3>Hong Kong & GBA Implementation</h3>
            <p>Provides high-resolution district-level risk tracking (Kowloon, New Territories, Hong Kong Island) to support localized anti-epidemic measures.</p>
          </div>
          <div class="achievement-card">
            <h3>National Smart Public Health</h3>
            <p>Extends spatial data intelligence to national epidemic surveillance frameworks, integrating multi-temporal risk assessment from 0 to 1.</p>
          </div>
        </div>

        <div class="platform-showcase-box">
          <img :src="imgPan" alt="COVID-19 Symptom Onset Risk Prediction Platform" />
          <span class="img-caption">COVID-19 Symptom Onset Risk Prediction Platform Interface</span>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
// 使用你原本正确的资源文件名进行导入
import imgBook from '../assets/focus/in_book.png'
import imgAw1 from '../assets/focus/in_aw1.png'
import imgAw2 from '../assets/focus/in_aw2.png'
import imgSt1 from '../assets/focus/in_st1.png'
import imgSt2 from '../assets/focus/in_st2.png'
import imgSt3 from '../assets/focus/in_st3.png'
import imgSoftware from '../assets/focus/in.png'
import imgPan from '../assets/focus/pan.jpg'
</script>

<style scoped>
.research-detail-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #0b0f19;
  color: #f8fafc;
  padding: 60px 20px 100px;
  box-sizing: border-box;
}

.bg-grid {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  pointer-events: none;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.back-btn {
  display: inline-block;
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
}

.header-section {
  text-align: center;
  margin-bottom: 60px;
}
.title {
  font-size: 2.3rem;
  color: #ffffff;
  margin-bottom: 15px;
}
.subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
}

.card-section {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
}
.card-section h2 {
  font-size: 1.5rem;
  color: #38bdf8;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(56, 189, 248, 0.1);
  padding-bottom: 10px;
}

.book-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: center;
}
.chapter-list {
  list-style: disc;
  padding-left: 20px;
  color: #cbd5e1;
  margin-top: 15px;
  line-height: 1.6;
}
.image-box img, .award-card img, .cert-gallery img, .software-image img, .platform-showcase-box img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.img-caption {
  display: block;
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 8px;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.award-card {
  background: rgba(30, 41, 59, 0.5);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.award-card h3 {
  font-size: 1.1rem;
  color: #fff;
  margin: 15px 0 10px;
}
.award-card p {
  font-size: 0.9rem;
  color: #94a3b8;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}
.standard-item {
  background: rgba(30, 41, 59, 0.5);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #38bdf8;
}
.tag {
  display: inline-block;
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 10px;
}
.cert-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.software-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}
.software-info p {
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 1.1rem;
}

.highlight-card {
  border-color: rgba(56, 189, 248, 0.4);
}
.breakthrough-banner {
  display: flex;
  align-items: center;
  gap: 25px;
  background: rgba(30, 41, 59, 0.6);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.stat-badge {
  background: rgba(56, 189, 248, 0.1);
  border: 2px solid #38bdf8;
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
  flex-shrink: 0;
}
.stat-badge .number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #38bdf8;
  line-height: 1;
}
.stat-badge .unit {
  font-size: 0.8rem;
  color: #cbd5e1;
}
.breakthrough-desc {
  font-size: 1.05rem;
  color: #e2e8f0;
  line-height: 1.6;
}
.achievements-subgrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}
.achievement-card {
  background: rgba(30, 41, 59, 0.4);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #38bdf8;
}
.achievement-card h3 {
  font-size: 1.05rem;
  color: #fff;
  margin-bottom: 8px;
}
.achievement-card p {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;
}
.platform-showcase-box {
  text-align: center;
}
</style>
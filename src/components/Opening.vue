<template>
  <div class="join-container">
    <!-- 头部横幅与愿景 -->
    <div class="join-header">
      <h2>Join Us</h2>
      <p class="research-directions">
        <strong>Research directions:</strong> urban informatics and smart cities, geospatial artificial intelligence, mobile mapping and 3D spatial data, remote sensing and change detection, and spatiotemporal data analytics.
      </p>
      <p class="contact-email">
        For enquiries, please contact Professor John W.Z. Shi at
        <a href="mailto:john.wz.shi@polyu.edu.hk">john.wz.shi@polyu.edu.hk</a>.
      </p>
      <div class="header-line"></div>
    </div>

    <!-- 职位列表区域 -->
    <div class="positions-list">
      
      <!-- 1. Research Assistant Professor -->
      <div class="position-card primary-card">
        <div class="position-title-row">
          <span class="position-number">01</span>
          <h3>Research Assistant Professor</h3>
        </div>
        <p class="position-desc">
          We invite applications for the position of Research Assistant Professor. Candidates should have a strong record of high-impact publications and the potential to secure competitive external research grants.
        </p>
        <div class="action-row">
        </div>
      </div>

      <!-- 2. Postdoc Positions -->
      <div class="position-card">
        <div class="position-title-row">
          <span class="position-number">02</span>
          <h3>Postdoctoral Fellows</h3>
        </div>
        <p class="position-desc">
          We are looking for outstanding PhD graduates to conduct cutting-edge research in our group. Strong applicants are highly encouraged to apply through prestigious fellowship schemes:
        </p>
        <div class="link-group">
          <a href="https://www.ugc.edu.hk/eng/rgc/funding_opport/pdfs/" target="_blank" rel="noopener noreferrer" class="scheme-link">
            <span class="link-icon"></span> RGC Postdoctoral Fellowship Scheme
          </a>
          <a href="http://www.hkscholars.org/" target="_blank" rel="noopener noreferrer" class="scheme-link">
            <span class="link-icon"></span> Hong Kong Scholars Program
          </a>
        </div>
      </div>

      <!-- 3. PhD Scholarship -->
      <div class="position-card">
        <div class="position-title-row">
          <span class="position-number">03</span>
          <h3>PhD Students</h3>
        </div>
        <p class="position-desc">
          Several PhD positions are available for students with strong backgrounds in related disciplines. Excellent candidates will be nominated for highly competitive fellowships:
        </p>
        <div class="link-group">
          <a href="https://www.ugc.edu.hk/eng/rgc/funding_opport/hkpfs/" target="_blank" rel="noopener noreferrer" class="scheme-link prestige">
            <span class="link-icon"></span> Hong Kong PhD Fellowship Scheme (HKPFS)
          </a>
          <a href="https://www.polyu.edu.hk/gs/" target="_blank" rel="noopener noreferrer" class="scheme-link">
            <span class="link-icon"></span> PolyU Presidential PhD Fellowship Scheme
          </a>
          <a href="https://www.polyu.edu.hk/gs/" target="_blank" rel="noopener noreferrer" class="scheme-link">
            <span class="link-icon"></span> PolyU Research Postgraduate Scholarship (PRPgS)
          </a>
        </div>
      </div>

      <!-- 4. Master Program -->
      <div class="position-card program-card">
        <div class="position-title-row">
          <span class="position-number">04</span>
          <h3>Master's Students</h3>
        </div>
        <p class="position-desc">
          We welcome motivated students who wish to pursue a master's degree by research or coursework. Explore our curriculum and career pathways.
        </p>
        <div class="action-row">
          <a href="https://www.polyu.edu.hk/study/" target="_blank" rel="noopener noreferrer" class="details-link">
            View Program Details <span class="arrow">→</span>
          </a>
        </div>
      </div>

      <!-- 5. Bachelor Program -->
      <div class="position-card program-card">
        <div class="position-title-row">
          <span class="position-number">05</span>
          <h3>Undergraduate Students & Internships</h3>
        </div>
        <p class="position-desc">
          We offer research internship opportunities and final year projects (FYP) for high-caliber undergraduate students. Get hands-on research experience in a world-class laboratory environment.
        </p>
        <div class="action-row">
          <a href="https://www.polyu.edu.hk/study/" target="_blank" rel="noopener noreferrer" class="details-link">
            Explore Opportunities <span class="arrow">→</span>
          </a>
        </div>
      </div>

    </div>

  
  </div>
</template>

<script>
export default {
  name: 'OpenPositions'
}
</script>

<style scoped>
/* 容器及全局配置 */
.join-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #2d3748;
  line-height: 1.6;
}

/* 头部样式 */
.join-header {
  text-align: center;
  margin-bottom: 50px;
}

.join-header h2 {
  font-size: 32px;
  color: #1a365d; /* 理工大学标志性深蓝色系 */
  margin: 0 0 8px 0;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.contact-email {
  margin: 0 0 8px;
  color: #4a5568;
  font-size: 15px;
}

.research-directions {
  max-width: 760px;
  margin: 0 auto 10px;
  color: #4a5568;
  font-size: 15px;
}

.research-directions strong {
  color: #1a365d;
}

.contact-email a {
  color: #8c071e;
  font-weight: 600;
}

.header-line {
  width: 60px;
  height: 4px;
  background: #8c071e; /* 香港理大标志性暗红色/酒红 */
  margin: 20px auto;
  border-radius: 2px;
}

/* 职位卡片列表 */
.positions-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.position-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 30px;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.position-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.05), 0 8px 8px -5px rgba(0, 0, 0, 0.03);
  border-color: #cbd5e1;
}

/* 区分重要 Faculty 职位的特殊卡片样式 */
.primary-card {
  border-left: 5px solid #8c071e;
}

.card-badge {
  position: absolute;
  top: 20px;
  right: 30px;
  background: #fdf2f2;
  color: #9b1c1c;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
}

/* 卡片内层结构 */
.position-title-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.position-number {
  font-size: 18px;
  font-weight: 700;
  color: #a0aec0;
  font-family: "Courier New", Courier, monospace;
}

.position-title-row h3 {
  font-size: 20px;
  color: #1a365d;
  margin: 0;
  font-weight: 600;
}

.position-desc {
  font-size: 14.5px;
  color: #4a5568;
  margin: 0 0 20px 0;
  text-align: justify;
}

/* 链接组及 Scheme 标签样式 */
.link-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scheme-link {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  background: #f7fafc;
  border: 1px solid #edf2f7;
  border-radius: 8px;
  color: #2b6cb0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  width: fit-content;
}

.scheme-link:hover {
  background: #ebf8ff;
  border-color: #bee3f8;
  color: #2b6cb0;
  padding-left: 20px;
}

/* 特殊高亮基金项目（如 HKPFS） */
.scheme-link.prestige {
  background: #fffaf0;
  border-color: #feebc8;
  color: #dd6b20;
}
.scheme-link.prestige:hover {
  background: #fff5f5;
  border-color: #fbd38d;
}

.link-icon {
  margin-right: 8px;
  font-size: 12px;
}

/* 行为动作区域按钮 */
.action-row {
  margin-top: 10px;
}

.apply-btn {
  display: inline-block;
  background: #1a365d;
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s ease;
}

.apply-btn:hover {
  background: #2b6cb0;
}

.details-link {
  color: #8c071e;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.details-link:hover .arrow {
  transform: translateX(4px);
}

.arrow {
  transition: transform 0.2s ease;
}

/* 底部申请说明 */
.how-to-apply {
  margin-top: 50px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 30px;
}

.how-to-apply h3 {
  margin: 0 0 12px 0;
  color: #1a365d;
  font-size: 18px;
}

.how-to-apply p {
  margin: 0;
  font-size: 14px;
  color: #4a5568;
}

.email-highlight {
  color: #8c071e;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px dashed #8c071e;
}

.code-block {
  background: #edf2f7;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  color: #e53e3e;
}

/* 响应式适配：移动端断点 */
@media (max-width: 768px) {
  .join-container {
    padding: 40px 16px;
  }
  .position-card {
    padding: 20px;
  }
  .card-badge {
    position: static;
    display: inline-block;
    margin-bottom: 12px;
  }
  .scheme-link {
    width: 100%; /* 手机端链接横向撑满，更易点击 */
  }
}
</style>

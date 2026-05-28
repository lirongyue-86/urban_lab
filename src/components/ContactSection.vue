<template>
  <section id="contact" class="section contact-section">
    <h2 class="section-title">Contact Us</h2>
    
    <div class="contact-grid">
      
      <div class="logo-area">
        <a href="https://www.polyu.edu.hk/" target="_blank" rel="noopener noreferrer" title="Visit Hong Kong Polytechnic University Official Website">
          <img :src="polyuLogo" alt="Hong Kong Polytechnic University Logo" class="poly-logo" />
        </a>
        <a href="https://www.polyu.edu.hk/lsgi/" target="_blank" rel="noopener noreferrer" title="Visit Department of Land Surveying and Geo-Informatics">
          <img :src="lsgiLogo" alt="Department of Land Surveying and Geo-Informatics Logo" class="poly-logo" />
        </a>
      </div>

      <div class="contact-info">
        <p><strong>📍 Address:</strong> 181 Chatham Road South, Hung Hom, Kowloon, Hong Kong</p>
        <p><strong>🏢 Institution:</strong> Department of Land Surveying and Geo-Informatics, The Hong Kong Polytechnic University</p>
        <p><strong>📬 Postal Code:</strong> 999077</p>
      </div>

    </div>
  </section>
</template>

<script setup>
// 引入 assets 目录下的 PNG 格式 Logo
import polyuLogo from '../assets/Polyulogo.png'
import lsgiLogo from '../assets/LSGI.png'
</script>

<<style scoped>
.section { 
  padding: 60px 0; 
  scroll-margin-top: 80px; 
}

.section-title { 
  font-size: 2rem; 
  color: #041543; 
  border-left: 5px solid #0284c7; 
  padding-left: 15px; 
  margin-bottom: 40px; 
}

/* 经典网格：左右平分 */
.contact-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 40px; 
  align-items: center; /* 让左侧 Logo 群和右侧文字整体垂直居中对齐 */
}

/* 左侧容器：【核心修改】改为 flex 且垂直排列 (column)，并且向右靠齐 */
.logo-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* 👈 改为左对齐，与小标题最左端对齐 */
  gap: 20px;               /* 👈 理大 Logo 与 LSGI Logo 之间的距离设为 20px */
  padding-right: 20px;
}

/* 理大 Logo 样式控制 */
.poly-logo {
width: 100%;
  max-width: 500px;    
  height: auto;        
  background: transparent; 
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
}

/* LSGI Logo 样式控制 */
.lsgi-logo {
  width: 100%;
  max-width: 500px;    /* 👈 稍微调小一点，突出理大为主校，LSGI 为下属院系的主次层级 */
  height: auto;
  background: transparent;
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
}

/* 鼠标悬停动效（给两个 Logo 都加上） */
.poly-logo:hover, .lsgi-logo:hover {
  transform: scale(1.03); 
  opacity: 0.85;        
}

/* 右侧文字样式排版 */
.contact-info {
  text-align: left;
}

.contact-info p { 
  font-size: 1.1rem; 
  margin-bottom: 15px; 
  color: #334155;
  line-height: 1.6;
}

/* 响应式：在手机等小屏幕上自动变成上下排列 */
@media (max-width: 768px) { 
  .contact-grid { 
    grid-template-columns: 1fr; 
    gap: 30px;
  } 
  .logo-area {
    align-items: center; /* 手机端改为居中对齐 */
    padding-right: 0;
  }
  .poly-logo {
    max-width: 240px; 
  }
  .lsgi-logo {
    max-width: 200px;
  }
}
</style>
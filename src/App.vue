<template>
  <div class="lab-site">
    <nav class="navbar">
      <div class="logo-container">
        <span class="logo-text">Urban Information Science Lab</span>
        <span class="logo-sub">Urban Information Science Lab</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/team" class="nav-item team-link">Research Team</router-link>
      </div>
    </nav>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2026 Urban Information Science Lab. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* 1. 全局清理：移除白底，讓 style.css 的網格圖層露出來 */
:global(body) { 
  margin: 0 !important; 
  padding: 0 !important; 
 /* 與 style.css 底層顏色一致 */
  overflow-x: hidden; 
}

.lab-site { 
  font-family: 'Helvetica Neue', Arial, sans-serif; 
  color: #080220; 
  min-height: 100vh; 
  display: flex; 
  flex-direction: column;
}

/* 2. 導覽列：改為半透明磨砂效果 */
.navbar { 
  position: sticky; top: 0; z-index: 100; 
  display: flex; justify-content: space-between; align-items: center; 
  padding: 20px 5%; 
  background-color: rgba(18, 4, 107, 0.8); 
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-text { color: #ffffff; font-size: 1.35rem; font-weight: bold; }
.logo-sub { color: #38bdf8; font-size: 0.85rem; margin-top: 2px; }

.nav-item { 
  color: #cbd5e1; text-decoration: none; font-size: 1.1rem; 
  margin-left: 30px; font-weight: 500; transition: color 0.2s;
}
.nav-item:hover { color: #38bdf8; }

.team-link {
  border: 1.5px solid #0790cb; padding: 6px 16px; border-radius: 6px;
  color: #38bdf8; transition: all 0.2s;
}
.team-link:hover { background-color: #38bdf8; color: #070d19; transform: scale(1.05); }

/* 3. 關鍵修改：內容區改為「懸浮玻璃卡片」 */
.content { 
  /* 改为 100% 宽度，移除 max-width 的限制 */
  width: 100%; 
  /* 确保没有多余的边距限制 */
  margin-left: 0;
  padding: 0;
  
  background: rgba(255, 255, 255, 0.6);
  flex-grow: 1;
}

.footer { 
  background: rgba(18, 4, 107, 0.8); 
  color: #eaf3ff; text-align: center; padding: 50px 0; 
  margin-top: 0px; font-size: 1rem;
}
</style>
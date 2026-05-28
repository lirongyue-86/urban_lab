<template>
  <div class="detail-page">
    <router-link to="/" class="back-btn">← Back to Lab Home</router-link>

    <h1>Urban Privacy and Public Safety <br><span class="sub-main-title">Spatial Anonymization & Spatiotemporal Risk Forecasting</span></h1>
    <p class="meta">Published: May 2026</p>
    
    <div class="content-body">
      
      <section class="research-direction">
        <h3>1. Spatial Location Privacy Protection</h3>
        <p class="description">
          <strong>Research Overview:</strong> While the widespread adoption of big data and location-based services serves as a double-edged sword, the core "Base Locations" (such as home addresses and high-frequency workplaces) of the public are highly vulnerable to malicious reverse-engineering when using geotagged social media platforms (e.g., check-ins and photo uploads). This research direction specializes in evaluating the defensive boundaries and robustness benchmarks of existing big data algorithms when extracting location privacy. Through differential privacy modeling and reverse-inference simulations, the team develops more robust frameworks to prevent spatial big data leaks. This shields public spatial privacy while maintaining the open-source utility and sharing value of geospatial datasets.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Liu, Z., Shi, W., Zhang, A., & Wang, B. (2020). Analysis of the performance and robustness of methods to detect base locations of individuals with geo-tagged social media data. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2020.1793424" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Liu, Z., Shi, W., & Zhang, A. (2021). Detecting home countries of social media users with machine-learned ranking approach: A case study in Hong Kong. <i>Applied Geography</i>.
              <a href="https://doi.org/10.1016/j.apgeog.2021.102532" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>2. Spatiotemporal Prediction for Public Health Risks</h3>
        <p class="description">
          <strong>Research Overview:</strong> High-density metropolitan environments represent high-risk breeding grounds for infectious pathogen transmission and microscale air pollution exposure. This direction deeply intertwines geospatial informatics with epidemiology and health geography. The team has developed a pioneering Extended Weight Kernel Density Estimation (Extended WKDE) model, achieving precise spatiotemporal forecasting of onset risks during major public health emergencies (such as the initial phases of the COVID-19 outbreak). Additionally, the research has initiated the quantitative evaluation of the spatiotemporal containment benefits under varying tiers of urban lockdowns. By further fusing satellite atmospheric inversions with microscale urban geographic predictors, the model estimates road-network-level pollution distributions to provide predictive support for healthy route planning.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Shi, W., Tong, C., Zhang, A., Wang, B., Shi, Z., Yao, Y., & Jia, P. (2021). An extended Weight Kernel Density Estimation model forecasts COVID-19 onset risk and identifies spatiotemporal variations of lockdown effects in China. <i>Communications Biology</i>.
              <a href="https://doi.org/10.1038/s42003-021-01747-0" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Tong, C., Shi, Z., Shi, W., & Zhang, A. (2022). Estimation of on‐road PM2.5 distributions by combining satellite top‐of‐atmosphere with microscale geographic predictors for healthy route planning. <i>GeoHealth</i>.
              <a href="https://doi.org/10.1029/2022GH000669" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>3. Real-Time Early Warning for Urban Security</h3>
        <p class="description">
          <strong>Research Overview:</strong> This direction represents the pinnacle of global innovation and technology transfer within the domain. Led by Prof. John W.Z. Shi, the "Advanced Real-time Prediction and Early Warning System for the Spread of Emerging Pathogens" has been awarded Gold Medals at both the International Exhibition of Inventions Geneva and the Asia International Innovative Invention Exhibition. The core innovation lies in seamlessly synthesizing space syntax theory, microscale human spatiotemporal trajectories, and community-scale grid epidemic controls. Operating at a sub-second response rate, the system computes real-time transmission risks for every street and neighborhood within high-risk sectors, erecting a robust digital shield for precision crowd control and urban safety resilience.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Tong, C. Z., W. Z. Shi, A. S. Zhang and Z. C. Shi (2023). A Spatiotemporal Solution to Control COVID-19 Transmission at the Community Scale for Returning to Normalcy: COVID-19 Symptom Onset Risk Spatiotemporal Analysis. <i>JMIR Public Health and Surveillance</i>.
              <a href="https://doi.org/10.2196/42827" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Yao, Y., Shi, W., Zhang, A., Liu, Z., & Luo, S. (2021). Examining the diffusion of coronavirus disease 2019 cases in a metropolis: a space syntax approach. <i>International Journal of Health Geographics</i>.
              <a href="https://doi.org/10.1186/s12942-021-00244-z" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Page Layout Optimization */
.detail-page { 
  padding: 40px 24px; 
  max-width: 960px; 
  margin: 20px auto; 
  line-height: 1.8; 
  font-size: 1.15rem; 
  color: #334155;
}

/* Back Button */
.back-btn { 
  display: inline-block; 
  color: #0284c7; 
  text-decoration: none; 
  font-weight: bold; 
  margin-bottom: 30px; 
  font-size: 1.1rem; 
  transition: color 0.2s;
}
.back-btn:hover {
  color: #0369a1;
  text-decoration: underline;
}

/* Header Typography */
h1 { 
  color: #1e3a8a; 
  border-left: 6px solid #0284c7; 
  padding-left: 18px;
  padding-bottom: 5px; 
  font-size: 2.4rem; 
  line-height: 1.3;
}
.sub-main-title {
  font-size: 1.5rem;
  color: #64748b;
  font-weight: 500;
  display: block;
  margin-top: 5px;
}

.meta { 
  font-size: 0.95rem; 
  color: #64748b; 
  margin-bottom: 40px; 
  padding-left: 24px;
}

/* Research Directions Block */
.research-direction {
  margin-bottom: 40px;
}

h3 { 
  font-size: 1.45rem; 
  color: #0f172a; 
  margin-top: 10px; 
  margin-bottom: 20px;
  line-height: 1.4;
}

.description {
  text-align: justify;
  color: #334155;
  margin-bottom: 25px;
}

/* Publication Card Box Styling */
.publications {
  background-color: #f8fafc;
  padding: 24px 30px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.publications h4 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #1e3a8a;
  font-size: 1.2rem;
  border-bottom: 1px solid #cbd5e1;
  padding-bottom: 6px;
}

.paper-list { 
  padding-left: 0; 
  list-style-type: none;
  margin: 0;
}
.paper-list li { 
  margin-bottom: 16px; 
  font-size: 1.05rem;
  line-height: 1.6;
  color: #475569;
  position: relative;
  padding-left: 15px;
}
.paper-list li::before {
  content: "▪";
  position: absolute;
  left: 0;
  color: #0284c7;
  top: 0;
}
.paper-list li:last-child {
  margin-bottom: 0;
}

.paper-meta {
  font-weight: bold;
  color: #0f172a;
}

.doi-link { 
  color: #0284c7; 
  text-decoration: none; 
  margin-left: 8px; 
  font-weight: 500;
  font-size: 0.95rem;
}
.doi-link:hover { 
  text-decoration: underline; 
  color: #0369a1;
}

/* Elegant Segment Dividers */
.divider {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(226, 232, 240, 1), rgba(0, 0, 0, 0));
  margin: 50px 0;
}

/* Responsive Adaptive Adjustments */
@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
  .sub-main-title { font-size: 1.2rem; }
  h3 { font-size: 1.3rem; }
  .publications { padding: 20px; }
}
</style>
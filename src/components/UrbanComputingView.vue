<template>
  <div class="detail-page">
    <router-link to="/" class="back-btn">← Back to Lab Home</router-link>

    <h1>📊 Urban Computing and Big Data <br><span class="sub-main-title">Spatial Data Quality & Intelligent Analytics</span></h1>
    <p class="meta">Published: May 2026</p>
    
    <div class="content-body">
      
      <section class="research-direction">
        <h3>1. Intelligent Spatial Big Data Analytics</h3>
        <p class="description">
          <strong>Research Overview:</strong> The construction of modern smart cities has catalyzed massive, high-dimensional, real-time, and highly heterogeneous urban spatial big data streams. This research direction is dedicated to overcoming the complex scientific challenges encountered when mining and modeling these data streams, with a particular focus on addressing uncertainty bottlenecks and unlocking the scientific prospects of spatiotemporal big data analytics. By integrating fuzzy set theory, fuzzy association rules, and evolutionary algorithms (such as the differential evolution algorithm), the team has developed an intelligent mining framework robust against spatiotemporal noise and incomplete datasets. This framework successfully extracts high-level urban operational principles and evolutionary characteristics from chaotic, large-scale urban activity data.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Shi, W., Zhang, A., Zhou, X., and Zhang, M. (2018). Challenges and prospects of uncertainties in spatial big data analytics. <i>Annals of the American Association of Geographers</i>.
              <a href="https://doi.org/10.1080/24694452.2017.1421898" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Zhang, A. and Shi, W. (2019). Mining significant fuzzy association rules with differential evolution algorithm. <i>Applied Soft Computing</i>.
              <a href="https://doi.org/10.1016/j.asoc.2019.105518" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>2. Spatial Data Quality Control and Uncertainty Modeling</h3>
        <p class="description">
          <strong>Research Overview:</strong> This direction stands as the globally renowned, foundational domain established by Prof. John W.Z. Shi's team (honored with the Second Prize of the State Natural Science Award and the Founder in Spatial Accuracy Award). The reliability of any spatial analysis or geoscientific modeling inherently hinges upon data precision. This direction systematically investigates the principles of uncertainty propagation within massive spatial datasets—such as Digital Elevation Models (DEMs) and multi-source remote sensing land cover classifications—across data acquisition, interpolation, and classification stages. The team pioneered a "reference-free" method for measuring classification uncertainty, successfully tackling the world-level challenge of evaluating large-scale data quality in the absence of in-situ ground truth, thereby leading the international theoretical framework for spatial big data quality.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Chen, P., Huang, H., & Shi, W. (2022). Reference-free method for investigating classification uncertainty in large-scale land cover datasets. <i>International Journal of Applied Earth Observation and Geoinformation</i>.
              <a href="https://doi.org/10.1016/j.jag.2022.102673" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Shi, W., Wang, B., & Tian, Y. (2014). Accuracy analysis of digital elevation model relating to spatial resolution and terrain slope by bilinear interpolation. <i>Mathematical Geosciences</i>.
              <a href="https://doi.org/10.1007/s11004-013-9508-8" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>3. Standard Development for Geospatial Data</h3>
        <p class="description">
          <strong>Research Overview:</strong> The ultimate value of academic theory lies in driving the establishment of industrial standards. This direction specializes in translating spatial uncertainty and quality control theories into national and global geomatics and mapping standards. The core research centers on evaluating and regulating the quality of emerging crowdsourced datasets in the big data era, such as Volunteered Geographic Information (VGI) from OpenStreetMap. The team has proposed a multilevel stratified spatial sampling evaluation framework and quality control standards for linear geometric features. This work effectively resolves the issues of uneven data quality and lack of standardization in crowdsourced big data, accelerating the engineering deployment of novel spatial big data in governmental decision-making and smart industries.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Wu, H., Lin, A., Clarke, K. C., Shi, W., Cardenas-Tristan, A., & Tu, Z. (2020). A comprehensive quality assessment framework for linear features from Volunteered Geographic Information. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2020.1784424" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Xie, H., Tong, X., Meng, W., Liang, D., Wang, Z., & Shi, W. (2015). A Multilevel Stratified Spatial Sampling Approach for the Quality Assessment of Remote-Sensing-Derived Products. <i>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</i>.
              <a href="https://doi.org/10.1109/JSTARS.2015.2437371" target="_blank" class="doi-link">[DOI 🔗]</a>
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


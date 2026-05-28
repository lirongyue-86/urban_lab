<template>
  <div class="detail-page">
    <router-link to="/" class="back-btn">← Back to Lab Home</router-link>

    <h1>Geospatial Artificial Intelligence (GeoAI) <br><span class="sub-main-title">Detailed Research Profiling</span></h1>
    <p class="meta">Published: May 2026</p>
    
    <div class="content-body">
      
      <!-- Direction 1 -->
      <section class="research-direction">
        <h3>1. Deep Learning–Driven Remote Sensing Object Extraction</h3>
        <p class="description">
          <strong>Research Overview:</strong> This direction focuses on resolving the core scientific challenges of remote sensing imagery, such as "same object with different spectra, different objects with the same spectrum" and high scale variations under complex natural geography and heterogeneous urban environments. Utilizing next-generation Deep Convolutional Neural Networks (CNNs), Vision Transformers, and multi-scale feature fusion networks, the team develops intelligent interpretation algorithms equipped with robust generalization capabilities. Key technologies include weak/self-supervised feature learning, attention mechanism optimization, and precise edge extraction. The ultimate goal is to automatically, efficiently, and accurately extract foundational features—such as buildings, road networks, water bodies, impervious surfaces, and even dynamic active wildfire fronts—from high-resolution satellite, aerial, and UAV remote sensing imagery, providing highly automated and intelligent technical support for national foundational geographic information updates and digital twin infrastructure.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Gao, X., Shi, W., Zhang, M., & Wang, L. (2025). DAFDM: A Discerning Deep Learning Model for Active Fire Detection Based on Landsat-8 Imagery. <i>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</i>.
              <a href="https://doi.org/10.1109/JSTARS.2025.3545114" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Li, Z., Shi, W., Wang, Q., & Miao, Z. (2015). Extracting man-made objects from high spatial resolution remote sensing images via fast level set evolutions. <i>IEEE Transactions on Geoscience and Remote Sensing</i>.
              <a href="https://doi.org/10.1109/TGRS.2014.2330341" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <!-- Direction 2 -->
      <section class="research-direction">
        <h3>2. Advanced Multi-Temporal Remote Sensing Change Detection</h3>
        <p class="description">
          <strong>Research Overview:</strong> The core of dynamic Earth surface monitoring lies in the accurate identification of substantive land cover transformations. This direction is dedicated to overcoming "pseudo-change" noise caused by illumination discrepancies across different imaging periods, atmospheric interference, seasonal vegetation succession, and varying sensor viewing angles. The research innovatively introduces logical exclusive OR (XOR) problem formulations, unsupervised Markov Random Fields (MRF), and superpixel semantic-level comparison algorithms into multi-temporal remote sensing analysis, constructing intelligent models for cross-temporal feature alignment and difference map generation. Its technical applications extensively cover urban natural resource inspections (such as illegal building enforcement), dynamic monitoring of land-use changes, ecological redline protection assessments, and quantitative post-disaster damage evaluation.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Chen, S., Shi, W., Zhou, M., Zhang, M., Yu, Y., Sun, Y., Guan, L., & Li, S. (2024). CDasXORNet: Change detection of buildings from bi-temporal remote sensing images as an XOR problem. <i>International Journal of Applied Earth Observation and Geoinformation</i>.
              <a href="https://doi.org/10.1016/j.jag.2024.103836" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Hao, M., Zhou, M., Jin, J., & Shi, W. (2019). An advanced superpixel-based markov random field model for unsupervised change detection. <i>IEEE Geoscience and Remote Sensing Letters</i>.
              <a href="https://doi.org/10.1109/LGRS.2019.2925345" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <!-- Direction 3 -->
      <section class="research-direction">
        <h3>3. Automatic Target Recognition via Computer Vision</h3>
        <p class="description">
          <strong>Research Overview:</strong> This direction aims to deeply integrate cutting-edge Computer Vision (CV) theories with geographic and geological domain knowledge, enabling all-weather, automated, and second-level precise recognition of wide-area specific geographic entities and abrupt hazardous targets. The research strictly tackles technical bottlenecks such as blurred boundaries, irregular morphologies, and sample scarcity of geological hazards (e.g., landslides, mudflows, ground collapses) in imagery. The team has engineered deep Multiple Instance Learning (MIL) frameworks and few-shot object recognition algorithms that can precisely locate and extract hazard boundaries from massive high-resolution imagery even in the absence of large-scale annotated datasets, providing pivotal technical core-strengths for disaster prevention/mitigation, opening emergency rescue lifelines, and national target recognition.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Shi, W., Zhang, M., Ke, H., Fang, X., Zhan, Z. & Chen, S. (2020). Landslide recognition by deep convolutional neural network and change detection. <i>IEEE Transactions on Geoscience and Remote Sensing</i>.
              <a href="https://doi.org/10.1109/TGRS.2020.3015826" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Zhang, M., Shi, W., Chen, S., Zhan, Z. & Shi, Z. (2020). Deep multiple instance learning for landslide mapping. <i>IEEE Geoscience and Remote Sensing Letters</i>.
              <a href="https://doi.org/10.1109/LGRS.2020.3007183" target="_blank" class="doi-link">[DOI 🔗]</a>
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

/* Publication Styling */
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

/* Dividers */
.divider {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(226, 232, 240, 1), rgba(0, 0, 0, 0));
  margin: 50px 0;
}

/* Responsive Breakpoints */
@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
  .sub-main-title { font-size: 1.2rem; }
  h3 { font-size: 1.3rem; }
  .publications { padding: 20px; }
}
</style>
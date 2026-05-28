<template>
  <div class="detail-page">
    <router-link to="/" class="back-btn">← Back to Lab Home</router-link>

    <h1>Human Behavior Analysis <br><span class="sub-main-title">Spatiotemporal Modeling & Spatial Uncertainty</span></h1>
    <p class="meta">Published: May 2026</p>
    
    <div class="content-body">
      
      <section class="research-direction">
        <h3>1. Individual Movement Modeling and Prediction</h3>
        <p class="description">
          <strong>Research Overview:</strong> Predicting individual spatial movement trajectories is a cornerstone of fine-grained urban management. This research direction deeply integrates traditional behavioral geography with advanced neural networks, such as Spatiotemporal Long Short-Term Memory networks (ST-LSTM). The team has pioneered predictive models (e.g., STLP-GSM) leveraging "Dynamic Regions of Interest (Dynamic ROI)" and geotagged social media data. This technology dynamically captures the evolution of individual daily activity spaces, enabling highly precise inferences regarding an individual's next spatial destination, potential dwell time, and overall movement trajectory trends within dense metropolitan environments.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Shen, X., Shi, W., Chen, P., Liu, Z., & Wang, L. (2022). Novel model for predicting individuals’ movements in dynamic regions of interest. <i>GIScience & Remote Sensing</i>.
              <a href="https://doi.org/10.1080/15481603.2022.2037877" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Chen, P., Shi, W., Zhou, X., Liu, Z. and Fu, X. (2019). STLP-GSM: a method to predict future locations of individuals based on geotagged social media data. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2019.1630630" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>2. Trajectory Uncertainty and Error Correction</h3>
        <p class="description">
          <strong>Research Overview:</strong> Opportunistically collected human or vehicle movement trajectory data inherently suffers from noise, drift, and signal outages due to multipath effects within indoor spaces or urban canyons. This research direction introduces breakthrough methodologies derived from spatial uncertainty theory—specifically the concept of "Error Ellipses"—and combines them with motion-aware LSTM models. The team focuses on developing adaptive uncertainty modeling techniques that autonomously identify and eliminate random tracking noise, rectify coordinates drift, and intelligently reconstruct missing signal segments, thereby fundamentally reshaping the reliability and geometric fidelity of trajectory data from the physical level up.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Shi, W., Chen, P., Shen, X., & Liu, J. (2020). An adaptive approach for modelling the movement uncertainty in trajectory data based on the concept of error ellipses. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2020.1743818" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Liu, Z., Shi, W., Yu, Y., Chen, P., & Chen, B. Y. (2022). A LSTM-based approach for modelling the movement uncertainty of indoor trajectories with mobile sensing data. <i>International Journal of Applied Earth Observation and Geoinformation</i>.
              <a href="https://doi.org/10.1016/j.jag.2022.102758" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>3. Urban Human Activity Spatiotemporal Pattern Mining</h3>
        <p class="description">
          <strong>Research Overview:</strong> How can we filter random noise from billions of unstructured spatiotemporal trajectory points to automatically extract cohesive group patterns with true statistical significance and geographical meaning? This research direction has innovated sequential pattern mining frameworks (exemplified by Geo-SigSPM) alongside crisp-fuzzy spatial association rules. These algorithms successfully break through the bottlenecks of traditional data mining, which fail to integrate complex spatial boundaries and geographic resistance. This allows for highly efficient mining of cohesive home-work commuting patterns and trip-chain characteristics, directly empowering urban spatial planning and functional zone optimization.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Zhang, A., Shi, W., Liu, Z., & Zhou, X. (2024). Geo-SigSPM: mining geographically interesting and significant sequential patterns from trajectories. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2024.2320149" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Shi, W., Zhang, A., and Webb, G.I. (2018). Mining significant crisp-fuzzy spatial association rules. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2018.1434525" target="_blank" class="doi-link">[DOI 🔗]</a>
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
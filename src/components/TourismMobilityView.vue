<template>
  <div class="detail-page">
    <router-link to="/" class="back-btn">← Back to Lab Home</router-link>

    <h1> Smart Tourism and Mobility <br><span class="sub-main-title">Human Mobility Modeling & Destination Optimization</span></h1>
    <p class="meta">Published: May 2026</p>
    
    <div class="content-body">
      
      <section class="research-direction">
        <h3>1. Tourist Behavior Analysis Using Spatiotemporal Big Data</h3>
        <p class="description">
          <strong>Research Overview:</strong> The big data era offers a brand-new paradigm for deciphering human mobility. This research direction deeply integrates multi-source, unstructured spatiotemporal big data, including urban public transit Smart Card Data (SCD), mobile signaling, location-based social media check-ins, and floating vehicle GPS trajectories. By constructing high-dimensional spatiotemporal clustering frameworks and behavior pattern mining algorithms, the research unravels the spatiotemporal activity chains, cross-boundary mobility characteristics (such as Shenzhen-Hong Kong cross-border travel patterns within the Guangdong-Hong Kong-Macao Greater Bay Area), and collective preferences of tourists and urban residents. The outcomes directly empower attractiveness grading of major urban commercial centers, precise visitor profiling for tourist destinations, normalized tourism marketing strategies, and personalized intelligent travel recommendations.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Liu, J., & Shi, W. (2021). A cross-boundary travel tale: Unraveling Hong Kong residents’ mobility pattern in Shenzhen by using metro smart card data. <i>Applied Geography</i>.
              <a href="https://doi.org/10.1016/j.apgeog.2021.102416" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Mao, H., Fan, X., Guan, J., Chen, Y., Su, H., Shi, W., ... & Li, M. (2019). Customer attractiveness evaluation and classification of urban commercial centers by crowd intelligence. <i>Computers in Human Behavior</i>.
              <a href="https://doi.org/10.1016/j.chb.2018.08.019" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>2. Tourism Destination Carrying Capacity Assessment</h3>
        <p class="description">
          <strong>Research Overview:</strong> Overcrowding in scenic areas and metropolitan public spaces frequently triggers safety incidents and environmental degradation. This direction focuses on the dynamic assessment and predictive modeling of spatial and environmental carrying capacity limits for tourism destinations. Built upon Volunteered Geographic Information (VGI) and machine learning frameworks, the team has pioneered a neural network model, "RegNet," designed to predict regional desirability. By executing cross-scale integrated computations of real-time crowd influx risks, spatial saturation levels, and infrastructure resilience coefficients, the framework provides early warnings for visitor overcapacity at high-risk nodes such as scenic spots and major urban transit hubs. This work yields quantitative benchmarks for smart crowd control, dynamic flow diversion planning, and public resource allocation.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Shi, W., Liu, Z., An, Z., & Chen, P. (2021). RegNet: a neural network model for predicting regional desirability with VGI data. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2020.1805125" target="_blank" class="doi-link">[DOI 🔗]</a>
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
        <h3>3. Public Transit Spatial Equity and Accessibility Evaluation</h3>
        <p class="description">
          <strong>Research Overview:</strong> The efficiency of urban transportation systems directly influences social equity and metropolitan vitality. Investigating urban networks through the lens of spatial justice and social equity, this direction harnesses massive multi-source logistics big data, public transit network topologies, and smart card commuting trajectories to quantitatively evaluate the dynamic alignment between public transit supply (metro and bus) and citizens' actual mobility demands. The core objective is to precisely calculate spatiotemporal accessibility deficits across diverse neighborhoods and demographic strata (particularly marginalized urban peripheral groups), pinpointing public service blind spots to optimize integrated urban transport infrastructure configurations, ultimately enhancing overall metropolitan operational efficiency and social inclusiveness.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Senousi, A., Liu, X., Zhang, J., Huang, J. & Shi, W. (2020). An empirical analysis of public transit networks using smart card data in Beijing, China. <i>Geocarto International</i>.
              <a href="https://doi.org/10.1080/10106049.2020.1756461" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Zhao, P., Liu, X., Shi, W., Jia, T., Li, W. & Chen, M. (2020). An empirical study on the intra-urban goods movement patterns using logistics big data. <i>International Journal of Geographical Information Science</i>.
              <a href="https://doi.org/10.1080/13658816.2020.1726002" target="_blank" class="doi-link">[DOI 🔗]</a>
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
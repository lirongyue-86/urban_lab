<template>
  <div class="detail-page">
    <router-link to="/" class="back-btn">← Back to Lab Home</router-link>

    <h1>🌍 Smart City Planning and Digital Twin <br><span class="sub-main-title">3D Urban Modeling & Infrastructure Optimization</span></h1>
    <p class="meta">Published: May 2026</p>
    
    <div class="content-body">
      
      <section class="research-direction">
        <h3>1. LiDAR–Based Automatic 3D City Modeling</h3>
        <p class="description">
          <strong>Research Overview:</strong> High-precision 3D maps serve as the definitive geometric foundation for digital twin cities and autonomous driving. However, interpreting massive, disordered, and complex LiDAR point cloud data remains an immense scientific challenge. This direction focuses on the development of autonomous 3D point cloud processing, semantic segmentation, and geometric reconstruction algorithms. The team has innovatively introduced multi-scale tensor voting mechanisms alongside region-growing algorithms. This integration achieves high-precision geometric plane segmentation and seamless semantic modeling for complex man-made urban surroundings and confined indoor corridors, executing an automated leap from raw point clouds to structured entity CAD/BIM models.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Chen, P., Luo, Z., & Shi, W. (2022). Hysteretic mapping and corridor semantic modeling using mobile LiDAR systems. <i>ISPRS Journal of Photogrammetry and Remote Sensing</i>.
              <a href="https://doi.org/10.1016/j.isprsjprs.2022.02.009" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Wu, H., Zhang, X., Shi, W., Song, S., Cardenas-Tristan, A., & Li, K. (2019). An Accurate and Robust Region-Growing Algorithm for Plane Segmentation of TLS Point Clouds Using a Multiscale Tensor Voting Method. <i>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</i>.
              <a href="https://doi.org/10.1109/JSTARS.2019.2936662" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>2. Dynamic Digital Twin Construction for Smart Cities</h3>
        <p class="description">
          <strong>Research Overview:</strong> The core vitality of digital twin technology rests upon the real-time, dynamic synchronization between virtual models and physical assets. Centered around the multi-platform Mobile Mapping Systems (MMS) independently developed by Prof. John W.Z. Shi's team (comprising backpack, handheld, and vehicle-mounted 3D scanners), this direction tackles key bottlenecks including high-precision extrinsic calibration of unaligned sensors, global principal planes-aided alignment, low-drift LiDAR odometry, and dynamic ground segmentation. These breakthroughs resolve the pressing challenges of multi-platform point cloud registration and low-latency digital asset updates within harsh urban canyon environments characterized by widespread GPS outages and complex indoor-outdoor transitions.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Bao, S., Shi, W., Yang, D., Xiang, H., & Yu, Y. (2024). Global principal planes aided LiDAR-based mobile mapping method in artificial environments. <i>Advanced Engineering Informatics</i>.
              <a href="https://doi.org/10.1016/j.aei.2024.102472" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Chen, P., Shi, W., Bao, S., Wang, M., Fan, W., & Xiang, H. (2021). Low-drift Odometry, Mapping and Ground Segmentation Using a Backpack LiDAR System. <i>IEEE Robotics and Automation Letters</i>.
              <a href="https://doi.org/10.1109/LRA.2021.3093563" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="divider" />

      <section class="research-direction">
        <h3>3. Urban Infrastructure Layout Optimization</h3>
        <p class="description">
          <strong>Research Overview:</strong> This direction explores how to leverage high-precision physical environment structures alongside advanced computational geometry and computational physics models to realize highly efficient infrastructure planning. The team pioneered a bidirectional cloth simulation algorithm to perform automated, high-precision partitioning of complex multi-storey interior configurations directly from raw 3D point clouds. By bridging the artificial divide between indoor and outdoor spaces, this framework executes scientific topological layout and capacity optimizations for underground networks, base station coverages, and multi-level emergency shelters, providing frontier engineering solutions for urban renewal and lifeline engineering.
        </p>
        
        <div class="publications">
          <h4>Selected Publications</h4>
          <ul class="paper-list">
            <li>
              <span class="paper-meta">Paper 1: </span>Li, F., Shi, W., Zhang, H., Tu, Y., Hao, M., & Sun, Y. (2024). Automatic multi-storey building partitioning from point cloud via bidirectional cloth simulation. <i>Journal of Building Engineering</i>.
              <a href="https://doi.org/10.1016/j.jobe.2024.110854" target="_blank" class="doi-link">[DOI 🔗]</a>
            </li>
            <li>
              <span class="paper-meta">Paper 2: </span>Shi, W., Ahmed, W., Li, N., Fan, W., Xiang, H., & Wang, M. (2019). Semantic geometric modelling of unstructured indoor point cloud. <i>ISPRS International Journal of Geo-Information</i>.
              <a href="https://doi.org/10.3390/ijgi8010009" target="_blank" class="doi-link">[DOI 🔗]</a>
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
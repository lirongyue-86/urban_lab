<template>
  <section class="news-page">
    <div class="news-wrap">
      <header class="news-header">
        <p class="news-kicker">Urban Informatics Lab</p>
        <h1>News</h1>
        <p>Latest updates from the lab, listed from newest to oldest.</p>
      </header>

      <div class="news-list">
        <article v-for="item in newsItems" :key="item.date" class="news-card">
          <img :src="item.image" :alt="item.imageAlt" class="news-image" />
          <div class="news-content">
            <time :datetime="item.date">{{ item.displayDate }}</time>
            <h2>{{ item.title }}</h2>
            <p>{{ item.summary }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import seminarImage from '../assets/news/news-2026-06-10.jpeg'
import delegationImage from '../assets/news/news-2026-06-24.jpeg'
import forumImage from '../assets/news/news-2026-07-02.jpeg'
import summerCampImage from '../assets/news/news-2026-07-28.jpeg'

const newsItems = [
  {
    date: '2026-07-28',
    displayDate: '28 July 2026',
    title: 'Summer Camp Delegation Visits Smart Cities Research Laboratory',
    summary: 'Students from six universities visited the laboratory. Professor John W.Z. Shi introduced smart city research in geospatial technologies, artificial intelligence, digital twins and big data.',
    image: summerCampImage,
    imageAlt: 'Summer camp delegation at the Smart Cities Research Laboratory'
  },
  {
    date: '2026-07-02',
    displayDate: '2 July 2026',
    title: 'Forum on Cross-Border Data Flow Systems in the Greater Bay Area',
    summary: 'SCRI hosted a forum for academia, government departments and research organisations to discuss secure cross-border data collaboration, digital policy and smart-city development.',
    image: forumImage,
    imageAlt: 'Forum on cross-border data flow systems in the Greater Bay Area'
  },
  {
    date: '2026-06-24',
    displayDate: '24 June 2026',
    title: 'Delegation Led by Dr Guo Dajin Visits SCRI',
    summary: 'A Yunnan delegation visited the Smart Cities Research Laboratory and learned about research advances in smart mobility, road-sign risk detection and intelligent road-condition monitoring.',
    image: delegationImage,
    imageAlt: 'Delegation visiting the Smart Cities Research Laboratory'
  },
  {
    date: '2026-06-10',
    displayDate: '10 June 2026',
    title: 'SCRI Research Seminar on Social Sensing and Intelligent Mapping',
    summary: 'Professors Liu Yu and Yang Bisheng shared research on spatiotemporal big-data-driven social sensing, autonomous sensing and intelligent mapping, followed by a discussion with attendees.',
    image: seminarImage,
    imageAlt: 'SCRI research seminar speakers and hosts'
  }
]
</script>

<style scoped>
.news-page {
  min-height: 100vh;
  padding: 64px 20px 80px;
  background: #f8fafc;
}

.news-wrap {
  max-width: 1050px;
  margin: 0 auto;
}

.news-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #dbe5f0;
}

.news-kicker {
  margin: 0 0 8px;
  color: #0284c7;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.news-header h1 {
  margin: 0;
  color: #0f172a;
  font-size: clamp(2.3rem, 5vw, 3.3rem);
  line-height: 1.1;
}

.news-header > p:last-child {
  margin: 12px 0 0;
  color: #64748b;
  font-size: 1.05rem;
}

.news-list {
  display: grid;
  gap: 28px;
}

.news-card {
  display: grid;
  grid-template-columns: minmax(260px, 0.85fr) minmax(0, 1.15fr);
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #dbe5f0;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgb(15 23 42 / 0.05);
}

.news-image {
  width: 100%;
  height: 100%;
  min-height: 230px;
  object-fit: cover;
}

.news-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 34px;
}

.news-content time {
  margin-bottom: 10px;
  color: #0284c7;
  font-size: 0.86rem;
  font-weight: 700;
}

.news-content h2 {
  margin: 0 0 12px;
  color: #0f172a;
  font-size: 1.45rem;
  line-height: 1.35;
}

.news-content p {
  margin: 0;
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
}

@media (max-width: 720px) {
  .news-page {
    padding: 40px 16px 56px;
  }

  .news-header {
    margin-bottom: 28px;
  }

  .news-card {
    grid-template-columns: 1fr;
  }

  .news-image {
    height: 220px;
    min-height: 0;
  }

  .news-content {
    padding: 22px;
  }
}
</style>

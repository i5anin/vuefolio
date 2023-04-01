<template>
  <div class="about-us">
    <v-container>
      <div class="container">
        <h1 class="title">О нас</h1>
        <div class="subtitle">
          <p>
            Мы занимаемся созданием качественных и современных веб-приложений.
          </p>
          <p>
            В нашей команде вы найдете высококвалифицированных специалистов по
            разработке программного обеспечения, дизайнеров и маркетологов.
          </p>
        </div>
        <h2 class="subtitle">Технологии</h2>
        <div class="content">
          <div class="columns">
            <div class="column" v-for="tech in techStack" :key="tech.name">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">{{ tech.name }}</p>
                    </div>
                  </div>
                  <div class="content">
                    <p>{{ tech.description }}</p>
                    <p>
                      <a :href="tech.link">{{ tech.link }}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <v-row>
        <v-col cols="12" md="6">
          <h1 class="display-1 mb-4">About Us</h1>
          <p class="subtitle-1 mb-6">Я веб разработчик</p>
          <img
            src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
            width="70px" />. Мой путь в it начался ещё со школы и института,
          немного поработал в it сфере, укрепил свои знания курсами по Vue.js от
          Skillbox, где я проходил 7-месяцев курсы.

          <p class="subtitle-1 mb-6">Начал решать задачки тут:</p>
          <a href="https://leetcode.com/i5anin/">
            <img
              src="https://leetcode-stats-six.vercel.app/api?username=i5anin&show_icons=true&hide_border=true&theme=dark"
              alt="KnlnKS's LeetCodestats" />
          </a>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/About-Us.jpg" height="100%" contain></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import techStackData from '@/data/tech-stack.json';
  import { VRow, VCol } from 'vuetify';

  export default {
    components: {
      VRow,
      VCol,
    },
    name: 'AboutUs',
    data() {
      return {
        techStack: techStackData,
      };
    },
  };
</script>

<style>
  .about-us {
    padding: 80px 0;
  }
</style>

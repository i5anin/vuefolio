<template>
  <div class="about-us">
    <v-container>
      <div class="container">
        <h1 class="subtitle display-1 mb-4">Технологии</h1>
        <div class="column" v-for="tech in frameworks" :key="tech.name">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <img :src="tech.img" width="100" />
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

      <v-row>
        <v-col cols="12" md="6">
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
  import techStackData from '@/data/tech-stack.json'

  export default {
    name: 'AboutUs',
    data() {
      console.log(techStackData)

      // console.log(techStackData.techStack) // "React"
      console.log(techStackData.techStack.frameworks) // "React"
      return {
        techStack: techStackData,
        frameworks: techStackData.techStack.frameworks,
      }
    },
  }
</script>

<style>
  .about-us {
    height: 95vh;
    padding: 80px 0;
  }
</style>

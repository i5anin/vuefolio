<template>
  <div class="about-us">
    <v-container>
      <div class="container">
        <!-- <card-about title-name="techStackData">{{ titleName }}<card-about/> -->
        <h2>frontend</h2>
        <card-about
          title-name="Фреймворки"
          :tech-Stack="techStackData.frontend.frameworks" />
        <card-about
          title-name="Языки"
          :tech-Stack="techStackData.frontend.languages" />

        <h2>backend</h2>
        <card-about
          title-name="Инструменты"
          :tech-Stack="techStackData.backend.languages" />
        <card-about
          title-name="Технологии"
          :tech-Stack="techStackData.backend.frameworks" />
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
  import CardAbout from '@/vue/components/CardAbout.vue'

  export default {
    name: 'AboutPage',
    data() {
      // console.log(techStackData)
      // console.log(techStackData.frontend)
      // console.log(techStackData.backend)
      // console.log(techStackData.frontend.frameworks)
      return { techStackData }
    },
    components: {
      CardAbout,
    },
  }
</script>

<style>
  .about-us {
    height: 100%;
    padding: 80px 0;
  }

  .card {
    border: 1px solid gray;
  }
</style>

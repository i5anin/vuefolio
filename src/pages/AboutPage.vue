<template>
  <div class="about-us">
    <v-container>
      <div class="container">
        <!-- <card-about title-name="techStackData">{{ titleName }}<card-about/> -->
        <h2>_frontend</h2>
        <card-stack
          title-name="Фреймворки"
          :techStack="techStackData.frontend.frameworks" />
        <card-stack
          title-name="Языки"
          :techStack="techStackData.frontend.languages" />
        <card-stack
          title-name="Инструменты"
          :techStack="techStackData.frontend.tools" />

        <h2 class="main-title">_backend</h2>
        <card-stack
          title-name="Инструменты"
          :techStack="techStackData.backend.languages" />
        <!--        <card-about-->
        <!--          title-name="Технологии"-->
        <!--          :tech-Stack="techStackData.backend.frameworks" />-->
        <h2 class="main-title">_graphic</h2>
        <card-stack
          title-name="Инструменты"
          :techStack="techStackData.graphic.tools" />
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <p class="subtitle-1 mb-6">Я веб разработчик.</p>
          <v-img
            src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
            width="70px" />
          Мой путь в it начался ещё со школы и института, немного поработал в it
          сфере, укрепил свои знания курсами по Vue.js от Skillbox, где я
          проходил 7-месяцев курсы.

          <p class="subtitle-1 mb-6">Начал решать задачки тут:</p>
          <a href="https://leetcode.com/i5anin/">
            <img
              src="https://leetcode-stats-six.vercel.app/api?username=i5anin&show_icons=true&hide_border=true&theme=dark"
              alt="KnlnKS's LeetCodestats" />
          </a>
        </v-col>
        <v-col cols="12" md="6">
          <!--          <v-img src="@/assets/About-Us.jpg" height="100%" contain></v-img>-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import techStackData from '@/data/tech-stack.json'
  import CardStack from '@/components/CardStack.vue'

  export default {
    name: 'AboutPage',
    components: {
      CardStack,
    },
    data() {
      return { techStackData }
    },
  }
</script>

<style>
  .subtitle {
    padding-top: 30px;
  }
  .main-title {
    padding-top: 80px;
  }

  .about-us {
    height: 100%;
    padding: 80px 0;
  }
</style>

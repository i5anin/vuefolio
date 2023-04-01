<template>
  <div class="about-us">
    <v-container>
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
  export default {
    name: 'AboutUs',
  };
</script>

<style>
  .about-us {
    padding: 80px 0;
  }
</style>

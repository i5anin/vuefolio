<template>
  <div class="hello-page-container">
    <VeritcalLineBar />
    <v-container>
      <div class="flex-center">
        <div>
          <div class="flex">
            <div class="fio">
              <p class="hello">Привет! Я</p>
              <h1 class="fio">Исанин Сергей</h1>
            </div>
            <v-img class="avatar" src="@/assets/avatar-2.jpg" />
          </div>
          <div class="info">
            <h2 class="crossed-out">Младший front-end разработчик</h2>
            <h2 class="dev color-blue">
              Я хочу стать средним front-end разработчиком
            </h2>
          </div>
          <!--          <p class="font-size20">// напишите код ниже, чтобы продолжить</p>-->
          <!--          <p class="color-pink">> <span class="underline">w</span>hois</p>-->
        </div>
        <div>
          <TerminalWindow
            pre-content="
/**
* Project 0
* Vue - fan
*/
see the project"
            header-content="Technologies Used 4, 1245 commits"
            class="terminal-size" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
  import TerminalWindow from '@/components/ShowBackend.vue'
  import VeritcalLineBar from '@/components/VeritcalLineBar.vue'

  export default {
    components: {
      TerminalWindow,
      VeritcalLineBar,
    },
    name: 'HelloPage',
  }
</script>

<style scoped>
  .info {
    padding: 20px 0;
  }
  .fio {
    padding-right: 20px;
  }

  .avatar {
    width: 45%;
    height: 45%;
    border-radius: 1000px;
    border: 10px solid rgba(255, 255, 255, 0);
    outline: 2px solid #12151a;
    box-sizing: border-box;
  }

  .hello-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95vh;
  }
  .terminal-size {
    height: 250px;
    width: 450px;
  }
  .hello {
    font-size: 20px;
  }
  .fio {
    font-size: 4.5rem;
  }

  .flex-center {
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
  }

  .color-blue {
    color: rgb(161, 255, 242);
  }

  .crossed-out {
    text-decoration: line-through;
  }

  @media only screen and (max-width: 320px) {
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .terminal-size {
      height: 250px;
      width: 350px;
    }
    .avatar {
      width: 35%;
      height: 35%;

      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 1441px) {
  }
</style>

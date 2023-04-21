<template>
  <div class="hello-page-container">
    <VeritcalLineBar />
    <v-container>
      <div class="flex-center">
        <div>
          <p class="hello">Привет! Я</p>
          <img src="../../assets/avatar-1.jpg" />
          <h1 class="fio">Сергей Исанин</h1>
          <h2 class="crossed-out">Младший front-end разработчик</h2>
          <h2 class="dev color-blue">
            Я хочу стать средним front-end разработчиком
          </h2>
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
    font-size: 80px;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color-blue {
    color: rgb(161, 255, 242);
  }

  .font-size20 {
    font-size: 20px;
  }

  .color-pink {
    color: pink;
    font-size: 40px;
  }

  .underline {
    text-decoration: underline;
  }

  .crossed-out {
    text-decoration: line-through;
  }
</style>

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
  /* ---------- default ---------- */
  .info {
    padding: 20px 0;
  }
  .fio {
    padding-right: 20px;
  }

  .avatar {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }

  .hello-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95vh;
  }
  .terminal-size {
    height: 12em;
    width: 16em;
  }
  .hello {
    font-size: 20px;
  }
  .fio {
    font-size: 4.5rem;
  }

  .flex-center {
    display: flex;
  }

  .color-blue {
    color: rgb(161, 255, 242);
  }

  .crossed-out {
    text-decoration: line-through;
  }

  /* ---------- 320px ---------- */
  @media only screen and (max-width: 320px) {
    .flex-center {
      display: block;
    }
  }

  /* ---------- 321px - 768px ---------- */
  @media only screen and (min-width: 321px) and (max-width: 768px) {
    .flex-center {
      display: block;
    }
  }

  /* ---------- 769px - 1024px ---------- */
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .flex-center {
      display: block;
    }
  }

  /* ---------- 1024px - 1440px ---------- */
  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .terminal-size {
      height: 12em;
      width: 16em;
    }
    .flex-center {
      justify-content: space-between;
      align-items: center;
    }
    .flex-center {
      display: block;
      justify-content: center;
      align-items: center;
    }
  }

  /* ----------  1440px ---------- */
  @media only screen and (min-width: 1441px) {
  }
</style>

<template>
  <div class="hello-page-container">
    <VeritcalLineBar />
    <v-container>
      <div class="flex-center">
        <div>
          <p class="hello">Hello! I am</p>
          <h1 class="fio">Sergey Isanin</h1>
          <h2 class="crossed-out">Junior front-end developer</h2>
          <h2 class="dev color-blue">
            I want to be a middle front-end developer
          </h2>

          <p class="font-size20">// write the code below to continue</p>
          <p class="color-pink">> <span class="underline">w</span>hois</p>

          <p>Version: {{ version }}</p>
          <p>Commit hash: {{ commitHash }}</p>
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
    data() {
      return {
        version: process.env.APP_VERSION,
        commitHash: process.env.APP_COMMIT_HASH,
      }
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

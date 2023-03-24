<template>
  <div class="hello-page-container">
    <div class="flex-center">
      <div>
        <p class="hello">Hello! I am</p>
        <h1 class="fio">Sergey Isanin</h1>
        <h2>Junior front-end developer</h2>
        <h2 class="dev">I want to be a middle front-end developer</h2>

        <p class="color-blue">// write the code below to continue</p>
        <p class="color-pink">> <span class="underline">w</span>hois</p>
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
        <!-- <img src="@/assets/test.jpg" /> -->
      </div>
    </div>
  </div>
</template>

<script>
  import TerminalWindow from '@/vue/components/TerminalWindow.vue';

  export default {
    components: {
      TerminalWindow,
    },
    name: 'HelloPage',
  };
</script>

<style scoped>
  .hello-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  .terminal-size {
    height: 250px;
    width: 450px;
  }
  .hello {
    font-size: 20px;
    padding-bottom: 30px;
  }
  .fio {
    font-size: 80px;
    padding-right: 200px;
    padding-bottom: 50px;
  }
  .dev {
    padding-bottom: 220px;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100%;
    width: 100%; */
  }

  .color-blue {
    color: rgb(161, 255, 242);
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

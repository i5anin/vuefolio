<template>
  <div class="flex-center">
    <div>
      <p class="title">Hello! I am</p>
      <h1 class="title">Sergey Isanin</h1>
      <h2 class="crossed-out">Junior front-end developer</h2>
      <h2>I want to be a middle front-end developer</h2>

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
  .terminal-size {
    height: 250px;
    width: 450px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100%;
    width: 100%; */
  }

  .color-pink {
    color: pink;
  }

  .color-blue {
    color: rgb(161, 255, 242);
  }

  .underline {
    text-decoration: underline;
  }

  .crossed-out {
    text-decoration: line-through;
  }
</style>

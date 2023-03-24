<template>
  <div class="project-page">
    <h1 class="title">{{ project.title }}</h1>
    <div class="flex-center">
      <TerminalWindow
        pre-content="
/** 
* Project 1 
* transmitted via props?
*/ 
see the project"
        header-content="Technologies Used 2, 155 commits"
        class="terminal-size" />
      <TerminalWindow
        pre-content="
/** 
* Project 2 
* transmitted via props!
*/ 
see the project"
        header-content="Technologies Used 7, 345 commits"
        class="terminal-size" />
    </div>
  </div>
</template>

<script>
  import TerminalWindow from '@/vue/components/TerminalWindow.vue';

  export default {
    components: {
      TerminalWindow,
    },
    name: 'ProjectPage',
    props: {
      project: {
        type: Object,
        default: () => {
          return { title: '// Top projects' };
        },
      },
    },
  };
</script>

<style scoped>
  .project-page {
    text-align: center;
    /* display: flex; */
    justify-content: center;
  }

  .flex-center {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .terminal-size {
    height: 250px;
    width: 400px;
  }
</style>

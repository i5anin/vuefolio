<template>
  <div class="project-page">
    <h1 class="title">{{ project.title }}</h1>
    <!-- <h2 class="title">Technologies Used</h2>
    <h3 class="title">4, 245 commits</h3> -->
    <div class="flex-center">
      <TerminalWindow class="terminal" />
      <TerminalWindow class="terminal" />
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
  .terminal {
    height: 250px;
    width: 400px;
  }
</style>

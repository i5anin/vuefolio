<template>
  <div class="project-page-container">
    <v-container>
      <h1 class="title">{{ project.title }}</h1>
      <div class="flex-center">
        <ShowBackend
          pre-content="
/**
* Project 1
* transmitted via props?
*/
see the project"
          header-content="Technologies Used 2, 155 commits"
          class="terminal-size" />
        <ShowBackend
          pre-content="
/**
* Project 2
* transmitted via props!
*/
see the project"
          header-content="Technologies Used 7, 345 commits"
          class="terminal-size" />

        <ShowFrontend
          img-content=""
          header-content="Technologies Used 2, 345 commits"
          class="terminal-size" />
      </div>
    </v-container>
  </div>
</template>

<script>
  import ShowBackend from '@/components/ShowBackend.vue'
  import ShowFrontend from '@/components/ShowFrontend.vue'

  export default {
    components: {
      ShowBackend,
      ShowFrontend,
    },
    name: 'ProjectPage',
    props: {
      project: {
        type: Object,
        default: () => {
          return { title: '// Top projects' }
        },
      },
    },
  }
</script>

<style scoped>
  .project-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95vh;
  }

  .title {
    display: flex;
    justify-content: center;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .terminal-size {
    height: 250px;
    width: 400px;
  }
</style>

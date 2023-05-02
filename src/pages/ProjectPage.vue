<template>
  <div class="project-page-container">
    <h1 class="title">{{ project.title }}</h1>
    <div class="flex-center">
      <v-row>
        <v-col
          class="col"
          v-for="(tech, index) in techUsed"
          :key="index"
          cols="4">
          <ShowFrontend
            :previewImage="tech.img"
            :header-content="tech.header"
            class="terminal-size" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  import ShowFrontend from '@/components/ShowFrontend.vue'
  import projects from '@/data/projects.json'

  export default {
    data() {
      return {
        techUsed: projects.myProject.techUsed, // define techUsed here
      }
    },
    components: {
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
    width: 370px;
  }

  .col {
    padding: 40px;
  }
</style>

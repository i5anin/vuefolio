<template>
  <div class="project-page">
    <h1 class="title">{{ project.title }}</h1>
    <h2 class="title">Technologies Used</h2>
  </div>
</template>

<script>
  export default {
    name: 'ProjectPage',
    props: {
      project: {
        type: Object,
        default: () => {
          return { title: 'Default Project Title' };
        },
      },
    },
  };
</script>

<style scoped>
  /* Add any additional styling for the component here */
</style>

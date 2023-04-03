<template>
  <div>
    <h1 class="subtitle display-1 mb-4">{{ titleName }}</h1>
    <div class="column" v-for="tech in techStack" :key="tech.name">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <img v-if="tech.img" :src="tech.img" width="60" />
<!--              <img v-else :src="noPictures" width="60" />-->
              <p class="title is-4">{{ tech.name }}</p>
            </div>
          </div>
          <div class="content">
            <p v-if="tech.description">{{ tech.description }}</p>
            <p>
              <a :href="tech.link">{{ tech.link }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // export const noPictures = './assets/no-pictures-2.png'
  export default {
    // name: 'AboutUs',
    props: {
      titleName: String,
      techStack: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style>
  .media-content {
    display: flex;
    align-items: center;
  }
</style>

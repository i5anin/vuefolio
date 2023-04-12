<template>
  <div class="cards">
    <h4 class="subtitle display-1 mb-4">{{ titleName }}</h4>
    <div class="column" v-for="tech in techStack" :key="tech.name">
      <div class="card">
        <div class="media">
          <div class="media-content">
            <v-img
              v-if="tech.img && tech.img !== '' && tech.img !== null"
              :src="tech.img" />
            <v-img v-else :src="noPictures" />
            <p class="title is-4">{{ tech.name }}</p>
            <div class="progress-bar">
              <div class="progress" :style="{ width: tech.knowledge + '%' }">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: tech.knowledge + '%' }"
                  :aria-valuenow="tech.knowledge"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  {{ tech.knowledge }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return { noPictures: '../src/assets/no-pictures.png' }
    },
    name: 'AboutUs',
    props: {
      titleName: String,
      techStack: { type: Array, required: true },
    },
  }
</script>

<style>
  .card {
    outline: 1px solid gray;
    border-radius: 7px;
    box-shadow: 0 0 10px #00d4e766;
    background-color: #0a0d12;
  }

  .column {
    padding: 10px;
    display: flex;
  }

  .title {
    padding: 15px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6em + 0.4vw);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .subtitle {
    display: block;
    width: 100%;
  }

  .media-content {
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 120px;
  }

  .progress {
    height: 2px;
    background-color: #ddd;
    margin-top: 10px;
  }

  .progress-bar {
    height: 100%;
    background-color: #4caf50;
    text-align: center;
    line-height: 10px;
  }
</style>

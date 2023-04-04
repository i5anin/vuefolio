<template>
  <div class="cards">
    <h1 class="subtitle display-1 mb-4">{{ titleName }}</h1>
    <div class="column" v-for="tech in techStack" :key="tech.name">
      <div class="card">
        <div class="card-content">
          <!-- media -->
          <div class="media">
            <div class="media-content">
              <v-img
                v-if="tech.img && tech.img !== '' && tech.img !== null"
                :src="tech.img" />
              <v-img v-else :src="noPictures" />
              <p class="title is-4">{{ tech.name }}</p>
            </div>
          </div>
          <!-- media -->
          <!--          <div class="content">-->
          <!--            <p v-if="tech.description">{{ tech.description }}</p>-->
          <!--            <a :href="tech.link">{{ tech.link }}</a>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return { noPictures: '../src/assets/no-pictures-2.png' }
    },
    // name: 'AboutUs',
    props: {
      titleName: String,
      techStack: { type: Array, required: true },
    },
  }
</script>

<style>
  .card {
    border: 1px solid gray;
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
    font-size: calc(0.6em + 0.4vw); /* размер шрифта зависит от ширины блока */
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
    background-color: #0a0d12;
  }
</style>

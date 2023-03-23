<template>
  <div class="footer">
    <div>
      <a>find me in:</a>
      <!-- <i class="icons bi bi-house-fill"></i> -->
      <!-- <i class="icons bi bi-envelope-fill"></i> -->
      <i class="icons bi bi-github"></i>
      <i class="icons bi bi-youtube"></i>
      <i class="icons bi bi-bootstrap-fill"></i>
    </div>
    <p class="time">
      <i class="icons bi bi-bookmark-heart-fill"></i>{{ currentTime }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentTime: '',
      };
    },
    created() {
      setInterval(() => {
        // Обновляйте свойство данных CurrentTime каждую секунду
        this.currentTime = new Date().toLocaleString();
      }, 1000);
    },
  };
</script>

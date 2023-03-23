<template>
  <div class="footer">
    <div>
      <a class="find-me">find me in:</a>
      <!-- <i class="icons bi bi-house-fill"></i> -->
      <!-- <i class="icons bi bi-envelope-fill"></i> -->
      <a href="https://github.com/i5anin">
        <i class="icons bi bi-github"></i>
      </a>
      <a href="https://www.youtube.com/c/SergeyIsanin">
        <i class="icons bi bi-youtube"></i>
      </a>
      <a href="https://vk.com/i5anin"
        ><i class="icons bi bi-bootstrap-fill"></i>
      </a>
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

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
      <!-- <i class="icons bi bi-bookmark-heart-fill"></i> -->
      {{ currentTime }}
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

<style lang="scss">
  $primary-color: #8b6e34;
  $secondary-color: #6c757d;
  $background-color: #0d1017;
  $text-color: #f5f8ff;

  /* Change color on hover for font-awesome icons */
  .fa:hover {
    color: #ff0000;
    cursor: pointer;
  }

  /* Change color on hover for Bootstrap icons */
  .bi:hover {
    color: $primary-color;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: inherit;
  }

  .icons {
    padding: 5px 10px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0d1017;
    border-top: 1px solid #23282e;
    padding: 10px 0;
    text-align: center;
    height: 50px;
    color: #adb1ba;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 999;
  }

  .find-me {
    padding: 20px;
  }

  .time {
    margin-right: 30px;
  }

  .footer .divider {
    height: 100%;
    // border-left: 1px solid #e7e7e7; /* added to create a vertical line */
    margin-left: 15px; /* added to create an indent */
    margin-right: 15px; /* added to create a gap between the line and the icons */
    flex-shrink: 0; /* added to prevent the element from shrinking */
  }
</style>

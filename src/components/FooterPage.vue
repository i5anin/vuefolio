<template>
  <div id="app">
    <!-- Your existing code here -->

    <!-- New footer bar -->
    <div class="footer">
      <div>
        <i class="bi bi-house-fill"></i>
        <i class="bi bi-envelope-fill"></i>
        <i class="bi bi-youtube"></i>
      </div>
      <div class="divider"></div>
      <p>{{ currentTime }}</p>
    </div>
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
        // Update the currentTime data property every second
        this.currentTime = new Date().toLocaleString();
      }, 1000);
    },
  };
</script>

<style scoped>
  .bi {
    padding: 5px 10px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000000;
    border-top: 1px solid #e7e7e7;
    padding: 10px 0;
    text-align: center;
    height: 50px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center; /* added to vertically center the content */
  }

  .footer p {
    margin-bottom: 0;
    margin-right: 15px;
  }

  .footer .divider {
    height: 100%;
    border-left: 1px solid #e7e7e7; /* added to create a vertical line */
    margin-left: 15px; /* added to create an indent */
    margin-right: 15px; /* added to create a gap between the line and the icons */
    flex-shrink: 0; /* added to prevent the element from shrinking */
  }
</style>

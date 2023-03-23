<template>
  <div id="app">
    <!-- Your existing code here -->

    <!-- New footer bar -->
    <div class="footer">
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

<style>
  /* Your existing styles here */

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding-top: 15px;
    box-sizing: border-box;
    z-index: 999;
  }
</style>

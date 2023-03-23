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

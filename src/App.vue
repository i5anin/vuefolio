<template>
  <div class="isDarkTheme">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
  };
</script>

<style lang="scss">
  @import 'assets/dark-theme';
</style>

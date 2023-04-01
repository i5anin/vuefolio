<template>
  <v-tabs v-model="activeTab" color="primary" centered>
    <v-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tabRoutes[index]"
      exact
      active-class="active-tab"
      class="tab">
      {{ tab }}
    </v-tab>
  </v-tabs>
</template>

<script>
  export default {
    name: 'TabTest',
    data() {
      return {
        tabs: ['_hello', '_about me', '_projects'],
        tabRoutes: ['/', '/about', '/projects'],
        activeTab: 0,
      };
    },
    created() {
      const currentRoute = this.$route.path;
      this.activeTab = this.tabRoutes.indexOf(currentRoute);
    },
    watch: {
      $route(to) {
        const index = this.tabRoutes.indexOf(to.path);
        if (index >= 0) {
          this.activeTab = index;
        }
      },
    },
  };
</script>

<style scoped>
  .tab {
    font-size: 20px;
    text-decoration: none;
    padding: 20px;
  }
  .active-tab {
    color: rgb(255, 140, 0);
    font-weight: bold;
    border-top: 3px solid #ff0000;
    border-right: 1px solid #828282;
    border-left: 1px solid #828282;
    border-bottom: 0px solid #828282;
  }
  .v-tabs__slider {
    background-color: rgb(255, 140, 0) !important;
    height: 3px !important;
  }
</style>

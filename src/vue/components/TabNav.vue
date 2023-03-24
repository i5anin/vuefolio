<template>
  <b-tabs v-model="activeTab">
    <router-link
      class="tab"
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tabRoutes[index]"
      :title="tab">
      <b-tab :class="{ active: activeTab === index }">
        {{ tab }}
      </b-tab>
    </router-link>
  </b-tabs>
</template>

<script>
  export default {
    name: 'TabNav',
    data() {
      return {
        tabs: ['_hello', '_about me', '_projects'],
        tabRoutes: ['/', '/about', '/projects'],
        activeTab: 0,
      };
    },
    mounted() {
      const currentRoute = this.$router.currentRoute.path;
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

<style lang="css">
  .active {
    color: rgb(255, 140, 0);
  }
</style>

<style>
  .b-nav .active {
    background-color: #0074d9;
    color: #fff;
  }
</style>

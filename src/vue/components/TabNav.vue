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
  .tab {
    /* font-family: monospace, Courier; */
    font-size: 20px;

    outline: 1px solid #828282;
    text-decoration: none;
    padding: 10px 50px 10px 40px;
    color: #828282;
  }
  .active {
    color: rgb(255, 140, 0);
    font-weight: bold;
  }
</style>

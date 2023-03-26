<template>
  <b-tabs v-model="activeTab">
    <router-link
      class="tab-container"
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tabRoutes[index]"
      :title="tab">
      <b-tab
        :class="{ active: activeTab === index, inactive: activeTab !== index }">
        {{ tab }}
      </b-tab>
    </router-link>
    <!-- <nav class="tab-nav-container"></nav> -->
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
  .tab-container {
    font-size: 20px;
    /* border-top: 1px solid #828282;
    border-right: 1px solid #828282;
    border-left: 1px solid #828282;
    border-bottom: 1px solid #828282; */
    text-decoration: none;
    /* padding: 10px 80px 10px 70px; */
    /* color: #828282; */
    /* background-color: #202020; */
  }
  .active {
    color: rgb(255, 140, 0);
    font-weight: bold;

    border-top: 3px solid #ff0000;
    border-right: 1px solid #828282;
    border-left: 1px solid #828282;
    border-bottom: 0px solid #828282;

    padding: 10px 80px 10px 70px;
  }

  .inactive {
    /* color: #828282; */
    font-weight: bold;

    border-top: 1px solid #828282;
    border-right: 1px solid #828282;
    border-left: 1px solid #828282;
    border-bottom: 1px solid #828282;

    padding: 10px 80px 10px 70px;
  }

  /* .tab-nav-container {
    padding: 6px;
    position: relative;
  } */

  /* .tab-nav-container::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #828282;
  } */
</style>

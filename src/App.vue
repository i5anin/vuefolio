<template>
  <div>
    <b-tabs v-model="activeTab">
      <router-link
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tabRoutes[index]"
        :title="tab">
        <b-tab
          :class="{ active: activeTab === index }"
          @click="activeTab = index">
          {{ tab }}
        </b-tab>
      </router-link>
    </b-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: ['Home', 'About', 'Projects', 'Contact'],
        tabRoutes: ['/', '/about', '/projects', '/contact'],
        activeTab: 0,
      };
    },
  };
</script>

<style lang="css">
  @import 'assets/normalize.css';
  .active {
    color: rgb(255, 255, 255);
    text-shadow: 0 0 10px #00ffdd;
  }
  .b-nav .active {
    background-color: #0074d9;
    color: #fff;
  }
</style>

<style lang="scss">
  @import 'assets/dark-theme';
</style>

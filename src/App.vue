<template>
  <div>
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
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterPage />
  </div>
</template>

<script>
  import FooterPage from './components/FooterPage.vue';

  export default {
    components: {
      FooterPage,
    },
    data() {
      return {
        tabs: ['Home', 'About', 'Projects', 'Contact'],
        tabRoutes: ['/', '/about', '/projects', '/contact'],
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<style lang="scss">
  @import 'assets/dark-theme';
</style>

<style>
  .b-nav .active {
    background-color: #0074d9;
    color: #fff;
  }
</style>

<style>
  /* styles for the fixed-positioned footer */
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f8f8f8;
    border-top: 1px solid #e7e7e7;
    padding: 10px 0;
    text-align: center;
  }

  .footer p {
    margin-bottom: 0;
  }
</style>

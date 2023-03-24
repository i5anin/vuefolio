<template>
  <div>
    <tab-nav />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterPage />
  </div>
</template>

<script>
  import { BTabs, BTab } from 'bootstrap-vue';
  import TabNav from '@/vue/components/TabNav.vue';
  import FooterPage from '@/vue/components/FooterPage.vue';

  export default {
    components: {
      TabNav,
      FooterPage,
      BTabs,
      BTab,
    },
  };
</script>

<style lang="scss">
  $primary-color: #007bff;
  $secondary-color: #6c757d;
  $background-color: #0d1017;
  $text-color: #ffffff;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }

  .dark-theme {
    background-color: $background-color;
    color: $text-color;
  }

  .title {
    padding: 40px 0 0 0;
  }
</style>

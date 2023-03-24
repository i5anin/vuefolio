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
  // import { BTabs, BTab } from 'bootstrap-vue';
  import TabNav from '@/vue/components/TabNav.vue';
  import FooterPage from '@/vue/components/FooterPage.vue';

  export default {
    components: {
      TabNav,
      FooterPage,
      // BTabs,
      // BTab,
    },
  };
</script>

<style lang="scss">
  $primary-color: #8b6e34;
  $secondary-color: #6c757d;
  $background-color: #0d1017;
  $text-color: #f5f8ff;
  #app {
    font-family: monospace, Courier;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 28px;
  }

  .dark-theme {
    background-color: $background-color;
    color: $text-color;
  }
</style>

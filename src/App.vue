<template>
  <div class="dark-theme">
    <!-- <tab-nav /> -->
    <tab-test />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component class="test-bg" :is="Component" />
      </transition>
    </router-view>
    <FooterPage />
  </div>
</template>

<script>
  // import { BTabs, BTab } from 'bootstrap-vue';
  import TabNav from '@/vue/components/TabNav.vue'
  import TabTest from '@/vue/components/TabTest.vue'
  import FooterPage from '@/vue/components/FooterPage.vue'

  export default {
    components: {
      TabNav,
      TabTest,
      FooterPage,
      // BTabs,
      // BTab,
    },
  }
</script>

<style lang="scss">
  $background-color: #0d1017;

  $primary-color: #8b6e34;
  $secondary-color: #6c757d;
  $background-bg-color: #030405;
  $background-color: #0d1017;
  $text-color: #f5f8ff;

  .test-bg {
    border-top: 1px solid #828282;
    background-color: $background-color;
  }

  #app {
    font-family: monospace, Courier;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // margin-top: 28px;
  }

  .dark-theme {
    background-color: $background-bg-color;
    color: $text-color;
  }
</style>

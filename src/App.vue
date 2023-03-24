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
  import TabNav from '@/vue/components/TabNav.vue';
  import FooterPage from '@/vue/components/FooterPage.vue';

  export default {
    components: {
      TabNav,
      FooterPage,
    },
  };
</script>

<style lang="scss">
  @import 'assets/main';
</style>

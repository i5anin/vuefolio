<template>
  <div class="dark-theme">
    <tab-pages />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component class="page-body" :is="Component" />
      </transition>
    </router-view>
    <FooterPages />
  </div>
</template>

<script>
  import TabPages from '@/components/TabPages.vue'
  import FooterPages from '@/components/FooterPages.vue'

  export default {
    components: {
      TabPages,
      FooterPages,
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

  #app {
    font-family: monospace, Courier;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .page-body {
    //border-top: 1px solid #828282;
    background-color: $background-color;
  }

  .dark-theme {
    background-color: $background-bg-color;
    color: $text-color;
  }
</style>

<template>
  <div>
    <TabNav :tabs="tabs" @tab-selected="onTabSelected" />
    <!-- остальной код -->
  </div>
</template>

<script>
  import TabNav from './components/TabNav.vue';

  export default {
    name: 'App',
    components: {
      TabNav,
    },
    data() {
      return {
        tabs: [
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'contact', label: 'Contact' },
        ],
        activeTab: 'home',
      };
    },
    methods: {
      onTabSelected(tabId) {
        this.activeTab = tabId;
      },
    },
  };
</script>

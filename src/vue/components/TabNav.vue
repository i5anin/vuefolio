<template>
  <v-tabs
    v-model="activeTab"
    background-color="transparent"
    slider-color="#333"
    height="100%"
    width="100%"
    v-if="localTabs.length > 0">
    <v-tab
      v-for="(tab, index) in localTabs"
      :key="index"
      :class="activeTab === tab.id ? 'primary' : ''"
      @click="selectTab(tab)">
      {{ tab.label }}
    </v-tab>
  </v-tabs>
</template>

<script>
  export default {
    name: 'TabNav',
    props: {
      tabs: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        activeTab: '',
      };
    },
    computed: {
      localTabs() {
        if (this.tabs.length === 0) {
          return [];
        }
        return this.tabs.slice();
      },
    },
    methods: {
      selectTab(tab) {
        this.activeTab = tab.id;
        this.$emit('tab-selected', tab.id);
      },
    },
  };
</script>

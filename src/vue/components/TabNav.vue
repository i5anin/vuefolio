<template>
  <v-tabs v-model="activeTab" color="primary" align-with-title ref="tabs">
    <v-tab v-for="(tab, index) in localTabs" :key="index">{{ tab.name }}</v-tab>
    <v-tabs-items v-model="activeTab">
      <v-tab-item v-for="(tab, index) in localTabs" :key="index">
        <v-card>
          <v-card-title>
            <h2>{{ tab.name }}</h2>
          </v-card-title>
          <v-card-text>
            <component v-if="tab.component" :is="tab.component"></component>
            <div v-else>Компонент не найден</div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
  export default {
    name: 'TabNav',
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeTab: 0,
      };
    },
    computed: {
      localTabs() {
        return this.tabs.slice();
      },
    },
    mounted() {
      const items = this.$refs.tabs.items;
      items.forEach((item, index) => {
        item.$el.addEventListener('click', () => {
          this.activeTab = index;
        });
      });
    },
  };
</script>

<template>
  <v-tabs v-model="activeTab" color="primary" align-with-title>
    <v-tab v-for="(tab, index) in tabs" :key="index">{{ tab.name }}</v-tab>
    <v-tabs-items v-model="activeTab">
      <v-tab-item v-for="(tab, index) in tabs" :key="index">
        <v-card>
          <v-card-title>
            <h2>{{ tab.name }}</h2>
          </v-card-title>
          <v-card-text>
            <component :is="tab.component"></component>
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
  };
</script>

<template>
  <v-tabs
    v-model="activeTab"
    color="primary"
    centered
    bg-color="teal-darken-3"
    show-arrows
    slider-color="teal-lighten-3">
    <v-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tabRoutes[index]"
      exact
      active-class="active-tab"
      class="tab">
      {{ tab }}
    </v-tab>
  </v-tabs>
</template>

<script>
  export default {
    name: 'TabTest',
    data() {
      return {
        tabs: ['_hello', '_about me', '_projects'],
        tabRoutes: ['/', '/about', '/projects'],
        activeTab: 0,
      }
    },
    created() {
      const currentRoute = this.$route.path
      this.activeTab = this.tabRoutes.indexOf(currentRoute)
    },
    watch: {
      $route(to) {
        const index = this.tabRoutes.indexOf(to.path)
        if (index >= 0) {
          this.activeTab = index
        }
      },
    },
  }
</script>

<style scoped>
  .tab {
    font-size: 3vw;
    text-decoration: none;
    /*padding: 20px;*/

    /*color: red;*/
    border-top: 1px solid #828282;
    border-right: 1px solid #828282;
    border-left: 1px solid #828282;
    border-bottom: 1px solid #828282;
  }
  .tab:active {
    color: rgb(255, 140, 0) !important;
    font-weight: bold;
    border-top: 3px solid #ff0000;
    border-right: 1px solid #828282;
    border-left: 1px solid #828282;
    border-bottom: 0 solid #828282;
  }
  .v-tabs__slider {
    background-color: rgb(255, 140, 0) !important;
    height: 3px !important;
  }

  /* ---------- 320px - 768px ---------- */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .tab {
      font-size: 2vw;
    }

    /*.v-btn--size-default {*/
    /*  padding: 0 4px;*/
    /*}*/
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .tab {
      font-size: 1.5vw;
    }
  }

  /* ---------- 1024px - 1440px ---------- */
  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .tab {
      font-size: 1.2vw;
    }
  }

  /* ----------  1440px ---------- */
  @media only screen and (min-width: 1440px) {
    .tab {
      font-size: 1vw;
    }
  }
</style>

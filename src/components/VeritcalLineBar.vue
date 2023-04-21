<template>
  <div class="vertical-bar-line">
    <div class="top-space"></div>
    <div class="line"></div>
    <div class="icon-container">
      <a href="https://dribbble.com/" target="_blank">
        <font-awesome-icon :icon="['fab', 'dribbble']" />
      </a>
      <a href="https://www.behance.net/" target="_blank">
        <font-awesome-icon :icon="['fab', 'behance']" />
      </a>
      <a href="https://www.pinterest.com/" target="_blank">
        <font-awesome-icon :icon="['fab', 'pinterest']" />
      </a>
    </div>
    <div class="line"></div>
    <div class="bottom-space"></div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'

  library.add(fab)
  export default {
    components: {
      FontAwesomeIcon,
    },
  }
</script>

<style>
  .vertical-bar-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 30px;
  }

  .top-space {
    flex: 1;
  }

  .bottom-space {
    flex: 1;
  }

  .line {
    width: 2px;
    height: 30%;
    background-color: gray;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 15px; /* добавляем отступ */
  }

  .icon-container img {
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
  }
</style>

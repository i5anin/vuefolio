<template>
  <div class="footer">
    <div>
      <a class="find-me">find me in:</a>
      <a
        v-for="(icon, index) in icons"
        :key="index"
        class="icons"
        :href="icon.link">
        <font-awesome-icon :icon="icon.icon" style="font-size: 1.25em" />
      </a>
    </div>
    <p class="time">
      {{ currentTime }}
    </p>
  </div>
</template>
<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  // import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  library.add(fab)
  export default {
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        currentTime: '',
        icons: [
          {
            icon: ['fab', 'github'],
            link: 'https://github.com/i5anin',
          },
          {
            icon: ['fab', 'youtube'],
            link: 'https://www.youtube.com/c/SergeyIsanin',
          },
          {
            icon: ['fab', 'vk'],
            link: 'https://vk.com/i5anin',
          },
          // {
          //   icon: faCoffee,
          //   link: '#',
          // },
        ],
      }
    },
    created() {
      setInterval(() => {
        // Обновляйте свойство данных CurrentTime каждую секунду
        this.currentTime = new Date().toLocaleString()
      }, 1000)
    },
  }
</script>
<style lang="scss">
  $primary-color: #8b6e34;
  $primary-color-2: #ff8c00;
  $secondary-color: #6c757d;
  $background-color: #0d1017;
  $text-color: #f5f8ff;

  .bi:hover {
    color: $primary-color-2;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: inherit;
  }

  .icons {
    padding: 5px 10px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0d1017;
    border-top: 1px solid #23282e;
    padding: 10px 0;
    text-align: center;
    height: 50px;
    color: #adb1ba;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 999;
  }

  .find-me {
    padding: 20px;
  }

  .time {
    margin-right: 30px;
  }

  .footer .divider {
    height: 100%;
    margin-left: 15px;
    margin-right: 15px;
    flex-shrink: 0;
  }

  /* ---------- 320px ---------- */
  @media only screen and (max-width: 320px) {
    .time {
      display: none;
    }
  }

  /* ---------- 321px - 768px ---------- */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .time {
      display: none;
    }
  }
</style>

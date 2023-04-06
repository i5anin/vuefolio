<template>
  <div class="terminal space shadow">
    <div class="top">
      <div class="btns">
        <span class="header-content">{{ headerContent }}</span>
      </div>
    </div>
    <div class="value">
      <v-img src="../../src/assets/logo.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TerminalWindow',
    props: {
      headerContent: String,
      preContent: String,
    },
  }
</script>

<style lang="scss">
  $primary-color: #8b6e34;
  $secondary-color: #6c757d;
  $background-color: #0d1017;
  $background-ton-color: #0a0d12;
  $text-color: #f5f8ff;

  * {
    margin: 0;
    padding: 0;
  }

  .pre-content {
    font-family: Courier, monospace;
    font-size: 18px;
  }

  .header-content {
    font-size: 18px;
    color: $secondary-color;
    padding-left: 15px;
  }

  .terminal {
    border-radius: 7px;
    position: relative;
  }
  .terminal .top {
    background: $background-color;
    color: $background-ton-color;
    padding: 5px;
    border-radius: 5px 5px 0 0;
  }
  .terminal .btns {
    position: absolute;
    top: 7px;
    left: 5px;
  }
  .terminal .circle {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 15px;
    margin-left: 2px;
    border-width: 1px;
    border-style: solid;
  }
  .terminal .value {
    text-align: left;
    background: $background-ton-color;
    color: rgb(157, 157, 157);
    font-weight: bold;
    padding: 8px;
    overflow: auto;
    width: calc(100% - 30px); /* subtract 23px from width */
    height: calc(100% - 50px); /* subtract 23px from height */
    box-sizing: border-box; /* include padding and border in the height and width calculation */
    position: absolute; /* position absolutely */
    left: 15px; /* offset left by 23px */
    top: 35px; /* offset top by 23px */
    border-radius: 5px;
    border: 1px solid black;
  }
  .space {
    margin: 25px;
  }
  .shadow {
    box-shadow: 0px 0px 10px rgba(0, 212, 231, 0.4);
  }
</style>

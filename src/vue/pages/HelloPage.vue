<template>
  <div class="flex">
    <div>
      <p class="title">Hello! I am</p>
      <h1 class="title">Sergey Isanin</h1>
      <h2 class="crossed-out">Junior front-end developer</h2>
      <h2>I want to be a middle front-end developer</h2>

      <p class="color-blue">// write the code below to continue</p>
      <p class="color-pink">> <span class="underline">w</span>hois</p>
    </div>
    <div>
      <img src="@/assets/test.jpg" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloPage',
  };
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .color-pink {
    color: pink;
  }

  .color-blue {
    color: rgb(161, 255, 242);
  }

  .underline {
    text-decoration: underline;
  }

  .crossed-out {
    text-decoration: line-through;
  }
</style>

<template>
  <div class="about-us">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="display-1 mb-4">About Us</h1>
          <p class="subtitle-1 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            nisl orci. Aliquam vitae neque libero. Vestibulum vel elit vitae
            dolor molestie venenatis.
          </p>
          <p class="subtitle-1 mb-6">
            Etiam non nisl ut est placerat egestas. Cras vel pharetra leo. Duis
            varius magna ut eros lobortis, sed maximus eros tristique.
            Vestibulum et massa sit amet dolor dignissim auctor quis in velit.
          </p>
          <p class="subtitle-1 mb-6">
            Aenean vel elit arcu. Vestibulum ultricies iaculis sapien, eget
            commodo odio molestie vitae.
          </p>
          <v-btn color="primary" large class="mt-10">Learn More</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/About-Us.jpg" height="100%" contain></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs',
  };
</script>

<style>
  .about-us {
    padding: 80px 0;
  }
</style>

<template>
  <div id="app">
    <!-- Main content of the page -->
    <section :style="backgroundStyle" class="my-section">
      <h1>Welcome to My Vue Section</h1>
      <p>This is a simple section with a background image.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeProfile',
  data() {
    return {
      // Dynamically require the image from the assets directory
      backgroundImageUrl: require('@/assets/home_bg.png')
    };
  },
  computed: {
    // Computed property to handle background styling dynamically
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImageUrl})`,  // Correct URL for image
        backgroundSize: 'cover',  // Ensures the image covers the whole section
        backgroundPosition: 'center',  // Centers the image
        backgroundAttachment: 'fixed',  // Makes the image stay fixed when scrolling
        height: '500px',  // Height of the section (can be adjusted)
        color: 'white',  // Text color for contrast
        textAlign: 'center',  // Centers the text
        padding: '20px',  // Padding around the text
      };
    }
  }
};
</script>

<style scoped>
/* Additional styling for the section */
.my-section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
}
</style>

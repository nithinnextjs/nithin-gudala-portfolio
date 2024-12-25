<template>
  <div id="app">
    <!-- Main content of the page -->
    <section :style="backgroundStyle" class="my-section">
      <div class="banner-section">
    <div class="overlay"></div> <!-- Light black overlay -->

    <div class="content">
      <!-- Left Side: Card with text -->
      <div class="text-card">
        <h1>Nithin Gudala</h1>
        <p>Full Stack Developer</p>
      </div>

      <!-- Right Side: Circular Image -->
      <div class="image-container">
        <img src="@/assets/nithin_gudala_profile_pic.jpg" alt="Profile Picture" class="circular-image"> <!-- Replace with your image -->
      </div>
    </div>
  </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeProfile',
  data() {
    return {
      // Dynamically require the image from the assets directory
      backgroundImageUrl: require('@/assets/section_one_ng.jpg')
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
        height: '600px',  // Height of the section (can be adjusted)
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
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
}
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Banner Section */
.banner-section {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 600px; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Light black overlay */
  z-index: 1;
}

/* Content Section */
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  z-index: 2;
}

/* Left Side Text Card */
.text-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  color: black;
  text-align: left;
  width: 45%; /* Adjust width as needed */
}

.text-card h1 {
  margin: 0;
  font-size: 36px;
  font-weight: bold;
}

.text-card p {
  font-size: 18px;
}

/* Right Side Image Container */
.image-container {
  width: 45%; /* Adjust width as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Circular Image */
.circular-image {
  border-radius: 50%;
  width: 75%; /* Adjust size of the circular image */
  height: 50%;
  object-fit: cover;
  border: 4px solid #fff; /* Optional border for the image */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.4); /* Transparent glass effect */
}
</style>

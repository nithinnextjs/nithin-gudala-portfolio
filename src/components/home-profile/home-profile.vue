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

    <section class=".section-carousel mt-5">
      <div class="my-2">
         <!-- Heading with stars and background -->
         <h2 class="heading text-center my-4">
          Technologies That Power My Work
        </h2>
        <!-- Carousel -->
        <div id="skillsCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" v-for="(chunk, index) in iconChunks" :key="index">
              <div class="row justify-content-center">
                <div class="col-3" v-for="(skill, idx) in chunk" :key="idx">
                  <div class="d-flex flex-column align-items-center">
                    <img :src="skill.icon" alt="Skill Icon" class="img-fluid" style="width: 60px; height: 60px;"/>
                    <h6 class="mt-2">{{ skill.name }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#skillsCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#skillsCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
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
      backgroundImageUrl: require('@/assets/section_one_ng.jpg'),
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/html5.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/css3.svg' },
        { name: 'Bootstrap 5', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/bootstrap.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/tailwindcss.svg' },
        { name: 'SASS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/sass.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/angular.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/node-dot-js.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/java.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg' },
        { name: 'NoSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mongodb.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mysql.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/git.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/azure.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/amazonaws.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mongodb.svg' }
      ]
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
    },
     // Split the array into chunks of 4
     iconChunks() {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.skills.length; i += chunkSize) {
        chunks.push(this.skills.slice(i, i + chunkSize));
      }
      return chunks;
    }
  },
  mounted() {
    // Ensuring that the carousel items are laid out properly after the component is mounted
    setTimeout(() => {
      const carousel = document.getElementById('skillsCarousel');
      const carouselItems = carousel.querySelectorAll('.carousel-item');
      carouselItems.forEach(item => item.style.height = 'auto');
    }, 100); // Timeout for layout fix
  },
  created() {
  console.log(this.skills);  // Log skills to check if they are correctly set
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

.heading {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: black; /* White text color for contrast */
  text-align: center;
}

.heading::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Position it just below the text */
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background-color: #fff; /* White underline */
}

.heading::before {
  content: "★ ★ ★";
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  top: -20px; /* Position stars above the heading */
  left: 50%;
  transform: translateX(-50%);
}

/* Styling for the carousel items */
.carousel-item {
  padding: 20px 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%);
}

img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}

/* Background color for the section */
.section-carousel {
  background-color: #333; /* Dark background that contrasts with the icons */
  padding: 40px 0;
}
</style>

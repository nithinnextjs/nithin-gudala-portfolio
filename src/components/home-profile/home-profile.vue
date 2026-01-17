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
            <br>
            <p><b>Sr. Full stack Developer | Senior Frontend Engineer</b></p>
            <br>
            <p>Building Secure, Scalable, and Stunning Digital Experiences</p>
            <br>
          </div>

          <!-- Right Side: Circular Image -->
          <div class="image-container">
            <img src="@/assets/nithin_gudala_profile_pic.jpg" alt="Profile Picture" class="circular-image"> <!-- Replace with your image -->
          </div>
        </div>
      </div>
    </section>

    <section class="developer-banner" style="padding: 50px 20px; background-color: #f9f9f9; text-align: center;">
  <div class="container" style="max-width: 1200px; margin: auto; display: flex; flex-wrap: wrap; align-items: center;">
    <!-- Text Section (Left) -->
    <div class="text-container left" style="flex: 1; padding: 20px; animation: fadeIn 1.5s ease-in-out;">
      <h2 style="font-size: 1.5rem; color: #ffc107; margin-bottom: 20px;">
        Transforming Ideas Into Scalable Digital Solutions
      </h2>
      <ul style="font-size: 1.2rem; color: #555; list-style: disc; padding-left: 20px;">
        <li style="margin-bottom: 15px;">Expertise in cutting-edge technologies to deliver secure and responsive applications.</li>
        <li style="margin-bottom: 15px;">Tailored solutions to meet unique business needs and challenges.</li>
        <li style="margin-bottom: 15px;">Committed to creating exceptional digital experiences for users.</li>
      </ul>
    </div>

    <!-- Image Section (Center) -->
    <div class="image-container" style="flex: 1; padding: 20px; animation: slideInFromLeft 1.5s ease-in-out;">
      <img src="@/assets/development2.jpg" alt="Full Stack Development" style="width: 100%; max-width: 500px; border-radius: 10px;">
    </div>

    <!-- Text Section (Right) -->
    <div class="text-container right" style="flex: 1; padding: 20px; animation: fadeIn 2s ease-in-out;">
      <h2 style="font-size: 1.5rem; color: #ffc107; margin-bottom: 20px;">
        Innovative Development for Modern Challenges
      </h2>
      <ul style="font-size: 1.2rem; color: #555; list-style: disc; padding-left: 20px;">
        <li style="margin-bottom: 15px;">Delivering scalable, high-performing solutions with a focus on security.</li>
        <li style="margin-bottom: 15px;">Creating visually stunning and user-friendly interfaces.</li>
        <li style="margin-bottom: 15px;">Ensuring backend systems are robust and reliable.</li>
      </ul>
    </div>
  </div>
    </section>

    <!-- Technologies Section -->
    <section class="section-carousel">
      <div class="container my-4">
        <h2 class="heading text-center my-4">Technologies That Power My Work</h2>
        <div id="skillsCarousel" class="carousel slide">
          <div class="carousel-inner">
            <div
              class="carousel-item"
              :class="{ active: index === currentIndex }"
              v-for="(chunk, index) in iconChunks"
              :key="index"
            >
              <div class="row">
                <div class="col-3 text-center" v-for="(skill, idx) in chunk" :key="idx">
                  <img
                    :src="skill.icon"
                    alt="Skill Icon"
                    class="img-fluid"
                    style="width: 60px; height: 60px;"
                  />
                  <h6 class="mt-2">{{ skill.name }}</h6>
                </div>
              </div>
            </div>
          </div>
          <!-- Carousel Controls -->
          <button class="carousel-control-prev" type="button" @click="prevSlide">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" @click="nextSlide">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Work Highlights Section -->
    <section class="section-carousel">
      <div class="my-2">
        <h2 class="heading text-center my-4">Work Highlights</h2>
        <div class="counter-section">
          <div class="counter-card" v-for="counter in counters" :key="counter.id" :style="{ backgroundColor: counter.color }">
          <div class="counter-number">{{ counter.current }} +</div>
         <div class="counter-name">{{ counter.name }}</div>
        </div>
       </div>
      </div>
    </section>

    <!-- Worked Companies Section -->
    <section class="section-carousel">
      <div class="my-2">
        <h2 class="heading text-center my-4">Worked Companies</h2>
        <div class="carousel">
          <div class="carousel-card" v-for="(company, index) in companies" :key="index">
            <img :src="`${company.image}`" alt="company image" class="company-image" />
            <div class="job-details">
              <h3>{{ company.jobTitle }}</h3>
              <p>{{ company.years }}</p>
            </div>
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
      ],
      currentIndex: 0, // Keep track of the current slide
      counters: [
        { id: 1, target: 25, current: 0, name: 'Projects', color:'#fef6e0' },
        { id: 2, target: 10, current: 0, name: 'Experiences', color:'#e8ebed'},
        { id: 3, target: 500, current: 0, name: 'LinkedIn Connections', color:'#f0ecf9' },
        { id: 4, target: 15, current: 0, name: 'Skills', color:'#e7f6f8' }
      ],
      intervalId: null,
      companies: [
        {
          image: require("@/assets/humana.jpg"),
          jobTitle: 'Frontend Developer',
          years: '2018 - 2022'
        },
        {
          image: require("@/assets/hubgroup.jpg"),
          jobTitle: 'UI/UX Designer',
          years: '2020 - 2024'
        },
        {
          image: require("@/assets/educationdept.jpg"),
          jobTitle: 'Software Engineer',
          years: '2017 - 2021'
        },
        {
          image: require("@/assets/humana.jpg"),
          jobTitle: 'Frontend Developer',
          years: '2018 - 2022'
        },
        {
          image: require("@/assets/hubgroup.jpg"),
          jobTitle: 'UI/UX Designer',
          years: '2020 - 2024'
        },
        {
          image: require("@/assets/educationdept.jpg"),
          jobTitle: 'Software Engineer',
          years: '2017 - 2021'
        }
      ]
    };
  },
  mounted() {
    // Ensuring that the carousel items are laid out properly after the component is mounted
    setTimeout(() => {
      const carousel = document.getElementById('skillsCarousel');
      const carouselItems = carousel.querySelectorAll('.carousel-item');
      carouselItems.forEach(item => item.style.height = 'auto');
    }, 100);
    this.startCounters();
    this.startAutoScroll();
  },
  beforeUnmount() {
    this.stopAutoScroll();
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '600px',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      };
    },
    iconChunks() {
      const chunkSize = 5;
      const chunks = [];
      for (let i = 0; i < this.skills.length; i += chunkSize) {
        chunks.push(this.skills.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  methods: {
    startCounters() {
      this.counters.forEach(counter => {
        const interval = setInterval(() => {
          if (counter.current < counter.target) {
            counter.current++;
          } else {
            clearInterval(interval);
          }
        }, 100);
      });
    },
    chunkIcons(size) {
      this.iconChunks = [];
      for (let i = 0; i < this.skills.length; i += size) {
        this.iconChunks.push(this.skills.slice(i, i + size));
      }
    },
    startAutoScroll() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopAutoScroll() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.iconChunks.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.iconChunks.length) % this.iconChunks.length;
    },
  }
};
</script>

<style scoped>
.my-section {
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.banner-section {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  z-index: 2;
}

.text-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  color: black;
  text-align: left;
  width: 45%;
}

.text-card h1 {
  margin: 0;
  font-size: 36px;
  font-weight: bold;
}

.text-card p {
  font-size: 18px;
}

.image-container {
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circular-image {
  border-radius: 50%;
  width: 75%;
  height: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.heading {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: #ffc107;
  text-align: center;
}

.heading::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background-color: #fff;
}

.heading::before {
  content: "★ ★ ★";
  font-size: 1.5rem;
  color: #ffc107;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

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

.section-carousel {
  padding: 40px 0;
  background-color: #fdfdfd85;
}

.work-highlights {
  text-align: center;
  padding: 30px;
  background-color: #f0f4f8;
}

/* General container styling */
.counter-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px; /* Space between cards */
  padding: 16px;
  height: auto; /* Allow container to adjust its height based on content */
  box-sizing: border-box; /* Include padding in height and width calculations */
}

/* Individual counter card */
.counter-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9; /* Example background color */
  border: 1px solid #ddd; /* Example border */
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 180px; /* Ensures proper sizing */
  text-align: center;
  flex: 0 0 auto; /* Prevent cards from shrinking or expanding */
  max-width: 250px; /* Optional: limits size */
}

/* Text styling */
.counter-number {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

.counter-name {
  font-size: 16px;
  color: #555; /* Example text color */
}

/* Media query for smaller screens (phones) */
@media (max-width: 768px) {
  .counter-section {
    flex-direction: column; /* Stack cards vertically */
    justify-content: flex-start; /* Align items from the top */
    height: auto; /* Ensure the container height adjusts to the content */
  }

  .counter-card {
    width: 100%; /* Make cards take full width */
    max-width: 320px; /* Optional: limits readability width */
    margin-bottom: 16px; /* Space between cards vertically */
  }
}

.worked-companies {
  text-align: center;
  padding: 30px;
  background-color: #f9fafb;
}

.carousel {
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
}

.carousel-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.company-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.job-details {
  margin-top: 10px;
}

.job-details h3 {
  font-size: 18px;
  color: #333;
}

.job-details p {
  font-size: 16px;
  color: #777;
}

/* Custom styles for carousel */


.carousel-item .row {
  flex-wrap: nowrap; /* Prevent items from wrapping to the next line */
}

.carousel-item .col-3 {
  flex: 1 0 25%; /* By default show 4 items per slide (for large screens) */
  padding: 10px;
}

@media (max-width: 1200px) {
  .carousel-item .col-3 {
    flex: 1 0 33%; /* 3 items per slide on medium screens */
  }
}

@media (max-width: 992px) {
  .carousel-item .col-3 {
    flex: 1 0 50%; /* 2 items per slide on smaller screens */
  }
}

@media (max-width: 576px) {
  .carousel-item .col-3 {
    flex: 1 0 100%; /* 1 item per slide on very small screens */
  }
}

@keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .image-container {
      flex: 1;
      padding: 20px;
      text-align: center;
    }

    .text-container {
      flex: 1;
      padding: 20px;
    }

    h2, ul {
      margin: 0;
      padding: 10px 0;
    }

    h2 {
      color: #2c3e50;
    }

    ul li {
      color: #7f8c8d;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
      .text-container, .image-container {
        flex: none;
        width: 100%;
      }
      .text-container.left {
        order: 1;
      }
      .image-container {
        order: 2;
      }
      .text-container.right {
        order: 3;
      }
    }

    /* Responsive Design */
    @media (min-width: 1400px) {
      .container {
        flex-direction: column;
        width:100% !important
      }
      .text-container, .image-container {
        flex: none;
        width: 100%;
      }
    }
</style>

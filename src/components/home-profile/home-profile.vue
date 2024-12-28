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

    <!-- Technologies Section -->
    <section class="section-carousel mt-5">
      <div class="my-2">
        <h2 class="heading text-center my-4">Technologies That Power My Work</h2>
        <div id="skillsCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" v-for="(chunk, index) in iconChunks" :key="index">
              <div class="row justify-content-center">
                <div class="col-3" v-for="(skill, idx) in chunk" :key="idx">
                  <div class="d-flex flex-column align-items-center">
                    <img :src="skill.icon" alt="Skill Icon" class="img-fluid" style="width: 60px; height: 60px;" />
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

    <!-- Work Highlights Section -->
    <section class="section-carousel mt-5">
      <div class="my-2">
        <h2 class="heading text-center my-4">Work Highlights</h2>
        <div class="counter-section">
          <div class="counter-card" v-for="counter in counters" :key="counter.id">
            <div class="counter-number">{{ counter.current }} +</div>
            <div class="counter-name">{{ counter.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Worked Companies Section -->
    <section class="section-carousel mt-5">
      <div class="my-2">
        <h2 class="heading text-center my-4">Worked Companies</h2>
        <div class="carousel">
          <div class="carousel-card" v-for="(company, index) in companies" :key="index">
            <img :src="company.image" alt="company image" class="company-image" />
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
      counters: [
        { id: 1, target: 25, current: 0, name: 'Projects' },
        { id: 2, target: 10, current: 0, name: 'Experiences' },
        { id: 3, target: 500, current: 0, name: 'LinkedIn Connections' },
        { id: 4, target: 15, current: 0, name: 'Skills' }
      ],
      companies: [
        {
          image: 'https://via.placeholder.com/150',
          jobTitle: 'Frontend Developer',
          years: '2018 - 2022'
        },
        {
          image: 'https://via.placeholder.com/150',
          jobTitle: 'UI/UX Designer',
          years: '2020 - 2024'
        },
        {
          image: 'https://via.placeholder.com/150',
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
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.skills.length; i += chunkSize) {
        chunks.push(this.skills.slice(i, i + chunkSize));
      }
      return chunks;
    }
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
    }
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
  color: black;
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
  color: #fff;
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
}

.work-highlights {
  text-align: center;
  padding: 30px;
  background-color: #f0f4f8;
}

.counter-section {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.counter-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
}

.counter-number {
  font-size: 36px;
  font-weight: bold;
  color: #2f7b9e;
}

.counter-name {
  font-size: 18px;
  color: #555;
  margin-top: 10px;
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
</style>

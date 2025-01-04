<template>
   <!-- Banner Section -->
   <div class="banner"
    style="width: 100%; height: 300px; background-color: #f4f4f4; text-align: center; display: flex; justify-content: center; align-items: center;">
    <h1>Experience</h1>
  </div>
  <div class="container my-5 page-container">
    <section id="work-experience page-container">
    <div class="experience-list">
      <div
        v-for="(experience, index) in workExperiences"
        :key="index"
        class="experience-card"
      >
        <!-- Card: Two Sections Side by Side -->
        <div class="card-content">
          <!-- Left Section: Message (Text) -->
          <div class="card-text">
            <h3 class="job-title">{{ experience.title }}</h3>
            <p class="company-name">{{ experience.company }}</p>
            <p class="employment-period">{{ experience.period }}</p>
            <p class="job-description">{{ experience.description }}</p>

            <!-- Read More Button -->
            <button @click="openModal(experience)" class="read-more-btn">Read More</button>
          </div>

          <!-- Right Section: Image -->
          <div class="card-image">
            <img :src="`${experience.image}`" alt="Job Image" />
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Modal -->
    <Modal :is-visible="isModalVisible" @close="closeModal">
      <div>
        <h3>{{ selectedExperience?.title }}  <img :src="selectedExperience?.image" alt="Job Image" class="modal-image" /></h3>
        <p class="company-name">{{ selectedExperience?.company }}</p>
        <p class="employment-period">{{ selectedExperience?.period }}</p>
        <p class="job-description">{{ selectedExperience?.description }}</p>
        <div v-html="selectedExperience.modeldescription"></div>
      </div>
    </Modal>
  </section>
   <!-- Background Falling Icons -->
   <div class="background-icons">
      <div class="falling-icon" v-for="icon in icons" :key="icon.class" :style="getRandomPositionStyle()">
        <i :class="icon.class"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/modelDetails.vue';

export default {
  name: "ExperienceDetails",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      selectedExperience: null,
      workExperiences: [
        {
          title: "Sr. Full Stack Developer",
          company: "Hub Group",
          period: "May 2024 - Present",
          description: "Developed and maintained responsive websites using Vue.js.",
          modeldescription: `
            <p>&#9679; Developing UI components using Vue.js with Redux store management.</p>
            <p>&#9679; Implemented 100+ reusable components using styling libraries.</p>
            <p>&#9679; Writing clean, well-documented, and maintainable code in Node.js.</p>
            <p>&#9679; Collaborating with developers, designers, and stakeholders to translate requirements into technical solutions.</p>
            <p>&#9679; Unit testing code to ensure components function as designed.</p>
            <p>&#9679; Conducting integration and system testing to identify and resolve issues before deployment.</p>
            <p>&#9679; Debugging and troubleshooting existing code to maintain application functionality and performance.</p>
          `,
          image: require("@/assets/hubgroup.jpg"),
        },
        {
          title: "Sr. Full Stack Developer",
          company: "U.S. Department of Education",
          period: "May 2023 - May 2024",
          description: "Assisted in building dynamic web applications using HTML, CSS, JavaScript.",
          modeldescription: `
          <p>&#9679; Developed UI components using React.js, Vue.js, and AngularJS with Redux store management.</p>
          <p>&#9679; Implemented 100+ reusable components with Tailwind CSS styling library.</p>
          <p>&#9679; Wrote clean, well-documented, and maintainable code using .NET and Java 17 programming languages.</p>
          <p>&#9679; Collaborated with developers, designers, and stakeholders to understand project requirements and translate them into technical solutions.</p>
          <p>&#9679; Unit tested code to ensure individual components function as designed.</p>
          <p>&#9679; Conducted integration and system testing to identify and resolve issues before deployment.</p>
          <p>&#9679; Debugged and troubleshot existing code to maintain application functionality and performance.</p>
        `,
          image: require("@/assets/educationdept.jpg"),
        },
        {
          title: "Sr. Full Stack Developer | Senior Frontend Engineer",
          company: "Humana",
          period: "Feb 2022 - May 2023",
          description: "Worked on developing full-stack applications with React.js and Node.js.",
          modeldescription: `
            <p>&#9679; Developed UI components with React.js, Vue.js, and AngularJS, leveraging Redux for state management.</p>
            <p>&#9679; Implemented 100+ Angular reusable components using Tailwind CSS for consistent styling.</p>
            <p>&#9679; Collaborated with cross-functional teams, including developers, designers, and stakeholders, to understand requirements and deliver technical solutions.</p>
            <p>&#9679; Debugged and troubleshot existing codebases to ensure optimal application performance and functionality.</p>
            <p>&#9679; Built and maintained scalable Redux stores to manage application state effectively.</p>
            <p>&#9679; Integrated third-party APIs and libraries into React.js applications to enhance functionality.</p>
            <p>&#9679; Utilized Git for version control, ensuring efficient team collaboration and code integrity.</p>
            <p>&#9679; Implemented CI/CD pipelines to automate build, test, and deployment processes using tools like Jenkins and GitHub Actions.</p>
            <p>&#9679; Optimized React components and implemented lazy loading to improve application performance.</p>
            <p>&#9679; Conducted code reviews to ensure adherence to best practices and high-quality code standards.</p>
            <p>&#9679; Configured and managed environments for staging and production deployments.</p>
          `,
          image: require("@/assets/humana.jpg"),
        },
      ],
      icons: [
        { class: 'fas fa-graduation-cap' },
        { class: 'fas fa-book' },
        { class: 'fas fa-school' },
        { class: 'fas fa-shoe-prints' },
        { class: 'fas fa-laptop' },
        { class: 'fas fa-globe' },
        { class: 'fas fa-chalkboard-teacher' },
        { class: 'fas fa-pen' },
        { class: 'fas fa-pencil-alt' }
      ], // Array of FontAwesome classes for icons
    };
  },
  methods: {
    openModal(experience) {
      this.selectedExperience = experience;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    getRandomPositionStyle() {
    const randomX = Math.random() * 100; // Random horizontal position (0-100%)
    const randomDelay = Math.random() * 10; // Random animation delay
    const randomRotation = (Math.random() - 0.5) * 60; // Random rotation angle
    const randomDuration = 10 + Math.random() * 5; // Random animation duration

    return {
      left: `${randomX}vw`, // Set left position in viewport units
      top: `-${Math.random() * 100}vh`, // Start position from above the screen
      animationDelay: `${randomDelay}s`, // Random delay for each icon
      animationDuration: `${randomDuration}s`, // Random animation speed
      transform: `rotate(${randomRotation}deg)`, // Random rotation
    };
  }
  }
};
</script>

<style scoped>
/* Custom styling for the education section */
.page-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #f0f0f0; /* Background color */
}

.background-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Icons should appear behind content */
  pointer-events: none; /* Prevents interference with content interaction */
}

.falling-icon {
  position: absolute;
  font-size: 40px;
  animation: fall 10s linear infinite; /* Adjust the fall duration for randomness */
}

.falling-icon i {
  color: #888; /* Icon color */
}

@keyframes fall {
  0% {
    top: -50px;
    opacity: 1;
  }
  100% {
    top: 500vh; /* Fall to the bottom of the screen */
    opacity: 0;
  }
}

.banner {
  background-image: url('@/assets/banner_images.jpg');
  background-size: cover; /* Ensure the image covers the entire div */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image repetition */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.banner-img img {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  width: 100%; /* Make the image take full width of its container */
  height: 250px; /* Set a fixed height for the image */
}

.page-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #f0f0f0; /* Background color */
}

/* Main Section */
#work-experience {
  padding: 20px;
  background-color: #f9f9f9;
}

/* Work Experience List */
.experience-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px; /* Gap between cards */
  margin-top: 20px;
}

/* Experience Card - Two Sections (Message and Image side by side) */
.experience-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row; /* Align sections side by side */
  overflow: hidden;
  padding: 20px;
  transition: transform 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-10px);
}

/* Card Content - Flexbox Layout */
.card-content {
  display: flex;
  justify-content: space-between; /* Space between the text and image sections */
  width: 100%;
  align-items: center;
}

/* Left Section: Message */
.card-text {
  flex: 1; /* Take up available space */
  padding-right: 20px; /* Space between text and image */
}

.job-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

.company-name,
.employment-period {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 5px;
}

.job-description {
  font-size: 1em;
  color: #333;
  margin-bottom: 15px;
}

/* Right Section: Image */
.card-image {
  width: 200px; /* Fixed width for the image */
}

.card-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Read More Button */
.read-more-btn {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.read-more-btn:hover {
  background-color: #0056b3;
}

/* Modal Styling */
.modal-image {
  height: 50px;
  border-radius: 8px;
  margin-top: 10px;
}
</style>

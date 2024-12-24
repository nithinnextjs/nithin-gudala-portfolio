<template>
  <section id="work-experience">
    <h2>Work Experience</h2>
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
            <img :src="experience.image" alt="Job Image" />
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Modal -->
    <Modal :is-visible="isModalVisible" @close="closeModal">
      <div>
        <h3>{{ selectedExperience?.title }}</h3>
        <p class="company-name">{{ selectedExperience?.company }}</p>
        <p class="employment-period">{{ selectedExperience?.period }}</p>
        <p class="job-description">{{ selectedExperience?.description }}</p>
        <img :src="selectedExperience?.image" alt="Job Image" class="modal-image" />
      </div>
    </Modal>
  </section>
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
          title: "Frontend Developer",
          company: "Tech Innovations",
          period: "Jan 2022 - Present",
          description: "Developed and maintained responsive websites using Vue.js.",
          image: "https://via.placeholder.com/400x250?text=Frontend+Developer+Image"
        },
        {
          title: "Web Developer Intern",
          company: "Creative Solutions",
          period: "Jun 2021 - Dec 2021",
          description: "Assisted in building dynamic web applications using HTML, CSS, JavaScript.",
          image: "https://via.placeholder.com/400x250?text=Web+Developer+Image"
        },
        {
          title: "Full Stack Developer",
          company: "Future Tech Ltd.",
          period: "Jan 2020 - May 2021",
          description: "Worked on developing full-stack applications with Vue.js and Node.js.",
          image: "https://via.placeholder.com/400x250?text=Full+Stack+Developer+Image"
        }
      ]
    };
  },
  methods: {
    openModal(experience) {
      this.selectedExperience = experience;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
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
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
}
</style>

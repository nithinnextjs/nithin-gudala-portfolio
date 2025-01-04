<template>
  <!-- Banner Section -->
  <div class="banner"
    style="width: 100%; height: 300px; background-color: #f4f4f4; text-align: center; display: flex; justify-content: center; align-items: center;">
    <h1>My Education</h1>
  </div>

  <!-- Main Container -->
  <div class="container py-5 page-container">

    <!-- Education Section with Banner and Details Side-by-Side -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-5">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">

          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img src="@/assets/education4.jpg" alt="School Banner" class="img-fluid rounded" />
          </div>

          <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">University of Southern Queensland</h5>
            <p class="text-muted">Sydney, Australia</p>
            <p class="mb-2"><strong>Course:</strong> Masters in Information Systems </p>
            <p><strong>Duration:</strong> 2013 - 2015</p>
            <p><strong>Details:</strong> At the University of Southern Queensland, we foster growth through exceptional
              learning and cutting-edge research. As a member of the USQ community, I am driven by the opportunity to
              shape the future through education and innovation.</p>
            <p><strong>Website:</strong> <a href="https://www.unisq.edu.au/" target="_blank">Visit University of
                Southern Queensland</a></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Another Education Section -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-5">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">

          <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">Jawaharlal Nehru Technological University Hyderabad</h5>
            <p><strong class="fw-bold">College campus:</strong> St. Mary's Engineering College</p>
            <p class="text-muted">Hyderabad, India</p>
            <p class="mb-2"><strong>Course:</strong> School</p>
            <p><strong>Duration:</strong> 2007 - 2011</p>
            <p><strong>Details:</strong> The university is renowned for its research in various fields such as
              engineering, computer science, electronics, and biotechnology. It has multiple research centers and
              collaborates with industries and institutions globally.</p>
            <p><strong>Website:</strong> <a href="http://www.smecd.com/" target="_blank">Visit St. Mary's Engineering
                College</a></p>
          </div>

          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img src="@/assets/education2.jpg" alt="School Banner" class="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>

    <!-- Another Education Section -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-5">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">

          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img src="@/assets/education3.jpg" alt="School Banner" class="img-fluid rounded" />
          </div>

          <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">Sri Chaitanya Junior College</h5>
            <p class="text-muted">Hyderabad, India</p>
            <p class="mb-2"><strong>Course:</strong> High School</p>
            <p><strong>Duration:</strong> 2005 - 2007</p>
            <p><strong>Details:</strong> At Sri Chaitanya Junior College, we nurture academic brilliance and foster
              holistic development through quality education. Proud to be part of the Sri Chaitanya Junior College
              community, where knowledge and innovation shape the leaders of tomorrow.</p>
            <p><strong>Website:</strong> <a href="https://srichaitanya.net/" target="_blank">Visit Sri Chaitanya Junior
                College</a></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Another Education Section -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-3">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">

          <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">Geethanjali School</h5>
            <p class="text-muted">Hyderabad, India</p>
            <p class="mb-2"><strong>Course:</strong> High School</p>
            <p><strong>Duration:</strong> 1995 - 2005</p>
            <p><strong>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad,
              offering excellent academic programs with a focus on overall student development.</p>
          </div>

          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img src="@/assets/education1.jpg" alt="School Banner" class="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>

    <!-- Background Falling Icons -->
    <div class="background-icons">
      <div class="falling-icon" v-for="icon in icons" :key="icon.class" :style="getRandomPositionStyle()">
        <i :class="icon.class"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationDetails',
  data() {
    return {
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
  // Generate random styles for each icon's position and animation
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

.education-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner-img img {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  width: 100%; /* Make the image take full width of its container */
  height: 250px; /* Set a fixed height for the image */
}

.school-details {
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%; /* Ensure content doesn't overflow */
  text-align: left;
}

.school-details h5 {
  margin-bottom: 10px;
}

.school-details p {
  font-size: 14px;
  line-height: 1.6;
}

.school-details p strong {
  font-weight: bold;
}

.fw-bold{
  color: #ffc107!important;
}

/* Media Query for Responsive Layout */
@media (min-width: 768px) {
  .education-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .school-details {
    max-width: 50%; /* Limit the width of the details */
  }

  .banner-img {
    max-width: 50%; /* Limit the width of the banner */
  }
}

/* Responsive Styles for Mobile */
@media (max-width: 767px) {
  .school-details {
    padding: 15px;
  }
  .banner-img img {
    height: 200px; /* Adjust height of the banner image for mobile */
  }
}
</style>

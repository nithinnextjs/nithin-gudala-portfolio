<template>
    <!-- Banner Section -->
    <div class="banner" style="width: 100%; height: 300px; background-color: #f4f4f4; text-align: center; display: flex; justify-content: center; align-items: center;">
    </div>
  <div class="container py-5">
    <!-- Education Heading Section -->
    <h1 class="text-center mb-4">My Education</h1>

    <!-- Education Section with Banner and Details Side-by-Side -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-5">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">
          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img 
              src="@/assets/education4.jpg"
              alt="School Banner"
              class="img-fluid rounded"
            />
          </div>

          <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">Geethanjali School</h5>
            <p class="text-muted">Hyderabad, India</p>
            <p class="mb-2"><strong>Course:</strong> High School</p>
            <p><strong>Duration:</strong> 2002 - 2005</p>
            <p><strong>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p>
          </div>
        </div>
      </div>
    </div>

       <!-- Education Section with Banner and Details Side-by-Side -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-5">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">
         <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">Geethanjali School</h5>
            <p class="text-muted">Hyderabad, India</p>
            <p class="mb-2"><strong>Course:</strong> High School</p>
            <p><strong>Duration:</strong> 2010 - 2015</p>
            <p><strong>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p>
          </div>
          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img 
              src="@/assets/education3.jpg"
              alt="School Banner"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>

       <!-- Education Section with Banner and Details Side-by-Side -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-5">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">
          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img 
              src="@/assets/education2.jpg"
              alt="School Banner"
              class="img-fluid rounded"
            />
          </div>

          <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">Geethanjali School</h5>
            <p class="text-muted">Hyderabad, India</p>
            <p class="mb-2"><strong>Course:</strong> High School</p>
            <p><strong>Duration:</strong> 2010 - 2015</p>
            <p><strong>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p>
          </div>
        </div>
      </div>
    </div>

    
       <!-- Education Section with Banner and Details Side-by-Side -->
    <div class="row justify-content-center">
      <div class="col-md-10 mb-3">
        <div class="education-section d-flex flex-column flex-lg-row align-items-center">
            <!-- School Details -->
          <div class="school-details ms-lg-4">
            <h5 class="fw-bold">Geethanjali School</h5>
            <p class="text-muted">Hyderabad, India</p>
            <p class="mb-2"><strong>Course:</strong> High School</p>
            <p><strong>Duration:</strong> 2010 - 2015</p>
            <p><strong>Details:</strong> Geethanjali School is a well-known educational institution in Hyderabad, offering excellent academic programs with a focus on overall student development.</p>
          </div>

          <!-- Banner Image -->
          <div class="banner-img mb-4 mb-lg-0">
            <img 
              src="@/assets/education1.jpg"
              alt="School Banner"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationDetails',
};
</script>

<style scoped>
/* Custom styling for the education section */
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

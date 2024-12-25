<template>
  <div class="banner-main">
    <!-- Banner Section -->
    <div class="banner" style="width: 100%; height: 300px; background-color: #f4f4f4; text-align: center; display: flex; justify-content: center; align-items: center;">
      <h1>Contact Me</h1>
    </div>

    <!-- Contact Form Section -->
    <div class="container my-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <!-- Card with the form -->
          <div class="card p-4">
            <form @submit.prevent="submitForm" novalidate>
              <!-- First Name -->
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" v-model="form.firstName" required :class="{'is-invalid': errors.firstName}">
                <div v-if="errors.firstName" class="invalid-feedback">{{ errors.firstName }}</div>
              </div>

              <!-- Last Name -->
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" v-model="form.lastName">
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="form.email" required :class="{'is-invalid': errors.email}">
                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
              </div>

              <!-- Phone Number -->
              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" v-model="form.phone" required :class="{'is-invalid': errors.phone}">
                <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
              </div>

              <!-- Reason for Contact -->
              <div class="mb-3">
                <label for="reason" class="form-label">Reason for Contact</label>
                <textarea class="form-control" id="reason" v-model="form.reason" rows="3"></textarea>
              </div>

              <!-- Preferred Contact Type -->
              <div class="mb-3">
                <label for="contactType" class="form-label">Preferred Contact Type</label>
                <select class="form-select" id="contactType" v-model="form.contactType">
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
              </div>

              <!-- Company Name -->
              <div class="mb-3">
                <label for="company" class="form-label">Company Name</label>
                <input type="text" class="form-control" id="company" v-model="form.company">
              </div>

              <!-- Submit Button -->
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div class="modal" tabindex="-1" v-if="showSuccess">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Success!</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <p>Your form has been submitted successfully!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Error Modal -->
    <div class="modal" tabindex="-1" v-if="showError">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Error!</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <p>Something went wrong. Please try again later.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: '',
        contactType: 'Email',
        company: ''
      },
      errors: {},
      showSuccess: false,
      showError: false
    };
  },
  methods: {
    // Validate form fields
    validateForm() {
      this.errors = {};
      let valid = true;

      // Validate first name (no special characters)
      const nameRegex = /^[a-zA-Z ]+$/;
      if (!this.form.firstName || !nameRegex.test(this.form.firstName)) {
        this.errors.firstName = 'First name is required and should contain only letters and spaces.';
        valid = false;
      }

      // Validate phone number (numbers only)
      const phoneRegex = /^[0-9]+$/;
      if (!this.form.phone || !phoneRegex.test(this.form.phone)) {
        this.errors.phone = 'Phone number is required and should only contain numbers.';
        valid = false;
      }

      // Validate email
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!this.form.email || !emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address.';
        valid = false;
      }

      return valid;
    },

    // Handle form submission
    submitForm() {
      if (this.validateForm()) {
        // Simulate API submission
        setTimeout(() => {
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
          }, 2000);
        }, 500);
      } else {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 2000);
      }
    },

    // Close modal
    closeModal() {
      this.showSuccess = false;
      this.showError = false;
    }
  }
};
</script>

<style scoped>
/* Custom Styles */
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

.banner-main {
  width: 100%;
  background: linear-gradient(45deg, #000, #555, #000, #555); /* Black and gray gradient */
  background-size: 200% 200%;
  animation: gradientAnimation 5s ease infinite; /* Animate the background gradient */
  color: white;
}

/* Gradient Animation */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Fade-in effect for form card */
.card {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

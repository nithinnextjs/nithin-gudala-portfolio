<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- Navbar Brand with Logo -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/NithinGudala_logo.png" alt="Logo" class="logo" />
      </a>

      <!-- Navbar Toggle Button (for mobile) -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Resume" class="nav-link">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/education" class="nav-link">Education</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/experience" class="nav-link">Experiences</router-link>
          </li>
        </ul>
      </div>

      <div class="d-flex align-items-center">

        <!-- Resume Download Button -->
        <button class="btn btn-logo ms-3" @click="downloadResume">
          <i class="fas fa-file-pdf me-2"></i> Resume Download
        </button>

        <!-- LinkedIn Button -->
        <a href="https://www.linkedin.com/in/nithin-gudala-8946a0230/" 
           class="btn btn-linkedin ms-3" 
           target="_blank" 
           rel="noopener noreferrer">
          <i class="fab fa-linkedin me-2"></i> LinkedIn
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      selectedFormat: 'pdf',  // Default format
    };
  },
  methods: {
   downloadResume() {
    // Correct the file URL handling
    let fileUrl = require('@/assets/Fullstack_nithin_gudala_resume.docx');  // Use 'require' to get the asset
    fileUrl = fileUrl.default || fileUrl;  // Access the URL string (in case of Webpack's object structure)
    this.triggerDownload(fileUrl);
  },

  triggerDownload(fileUrl) {
    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileUrl.split('/').pop();  // Extract the file name from the URL
    document.body.appendChild(a);  // Append anchor to DOM
    a.click();  // Simulate the click to trigger the download
    document.body.removeChild(a);  // Clean up by removing the anchor element
  }
  }
}
</script>

<style scoped lang="scss">
/* Scoped Styles */
nav {
  .logo {
    width: 150px;  /* Adjust logo size */
    height: auto;
  }

  /* Customize navbar item spacing */
  .navbar-nav .nav-item {
    margin-left: 1rem; /* Space between items */
  }

  /* Center the nav items */
  .navbar-nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  /* Customize navbar appearance */
  .navbar {
    padding: 1rem;
  }

  /* Active Link Customization */
  .nav-item.active .nav-link {
    font-weight: bold;
    color: #f8f9fa; /* Light color for active link */
  }

  /* Customize Resume Download button background color */
  .btn-logo {
    background-color: #1d4ed8; /* Example color matching your logo */
    border: none;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    color: white;
    transition: background-color 0.3s ease;
  }

  .btn-logo:hover {
    background-color: #2563eb; /* Darker shade on hover */
  }

  /* Customize LinkedIn button background color */
  .btn-linkedin {
    background-color: #0077b5; /* LinkedIn blue */
    border: none;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    color: white;
    transition: background-color 0.3s ease;
  }

  .btn-linkedin:hover {
    background-color: #005a8a; /* Darker LinkedIn blue on hover */
  }

  /* Adjust button spacing */
  .ms-3 {
    margin-left: 1rem;
  }
}
</style>

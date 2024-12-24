<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- Navbar Brand with Logo -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/nithin_logo.jpg" alt="Logo" class="logo" />
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
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/experience">Experiences</a>
          </li>
        </ul>
      </div>

      <!-- Resume Download Button -->
      <a href="/download" class="btn btn-logo ms-3">
        <i class="fas fa-file-pdf me-2"></i> Resume Download
      </a>

      <!-- LinkedIn Button -->
      <a href="https://www.linkedin.com/in/nithin-gudala/" class="btn btn-linkedin ms-3" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin me-2"></i> LinkedIn
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
};
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


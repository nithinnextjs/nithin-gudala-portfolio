<template>
  <div>
    <!-- Navigation Component -->
    <AppNavigation />

    <main class="">
      <router-view />
    </main>
    <footer class="px-5 py-5 bg-dark text-warning">
          <div class="row">
        <!-- Quick Links -->
        <div class="col-12 col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning"><i class="fas fa-home me-2"></i>Home</a></li>
                <li class="nav-item mb-2"><a href="//about" class="nav-link p-0 text-warning"><i class="fas fa-user me-2"></i>About Me</a></li>
                <li class="nav-item mb-2"><a href="/experience" class="nav-link p-0 text-warning"><i class="fas fa-briefcase me-2"></i>Experience</a></li>
                <li class="nav-item mb-2"><a href="/education" class="nav-link p-0 text-warning"><i class="fas fa-graduation-cap me-2"></i>Education</a></li>
                <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-warning"><i class="fas fa-envelope me-2"></i>Contact Me</a></li>
            </ul>
        </div>

        <!-- Section -->
        <div class="col-12 col-md-3 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="mailto:nithin.gudala22@gmail.com" class="nav-link p-0 text-warning"><i class="fas fa-envelope me-2"></i>Email: nithin.gudala22@gmail.com</a></li>
                <li class="nav-item mb-2"><a href="tel:+16098034040" class="nav-link p-0 text-warning"><i class="fas fa-phone me-2"></i>Phone: 6098034040</a></li>
                <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/nithin-gudala-8946a0230/" class="nav-link p-0 text-warning" target="_blank"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                <li class="nav-item mb-2"><a href="https://www.nithingudala.com" class="nav-link p-0 text-warning" target="_blank"><i class="fas fa-briefcase me-2"></i>Portfolio</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning"><i class="fas fa-map-marker-alt me-2"></i>Location: Chicago, IL</a></li>
            </ul>
        </div>

        <!-- Recent Applications -->
        <div class="col-12 col-md-3 mb-3">
            <h5>Recent Applications Worked</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://www.hubgroup.com/" class="nav-link p-0 text-warning" target="_blank"><i class="fas fa-briefcase me-2"></i>Hub Group</a></li>
                <li class="nav-item mb-2"><a href="https://www.ed.gov/" class="nav-link p-0 text-warning" target="_blank"><i class="fas fa-university me-2"></i>U.S. Department of Education</a></li>
                <li class="nav-item mb-2"><a href="https://www.humana.com/" class="nav-link p-0 text-warning" target="_blank"><i class="fas fa-hospital me-2"></i>Humana</a></li>
                <li class="nav-item mb-2"><a href="https://www.techgene.com/" class="nav-link p-0 text-warning" target="_blank"><i class="fas fa-cogs me-2"></i>TechGene</a></li>
                <li class="nav-item mb-2"><a href="https://www.centerwellpharmacy.com/find-a-location" class="nav-link p-0 text-warning" target="_blank"><i class="fas fa-map-marker-alt me-2"></i>CenterWell Pharmacy</a></li>
            </ul>
        </div>

        <!-- Downloadable Image Cards -->
        <div class="col-12 col-md-3 mb-3">
          <a href="./assets/nithin-visting-card.png" download="nithin-visiting-card.png" class="card text-dark text-decoration-none">
              <img src="./assets/nithin-visting-card.png" class="card-img-top" alt="Card 1 Image">
              <div class="card-body">
                  <p class="card-text">
                      <i class="fas fa-download"></i> Click to download visiting Card.
                  </p>
              </div>
          </a>
      </div>
    </div>


  <div class="d-flex flex-column flex-sm-row py-4 my-4 text-center border-top border-warning">
    <p>&copy; 2025 Company, Inc. All rights reserved.</p>
  </div>
</footer>


  </div>
</template>

<script>
import AppNavigation from '@/components/nav-bar/AppNavigation.vue'

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style scoped lang="scss">
 .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }

      footer {
  background-color: black;
  color: #ffc107; /* Text color for all elements */
}

footer .nav-link {
  color: #ffc107; /* Links color */
}

footer .btn-warning {
  background-color: #ffc107; /* Button background color */
  color: white; /* Button text color */
}

footer .btn-warning:hover {
  background-color: #e0a800; /* Darker shade of yellow for hover effect */
}

footer .border-warning {
  border-color: #ffc107; /* Border color for the footer */
}

footer .link-warning {
  color: #ffc107; /* Social icons color */
}

footer .link-warning:hover {
  color: #e0a800; /* Hover effect for social icons */
}

footer .me-2 {
  margin-right: 0.5rem; /* Add space between icons and text */
}

/* Media Queries for Responsiveness */
@media (max-width: 767px) {
  footer {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  footer .col-md-2 {
    margin-bottom: 20px;
  }

  footer .col-md-5 {
    margin-left: 0;
    margin-top: 15px;
  }
}


</style>

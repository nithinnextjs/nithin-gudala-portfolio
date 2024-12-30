<template>
  <div>
    <!-- Navigation Component -->
    <AppNavigation />

    <main class="">
      <router-view />
    </main>
<footer class="px-5 py-5 bg-dark text-warning">
  <div class="row">
    <div class="col-6 col-md-2 mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">About</a></li>
      </ul>
    </div>

    <div class="col-6 col-md-2 mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">About</a></li>
      </ul>
    </div>

    <div class="col-6 col-md-2 mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-warning">About</a></li>
      </ul>
    </div>

    <div class="col-md-5 offset-md-1 mb-3">
      <form>
        <h5>Subscribe to our newsletter</h5>
        <p class="text-center">Monthly digest of what's new and exciting from us.</p>
        <div class="d-flex flex-column flex-sm-row w-100 gap-2 justify-content-center">
          <label for="newsletter1" class="visually-hidden">Email address</label>
          <input id="newsletter1" type="email" class="form-control" placeholder="Email address">
          <button class="btn btn-warning text-white" type="button">Subscribe</button>
        </div>
      </form>
    </div>
  </div>

  <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-warning">
    <p>&copy; 2024 Company, Inc. All rights reserved.</p>
    <ul class="list-unstyled d-flex">
      <li class="ms-3"><a class="link-warning" href="#"><i class="fas fa-file-pdf me-2"></i>PDF</a></li>
      <li class="ms-3"><a class="link-warning" href="#"><i class="fas fa-file-pdf me-2"></i>PDF</a></li>
      <li class="ms-3"><a class="link-warning" href="#"><i class="fas fa-file-pdf me-2"></i>PDF</a></li>
    </ul>
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

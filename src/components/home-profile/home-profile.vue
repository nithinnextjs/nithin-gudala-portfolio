<template>
  <div>
    <!-- Section 1 - Background Image with Text -->
    <section id="section-one" class="bg-cover bg-center h-screen flex justify-center items-center text-center text-white relative" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
      <div class="overlay-text bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 class="text-4xl font-bold">Nithin Gudala</h1>
        <p class="text-xl">Software Developer</p>
        <p class="text-lg">Experience: 10 Years</p>
      </div>
    </section>

    <!-- Section 2 - Skills Slider -->
    <section class="skills-carousel py-10 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-center text-3xl mb-4">My Skills</h2>

        <div id="skillsSlider" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center">
                <!-- HTML5 -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-html5 skill-icon"></i>
                  <p>HTML5</p>
                </div>
                <!-- CSS3 -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-css3-alt skill-icon"></i>
                  <p>CSS3</p>
                </div>
                <!-- Bootstrap 4 -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-bootstrap skill-icon"></i>
                  <p>Bootstrap 4</p>
                </div>
                <!-- Bootstrap 5 -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-bootstrap skill-icon"></i>
                  <p>Bootstrap 5</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center">
                <!-- Tailwind CSS -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fas fa-tachometer-alt skill-icon"></i>
                  <p>Tailwind CSS</p>
                </div>
                <!-- Material UI -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-react skill-icon"></i>
                  <p>Material UI</p>
                </div>
                <!-- JavaScript -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-js skill-icon"></i>
                  <p>JavaScript</p>
                </div>
                <!-- Java -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-java skill-icon"></i>
                  <p>Java</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center">
                <!-- Node.js -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-node skill-icon"></i>
                  <p>Node.js</p>
                </div>
                <!-- React.js -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-react skill-icon"></i>
                  <p>React.js</p>
                </div>
                <!-- Angular.js -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fab fa-angular skill-icon"></i>
                  <p>Angular.js</p>
                </div>
                <!-- MongoDB -->
                <div class="col-4 col-md-2 text-center">
                  <i class="fas fa-database skill-icon"></i>
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#skillsSlider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#skillsSlider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeProfile",
  data() {
    return {
      backgroundImage: "https://your-image-url.jpg", // Replace with your image URL
    };
  },
};
</script>

<style scoped>
/* Section 1 - Background Image */
#section-one {
  background-size: cover;
  background-position: center;
}

.overlay-text {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

/* Section 2 - Skill Icons */
.skill-icon {
  font-size: 3rem;
  color: #333;
  margin: 0 20px;
  transition: transform 0.3s;
}
.skill-icon:hover {
  transform: scale(1.2);
}

/* Carousel styling */
.carousel-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-control-prev,
.carousel-control-next {
  color: #000;
}
</style>



<template>
  <div>
    <DotLoaders flip="bounce" class="about-one-animation"/>
    <DotLoaders flip="bounce" class="about-one-animation1"/>
    <DotLoaders flip="bounce" class="about-one-animation2"/>
  
    <!-- Content Wrapper -->
    <div class="content-wrapper" style="position: relative; z-index: 2;">
      <!-- Section 1 -->
      <section class="custom-section bg-light">
        <div class="container">
          <div class="row align-items-center">
            <!-- Right Side: Bullet Points -->
            <div class="col-lg-6">
              <div class="container mt-5">
                <h2 class="mb-4 headingtwo text-center">About Me</h2>
              </div>
              <ul class="bullet-points">
                <li v-for="(point, index) in bulletPoints" :key="index">
                  {{ point }}
                </li>
              </ul>
            </div>

            <!-- Left Side: Framed Image -->
            <div class="col-lg-6 text-center">
              <div class="image-frame">
                <img src="@/assets/development2.jpg" alt="Framed Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CircleLoader :numberOfCircles="4" class="about-ones-animations13"/>
      <!-- Section 2 -->
      <section class="custom-section bg-light">
        <div class="container">
          <div class="row align-items-center">
            <!-- Left Side: Framed Image -->
            <div class="col-lg-6 text-center">
              <div class="image-frame">
                <img src="@/assets/development1.jpg" alt="Framed Image" />
              </div>
            </div>

            <!-- Right Side: Bullet Points -->
            <div class="col-lg-6">
              <h2 class="mb-4 headingtwo">Versatility Across Projects</h2>
              <ul class="bullet-points">
                <li v-for="(point, index) in bulletPoints3" :key="index">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CircleLoader :numberOfCircles="4" class="about-ones-animations44"/>
      <CircleLoader :numberOfCircles="4" class="about-ones-animations13"/>
      <CircleLoader :numberOfCircles="4" class="about-ones-animations23"/>
      <!-- Section 3 -->
      <section class="custom-section bg-light">
        <div class="container">
          <div class="row align-items-center">
            <!-- Left Side: Framed Image -->
            <div class="col-lg-6 text-center">
              <div class="image-frame">
                <img src="@/assets/aboutmeone.jpg" alt="Framed Image" />
              </div>
            </div>

            <!-- Right Side: Bullet Points -->
            <div class="col-lg-6">
              <h2 class="mb-4 headingtwo">Skills and Expertise</h2>
              <ul class="bullet-points">
                <li v-for="(point, index) in skillPoints2" :key="index">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <DotLoaders flip="bounce" class="about-one-animation"/>
    <DotLoaders flip="bounce" class="about-one-animation1"/>
    <DotLoaders flip="bounce" class="about-one-animation2"/>
      <!-- Section 4 -->
      <section class="custom-section bg-light">
        <div class="container">
          <div class="row align-items-center">
            <!-- Right Side: Bullet Points -->
            <div class="col-lg-6">
              <h2 class="mb-4 headingtwo">Comprehensive Development Approach</h2>
              <ul class="bullet-points">
                <li v-for="(point, index) in bulletPoints4" :key="index">
                  {{ point }}
                </li>
              </ul>
            </div>

            <!-- Left Side: Framed Image -->
            <div class="col-lg-6 text-center">
              <div class="image-frame">
                <img src="@/assets/development2.jpg" alt="Framed Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import DotLoaders from "../DotLoaders.vue";
import CircleLoader from "../CircleLoader.vue";

export default {
  name: "AboutDetails",
  components: {
    DotLoaders,
    CircleLoader
  },
  data() {
    return {
      bulletPoints: [
        "My name is Nithin Gudala, and I am a seasoned Full Stack Developer with a decade of professional experience in the software development industry.",
        "I hold a Master’s degree in Information Systems, which provided me with a strong foundation in technology and problem-solving.",
        "Over the years, I have contributed to diverse industries such as e-commerce, education, healthcare, automotive, transportation, marketing, and other web-based platforms.",
        "This extensive background has helped me adapt to various business requirements and develop scalable, user-focused applications.",
        "My expertise lies in transforming ideas into robust, efficient, and visually appealing software solutions.",
      ],
      skillPoints2: [
        "With proficiency in modern technologies, I have mastered tools and frameworks essential for full-stack development.",
        "My skill set includes HTML5, CSS3, Bootstrap (4 and 5), Tailwind CSS, AngularJS, and the latest versions of Angular (6, 10, 13, 14).",
        "I am also experienced in React.js, Next.js, and Node.js, enabling me to build dynamic and high-performing applications.",
        "My knowledge extends to front-end frameworks for sleek designs and responsive interfaces, ensuring seamless user experiences.",
        "Additionally, I am adept at implementing backend functionalities and APIs, delivering end-to-end application development.",
      ],
      bulletPoints3: [
        "Throughout my career, I have developed applications for a variety of domains, which enriched my understanding of different workflows and challenges.",
        "From creating engaging e-commerce platforms to developing interactive educational tools and secure healthcare systems, I have embraced versatility in every project.",
        "I am proficient in responsive design, integrating APIs, and ensuring cross-browser compatibility.",
        "My ability to collaborate with diverse teams has enabled me to design innovative solutions tailored to business needs.",
        "In addition to working across diverse domains, I stay up-to-date with emerging technologies and industry trends.",
      ],
      bulletPoints4: [
        "My work is not just limited to coding; I handle the entire lifecycle of software development with precision.",
        "This includes unit testing, continuous integration/continuous deployment (CI/CD) pipelines, and application deployment.",
        "I take pride in ensuring that all aspects of the application meet the highest standards of quality and performance.",
        "My expertise in tools like Sass, Tailwind CSS, and Bootstrap enables me to deliver visually consistent and functional designs.",
        "This comprehensive approach allows me to support clients at every stage of their application development journey.",
      ],
      particlesOptions: {
        particles: {
          number: { value: 80 },
          size: { value: 5, random: true },
          move: { enable: true, speed: 2 },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          color: { value: "#ffc107" },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Main Section */
.custom-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.image-frame {
  border: 5px solid #fff;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: auto;
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bullet-points {
  list-style: disc;
  padding-left: 20px;
}

.bullet-points li {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.headingtwo {
  text-align: center;
  color: #ffc107;
}

::v-deep(#tsparticles) {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}

body,
html {
  margin: 0;
  padding: 0;
}

.about-one-animation{
      position: absolute;
    top: 30%;
    z-index: 9;
    }

.about-one-animation1{
  position: absolute;
top: 28%;
z-index: 9;
}

.about-one-animation2{
  position: absolute;
top: 25%;
z-index: 9;
}

.about-ones-animations44{
position: absolute;
top: 28%;
right: 0;
z-index: 9;
}

.about-ones-animations13{
position: absolute;
top: 30%;
right: 0;
z-index: 9;
}

.about-ones-animations23{
position: absolute;
top: 32%;
right: 0;
z-index: 9;
}

</style>

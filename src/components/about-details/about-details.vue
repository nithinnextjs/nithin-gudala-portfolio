<template>
  <div>
    <section class="custom-section bg-light">
    <!-- Background Design -->

    <div class="container content-wrapper">
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
            <img src="@/assets/development2.jpg" alt="Framed Image">
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="custom-section bg-light">
    <!-- Background Design -->

    <div class="container content-wrapper">
      <div class="row align-items-center">
        <!-- Left Side: Framed Image -->

        <div class="col-lg-6 text-center">
          <div class="image-frame">
            <img src="@/assets/development1.jpg" alt="Framed Image">
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

        <section class="custom-section bg-light">
    <!-- Background Design -->

    <div class="container content-wrapper">
      <div class="row align-items-center">
        <!-- Left Side: Framed Image -->
        <div class="col-lg-6 text-center">
          <div class="image-frame">
            <img src="@/assets/aboutmeone.jpg" alt="Framed Image">
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

  <section class="custom-section bg-light">
    <!-- Background Design -->

    <div class="container content-wrapper">
      <div class="row align-items-center">
        <!-- Left Side: Framed Image -->
           <!-- Right Side: Bullet Points -->
        <div class="col-lg-6">
          <h2 class="mb-4 headingtwo">Comprehensive Development Approach</h2>
          <ul class="bullet-points">
            <li v-for="(point, index) in bulletPoints4" :key="index">
              {{ point }}
            </li>
          </ul>
        </div>

        <div class="col-lg-6 text-center">
          <div class="image-frame">
            <img src="@/assets/development2.jpg" alt="Framed Image">
          </div>
        </div>

      </div>
    </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "AboutDetails",
  data() {
    return {
      bulletPoints: [
        "My name is Nithin Gudala, and I am a seasoned Full Stack Developer with a decade of professional experience in the software development industry.",
        "I hold a Master’s degree in Information Systems, which provided me with a strong foundation in technology and problem-solving.",
        "Over the years, I have contributed to diverse industries such as e-commerce, education, healthcare, automotive, transportation, marketing, and other web-based platforms.",
        "This extensive background has helped me adapt to various business requirements and develop scalable, user-focused applications.",
        "My expertise lies in transforming ideas into robust, efficient, and visually appealing software solutions."
      ],
      skillPoints2: [
        "With proficiency in modern technologies, I have mastered tools and frameworks essential for full-stack development.",
        "My skill set includes HTML5, CSS3, Bootstrap (4 and 5), Tailwind CSS, AngularJS, and the latest versions of Angular (6, 10, 13, 14).",
        " I am also experienced in React.js, Next.js, and Node.js, enabling me to build dynamic and high-performing applications.",
        "My knowledge extends to front-end frameworks for sleek designs and responsive interfaces, ensuring seamless user experiences.",
        "Additionally, I am adept at implementing backend functionalities and APIs, delivering end-to-end application development."
      ],
      bulletPoints3: [
        "Throughout my career, I have developed applications for a variety of domains, which enriched my understanding of different workflows and challenges.",
        "From creating engaging e-commerce platforms to developing interactive educational tools and secure healthcare systems, I have embraced versatility in every project.",
        " I am proficient in responsive design, integrating APIs, and ensuring cross-browser compatibility.",
        "My ability to collaborate with diverse teams has enabled me to design innovative solutions tailored to business needs.",
        "In addition to working across diverse domains, I stay up-to-date with emerging technologies and industry trends.",
        "Whether it's incorporating AI-driven features, leveraging cloud-based solutions, or optimizing performance for modern frameworks, I am committed to ensuring that the applications I build are future-proof and aligned with the latest advancements"
      ],
      bulletPoints4: [
        "My work is not just limited to coding; I handle the entire lifecycle of software development with precision.",
        "This includes unit testing, continuous integration/continuous deployment (CI/CD) pipelines, and application deployment.",
        " I take pride in ensuring that all aspects of the application meet the highest standards of quality and performance.",
        "My expertise in tools like Sass, Tailwind CSS, and Bootstrap enables me to deliver visually consistent and functional designs.",
        "This comprehensive approach allows me to support clients at every stage of their application development journey."
      ]
    };
  },
  methods: {
   
  }
};
</script>

<style scoped>
/* Main Section */
.section{
 padding:20px;
}
.custom-section {
  min-height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden; /* Ensure no content overflows */
}
.background-design {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.content-wrapper {
  position: relative;
  z-index: 3; /* Ensure content is above the background */
}
.image-frame {
  border: 5px solid #fff; /* Frame border */
  border-radius: 50%; /* Circular frame */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Frame shadow */
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
  text-align:center;
  color:#ffc107;
}
</style>

<template>
  <div>
    <section class="custom-section bg-light">
    <!-- Background Design -->

    <div class="container content-wrapper">
      <div class="row align-items-center">
        <!-- Left Side: Framed Image -->
        <div class="col-lg-6 text-center">
          <div class="image-frame">
            <img src="@/assets/development2.jpg" alt="Framed Image">
          </div>
        </div>

        <!-- Right Side: Bullet Points -->
        <div class="col-lg-6">
          <h2 class="mb-4 headingtwo">About Me</h2>
          <ul class="bullet-points">
            <li v-for="(point, index) in bulletPoints" :key="index">
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
          <h2 class="mb-4 headingtwo">About Me</h2>
          <ul class="bullet-points">
            <li v-for="(point, index) in bulletPoints" :key="index">
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

        <section class="custom-section bg-light">
    <!-- Background Design -->

    <div class="container content-wrapper">
      <div class="row align-items-center">
        <!-- Left Side: Framed Image -->
        <div class="col-lg-6 text-center">
          <div class="image-frame">
            <img src="@/assets/development2.jpg" alt="Framed Image">
          </div>
        </div>

        <!-- Right Side: Bullet Points -->
        <div class="col-lg-6">
          <h2 class="mb-4 headingtwo">About Me</h2>
          <ul class="bullet-points">
            <li v-for="(point, index) in bulletPoints" :key="index">
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
          <h2 class="mb-4 headingtwo">About Me</h2>
          <ul class="bullet-points">
            <li v-for="(point, index) in bulletPoints" :key="index">
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

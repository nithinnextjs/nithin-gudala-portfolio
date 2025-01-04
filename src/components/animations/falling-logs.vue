<template>
    <div class="animation-container">
      <div
        class="falling-icon"
        v-for="(icon, index) in icons"
        :key="index"
        :style="{ animationDelay: `${index * 1.5}s` }"
      >
        <!-- FontAwesome Icon -->
        <i :class="icon.class"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FallingIcons',
    data() {
      return {
        icons: [
          { class: 'fas fa-graduation-cap' },  // FontAwesome classes for icons
          { class: 'fas fa-book' },
          { class: 'fas fa-school' },
          { class: 'fas fa-shoe-prints' },
        ], // Add FontAwesome classes for your icons
      };
    },
  };
  </script>
  
  <style scoped>
  .animation-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #f0f0f0; /* Background color */
  }
  
  .falling-icon {
    position: absolute;
    top: -100px; /* Start position of the icon */
    left: calc(50% - 25px); /* Center the icon horizontally */
    animation: fall 5s linear infinite;
  }
  
  .falling-icon i {
    font-size: 50px; /* Adjust icon size */
    color: #333; /* Icon color */
  }
  
  @keyframes fall {
    0% {
      top: -100px;
      opacity: 1;
    }
    100% {
      top: 100vh; /* Fall to the bottom of the screen */
      opacity: 0;
    }
  }
  </style>
  
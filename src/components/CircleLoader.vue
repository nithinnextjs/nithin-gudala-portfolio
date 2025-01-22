<template>
    <div class="circle-loader">
      <div v-for="n in numberOfCircles" :key="n" class="circle"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CircleLoader",
    props: {
      numberOfCircles: {
        type: Number,
        default: 3, // Can be 3 or 4
      },
    },
  };
  </script>
  
  <style scoped>
  .circle-loader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin: auto;
  }
  
  .circle {
    width: 15px;
    height: 15px;
    background-color: #ffc107;
    border-radius: 50%;
    animation: scaleAndMove 1.5s infinite ease-in-out;
  }
  
  .circle:nth-child(1) {
    animation-delay: 0s;
  }
  
  .circle:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  .circle:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  .circle:nth-child(4) {
    animation-delay: 0.9s;
  }
  
  @keyframes scaleAndMove {
    0%, 100% {
      transform: scale(1) translateY(0);
    }
    50% {
      transform: scale(1.5) translateY(-20px);
    }
  }
  </style>
  
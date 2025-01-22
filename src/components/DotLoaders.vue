<template>
    <div class="loader-wrapper">
      <div :class="`dots-loader ${design}`">
        <div v-for="n in 5" :key="n"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DotLoaders",
    props: {
      design: {
        type: String,
        default: "pulse", // Available designs: pulse, bounce, rotate, flip, zigzag
      },
    },
  };
  </script>
  
  <style scoped>
  .loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  
  /* Shared styles for all loaders */
  .dots-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .dots-loader div {
    width: 12px;
    height: 12px;
    border-radius: 50%; /* Default shape: circle */
    background-color: #ffc107;
  }
  
  /* 1. Pulse Animation */
  .dots-loader.pulse div {
    animation: pulse 1.2s infinite ease-in-out;
  }
  .dots-loader.pulse div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .dots-loader.pulse div:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes pulse {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
  
  /* 2. Bounce Animation */
  .dots-loader.bounce div {
    animation: bounce 0.6s infinite ease-in-out;
  }
  .dots-loader.bounce div:nth-child(2) {
    animation-delay: 0.2s;
  }
  .dots-loader.bounce div:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  
  /* 3. Rotate Animation */
  .dots-loader.rotate div {
    position: absolute;
    animation: rotate 1.2s linear infinite;
  }
  .dots-loader.rotate {
    position: relative;
    width: 50px;
    height: 50px;
  }
  .dots-loader.rotate div:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .dots-loader.rotate div:nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
  .dots-loader.rotate div:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* 4. Flip Animation */
  .dots-loader.flip div {
    animation: flip 0.8s infinite linear;
    border-radius: 0; /* Shape: square */
  }
  @keyframes flip {
    0% {
      transform: rotateY(0);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  
  /* 5. Zigzag Animation */
  .dots-loader.zigzag div {
    animation: zigzag 0.8s infinite ease-in-out;
  }
  .dots-loader.zigzag div:nth-child(1) {
    animation-delay: 0s;
  }
  .dots-loader.zigzag div:nth-child(2) {
    animation-delay: 0.3s;
  }
  .dots-loader.zigzag div:nth-child(3) {
    animation-delay: 0.6s;
  }
  @keyframes zigzag {
    0% {
      transform: translateX(0) translateY(0);
    }
    50% {
      transform: translateX(10px) translateY(-10px);
    }
    100% {
      transform: translateX(0) translateY(0);
    }
  }
  </style>
  
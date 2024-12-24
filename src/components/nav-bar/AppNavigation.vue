<template>
  <nav class="flex space-x-4">
    <router-link to="/" class="text-lg">Home</router-link>
    <router-link to="/about" class="text-lg">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
}
</script>

<style scoped lang="scss">
nav {
  @apply flex space-x-4;
}
</style>

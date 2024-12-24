<template>
  <div>
    <!-- Navigation Component -->
    <AppNavigation />

    <main class="p-4">
      <router-view />
    </main>

    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 My Vue App</p>
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
footer {
  background-color: #2d3748; /* Tailwind gray-800 */
}
</style>

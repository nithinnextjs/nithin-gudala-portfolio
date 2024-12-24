<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold">Welcome to the Home Page</h1>
    <div class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    This text size changes with screen size
</div>
    <!-- Download buttons component -->
    <DownloadButtons />
  </div>
</template>

<script>
import DownloadButtons from '@/components/button-download/DownloadButtons.vue'

export default {
  name: 'HomeProfile',
  components: {
    DownloadButtons
  }
}
</script>

<style scoped lang="scss">
</style>

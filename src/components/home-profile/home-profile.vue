<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold">Welcome to the Home Page</h1>

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

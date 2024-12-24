<template>
  <div class="space-x-4 mt-4">
    <a href="/path/to/file1.pdf" download="file1.pdf">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Download PDF</button>
    </a>
    <a href="/path/to/file2.zip" download="file2.zip">
      <button class="bg-green-500 text-white px-4 py-2 rounded">Download ZIP</button>
    </a>
    <a href="/path/to/file3.jpg" download="file3.jpg">
      <button class="bg-red-500 text-white px-4 py-2 rounded">Download Image</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadButtons',
}
</script>

<style scoped lang="scss">
button {
  @apply px-4 py-2 rounded;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.bg-green-500 {
  background-color: #10b981;
}

.bg-red-500 {
  background-color: #ef4444;
}
</style>

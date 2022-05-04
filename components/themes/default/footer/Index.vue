<template>
  <!-- Main footer -->
  <footer
    class="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14"
  >
    <div>Big Moments &copy; {{ currentYear() }}</div>
    <div class="text-sm">
      Made by
      <a
        class="text-blue-400 underline"
        href="https://www.bigmoments.com"
        target="_blank"
        rel="noopener noreferrer"
        >Developer @OpenDurian</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterContent',
  methods: {
    currentYear() {
      const current = new Date();
      return current.getFullYear();
    },
  },
};
</script>

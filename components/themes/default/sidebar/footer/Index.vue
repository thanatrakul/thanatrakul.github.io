<template>
  <div class="flex-shrink-0 p-2 border-t max-h-14">
    <button
      class="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-blue-600 border rounded-md focus:outline-none focus:ring"
    >
      <span>
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </span>
      <span :class="{ 'lg:hidden': !isSidebarOpen }"> Logout </span>
    </button>
  </div>
</template>

<script>
import DefaultLayoutMixin from '@/mixins/defaultLayout.js';

export default {
  name: 'SidebarFooter',
  mixins: [DefaultLayoutMixin],
};
</script>

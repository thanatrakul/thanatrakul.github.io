<template>
  <nav class="flex-1 overflow-hidden hover:overflow-y-auto">
    <ul class="p-2 overflow-hidden">
      <li>
        <a
          href="#"
          class="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
          :class="{ 'justify-center': !isSidebarOpen }"
        >
          <span>
            <svg
              class="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
          <span :class="{ 'lg:hidden': !isSidebarOpen }">Dashboard</span>
        </a>
      </li>
      <!-- Sidebar Links... -->
    </ul>
  </nav>
</template>

<script>
import DefaultLayoutMixin from '@/mixins/defaultLayout.js';

export default {
  name: 'SidebarMenu',
  mixins: [DefaultLayoutMixin],
};
</script>

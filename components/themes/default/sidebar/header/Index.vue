<template>
  <div
    class="flex items-center justify-between flex-shrink-0 p-2"
    :class="{ 'lg:justify-center': !isSidebarOpen }"
  >
    <span
      class="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap"
    >
      <span :class="{ 'text-red-600': !isSidebarOpen }">BIG</span>
      <span v-show="isSidebarOpen" :class="{ 'text-red-400': isSidebarOpen }"
        >-</span
      >
      <span class="text-red-600" :class="{ 'lg:hidden': !isSidebarOpen }"
        >Moments
      </span>
    </span>
    <button class="p-2 rounded-md lg:hidden" @click="toggleSidbarMenu()">
      <svg
        class="w-6 h-6 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import DefaultLayoutMixin from '@/mixins/defaultLayout.js';

export default {
  name: 'SidebarHeader',
  mixins: [DefaultLayoutMixin],
};
</script>

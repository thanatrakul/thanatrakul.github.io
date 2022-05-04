<template>
  <!-- Navbar -->
  <header class="flex-shrink-0 border-b bg-gray-200">
    <div class="flex items-center justify-between p-2">
      <!-- Navbar left -->
      <div class="flex items-center space-x-3">
        <span
          class="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden"
          >BIG</span
        >
        <!-- Toggle sidebar button -->
        <button
          class="p-2 rounded-md focus:outline-none focus:ring"
          @click="toggleSidbarMenu()"
        >
          <svg
            class="w-4 h-4 text-gray-600"
            :class="{
              'transform transition-transform -rotate-180': isSidebarOpen,
            }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Navbar right -->
      <div class="relative flex items-center space-x-3">
        <!-- avatar button -->
        <!-- x-data="{ isProfileOpen: false } -->
        <div class="relative">
          <button
            class="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring"
            @click="isProfileOpen = !isProfileOpen"
          >
            <img
              class="object-cover w-8 h-8 rounded-full"
              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
              alt="Ahmed Kamel"
            />
          </button>
          <!-- green dot -->
          <div
            class="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"
          ></div>
          <div
            class="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"
          ></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DefaultLayoutMixin from '@/mixins/defaultLayout.js';

export default {
  name: 'NavbarContent',
  components: {},
  mixins: [DefaultLayoutMixin],
  data() {
    return {
      isProfileOpen: false,
    };
  },
  methods: {
    onClickOutside(event) {
      // console.log('Clicked outside. Event: ', event);
      this.isProfileOpen = false;
    },
  },
};
</script>

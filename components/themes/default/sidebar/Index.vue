<template>
  <div>
    <!-- Sidebar -->
    <transition>
      <!-- x-transition:enter="transition transform duration-300"
        x-transition:enter-start="-translate-x-full opacity-30  ease-in"
        x-transition:enter-end="translate-x-0 opacity-100 ease-out"
        x-transition:leave="transition transform duration-300"
        x-transition:leave-start="translate-x-0 opacity-100 ease-out"
        x-transition:leave-end="-translate-x-full opacity-0 ease-in" -->
      <aside
        class="h-screen overflow-hidden fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-gray-200 border-r shadow-lg lg:z-auto lg:static lg:shadow-none"
        :class="{
          '-translate-x-full lg:translate-x-0 lg:w-20': !isSidebarOpen,
        }"
      >
        <!-- sidebar header -->
        <Sidebar-Header />

        <!-- Sidebar links -->
        <Sidebar-Menu />

        <!-- Sidebar footer -->
        <Sidebar-footer />
      </aside>
    </transition>
  </div>
</template>

<script>
import SidebarMenu from './menu/Index.vue';
import SidebarHeader from './header/Index.vue';
import SidebarFooter from './footer/Index.vue';
import DefaultLayoutMixin from '@/mixins/defaultLayout.js';

export default {
  name: 'Sidebar',
  components: {
    SidebarMenu,
    SidebarHeader,
    SidebarFooter,
  },
  mixins: [DefaultLayoutMixin],
};
</script>

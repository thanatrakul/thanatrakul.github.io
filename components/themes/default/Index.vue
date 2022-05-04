<template>
  <div
    class="h-screen overflow-hidden flex items-center justify-center"
    style="background: #edf2f7"
  >
    <Sidebar />

    <div class="flex flex-col flex-1 h-full overflow-hidden bg-white">
      <NavbarContent />

      <main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
        <Nuxt />
      </main>

      <FooterContent />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/themes/default/sidebar/Index.vue';
import NavbarContent from '@/components/themes/default/navbar/Index.vue';
import FooterContent from '@/components/themes/default/footer/Index.vue';

export default {
  name: 'ThemeLayout',
  components: {
    Sidebar,
    NavbarContent,
    FooterContent,
  },
};
</script>

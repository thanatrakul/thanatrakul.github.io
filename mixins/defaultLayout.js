export default {
  methods: {
    toggleSidbarMenu(val) {
      return this.$nuxt.$store.commit('toggleSidebar', val);
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    isSidebarOpen: {
      get() {
        return this.$nuxt.$store.state.isSidebarOpen;
      },
      set(val) {
        return this.$nuxt.$store.commit('toggleSidebar', val);
      },
    },
  },
};

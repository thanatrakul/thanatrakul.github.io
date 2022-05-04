export const state = () => ({
  isSidebarOpen: true,
  isLoading: true,
});

export const mutations = {
  toggleSidebar(state) {
    state.isSidebarOpen = !state.isSidebarOpen;
  },
  toggleLoading(state) {
    state.isLoading = !state.isLoading;
  },
};

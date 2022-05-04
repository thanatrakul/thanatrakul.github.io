<template>
  <div
    class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
  >
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <h1>{{ post.title }} - {{ post.slug }}</h1>
        <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }"
          >Home page</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  async asyncData({ $content }) {
    const postsData = await $content('posts').fetch();
    return {
      posts: postsData,
    };
  },
};
</script>

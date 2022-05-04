<template>
  <div
    class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
  >
    <ol>
      <li v-for="post in posts" :key="post.slug">
        <h1>
          {{ post.title }} - {{ post.slug }}
          <NuxtLink
            :to="{ name: 'posts-slug', params: { slug: post.slug } }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >View</NuxtLink
          >
        </h1>
      </li>
    </ol>
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

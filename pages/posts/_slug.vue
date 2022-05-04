<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <hr />

    <div class="">
      <NuxtContent :document="post"></NuxtContent>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostSlug',
  layout: 'default',
  async asyncData({ $content, params }) {
    const postData = await $content('posts', params.slug).fetch();
    return {
      post: postData,
    };
  },
};
</script>

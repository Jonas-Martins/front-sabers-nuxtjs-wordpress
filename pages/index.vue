<template>
  <div>
    <HomeCarousel :postsWP="posts" />
  </div>
</template>

<script>
export default {
  layout: 'menuAbsolute',
  data() {
    return {
      teste: [],
    };
  },
  methods: {},

  async asyncData({ params, $axios }) {
    const posts = await $axios
      .$get("/posts", {
        params: {
          per_page: 12,
        },
      })
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

    return { posts };
  },
};
</script>

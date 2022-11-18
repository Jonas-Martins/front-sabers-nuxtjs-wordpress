<template>
  <div>
    <HomeCarousel :postsWP="posts" />
    <HomeWelcome :postsWelcome="postsWelcome" />
    <HomeBodyPosts :postsBody="postsBody" />
    <HomeCategorieSection :categories="categories" :postCategorie="postCategorie"/>
  </div>
</template>

<script>
export default {
  layout: "menuAbsolute",
  data() {
    return {};
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

    const postsWelcome = await $axios
      .$get("/posts", {
        params: {
          offset: 8,
          per_page: 5,
        },
      })
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

    const postsBody = await $axios
      .$get("/posts", {
        params: {
          per_page: 15,
        },
      })
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

    const categories = await $axios
      .$get("/categories", {})
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

      const postCategorie = await $axios
      .$get("/posts", {
        params: {
          categories: categories[0].id,
          per_page: 4
        },
      })
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

    return { posts, postsWelcome, postsBody, categories, postCategorie };
  },
};
</script>

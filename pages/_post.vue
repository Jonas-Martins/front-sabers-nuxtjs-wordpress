<template>
  <div>
    <template v-if="this.post.length > 0">
      <PostStructure
        :post="this.post[0]"
        :featuredMedia="featuredMedia"
      ></PostStructure>
    </template>
    <template v-else> Página não encontrada </template>
  </div>
</template>

<script>
export default {
  name: "PagePost",
  methods: {
    comentar() {
      this.$axios
        .post("comments", {
          author_name: "Jonas Nuxtjs",
          author_email: "jonas@nuxtjs.com",
          content: "Testando do Nuxtjs",
          post: "79",
        })
        .then((r) => {
          console.log(r);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async asyncData({ params, $axios }) {
    const post = await $axios
      .$get("/posts", {
        params: {
          slug: params.post,
        },
      })
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });
    const featuredMedia =
      post.length > 0
        ? await $axios
            .$get(`/media/${post[0].featured_media}`)
            .then((r) => {
              return r;
            })
            .catch((err) => {
              console.log(err);
            })
        : "";

    // const author = await $axios
    //   .$get(`/users/${post[0].author}`)
    //   .then((r) => {
    //     console.log(r);
    //     return r;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return { post, featuredMedia };
  },
};
</script>

<style>
</style>
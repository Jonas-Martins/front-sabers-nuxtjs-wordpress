<template>
  <div>
    <PostSearch :search="category"/>
    <!-- {{category}} -->
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const category = await $axios
      .$get("/categories", {
        params: {
          slug: params.category,
        },
      })
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

    return { category };
  },
};
</script>

<style>
</style>
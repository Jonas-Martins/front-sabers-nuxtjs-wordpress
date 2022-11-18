<template>
  <div>
    <PostSearch :search="search"/>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const search = await $axios
      .$get("/search", {
        params: {
          search: params.search,
        },
      })
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

    return { search };
  },
};
</script>

<style>
</style>
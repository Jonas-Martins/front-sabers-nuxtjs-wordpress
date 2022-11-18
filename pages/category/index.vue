<template>
  <div>
    <CategoriesStructure :categories="categories"/>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const categories = await $axios
      .$get("/categories", {})
      .then((r) => {
        return r;
      })
      .catch((err) => {
        console.log(err);
      });

    return { categories };
  },
}
</script>

<style>
</style>
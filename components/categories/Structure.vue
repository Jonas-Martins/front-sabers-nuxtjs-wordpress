<template>
  <div style="min-height: 100vh">
    <template v-for="categorie in categories">
      <v-img
        :key="categorie.id"
        v-if="categorie.count > 0"
        height="10vh"
        gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.75)"
        :src="
          categorie.yoast_head_json.og_image
            ? categorie.yoast_head_json.og_image[0].url
            : `https://picsum.photos/1800/720?image=${categorie.id * 10 + 10}`
        "
      >
        <v-container>
          <v-row>
            <v-col style="color: white" cols="6">
              <h2 v-html="categorie.name"></h2>
            </v-col>
            <v-col align-self="center" cols="6" class="d-flex justify-end">
              <v-btn
                nuxt
                :to="`category/${categorie.slug}`"
                :x-small="$vuetify.breakpoint.smAndDown"
                light
                rounded
                ><b>Mais {{ categorie.name }}</b></v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      required: true,
    },
  },
};
</script>

<style>
</style>
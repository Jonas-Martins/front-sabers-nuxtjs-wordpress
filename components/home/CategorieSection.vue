<template>
  <div>
    <v-img
      :height="this.$vuetify.breakpoint.smAndDown ? 'auto' : '380px'"
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.75)"
      :src="categories[0].yoast_head_json.og_image[0].url"
    >
      <v-container>
        <v-row>
          <v-col style="color: white" cols="6">
            <h2 v-html="categories[0].name"></h2>
            <h5>Não deixe de ver também</h5>
          </v-col>
          <v-col align-self="center" cols="6" class="d-flex justify-end">
            <v-btn nuxt :to="`category/${categories[0].slug}`" :x-small="this.$vuetify.breakpoint.smAndDown" light rounded><b>Mais {{categories[0].name}}</b></v-btn>
          </v-col>
          <v-row>
            
          </v-row>
          <v-col
            v-for="post in postCategorie"
            :key="post.id"
            class="d-flex justify-center"
          >
            <v-card
              class="ma-4"
              height="250"
              width="320"
              :to="`${post.slug}`"
              nuxt
            >
              <v-img
                height="100%"
                :src="post.jetpack_featured_media_url"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.20), rgba(0,0,0,.85)"
              >
                <v-card-subtitle
                  class="pb-0"
                  :style="{
                    fontSize: $vuetify.breakpoint.smAndDown ? '10px' : '12px',
                  }"
                  >{{ $date(post.date) }}</v-card-subtitle
                >
                <v-card-title
                  class="pt-0"
                  style="word-break: normal; line-height: 100%"
                  :style="{
                    fontSize: $vuetify.breakpoint.smAndDown ? '13px' : '17px',
                  }"
                  v-html="post.title.rendered"
                ></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      required: true,
    },
    postCategorie: {
      required: true,
    },
  },
};
</script>

<style>
</style>
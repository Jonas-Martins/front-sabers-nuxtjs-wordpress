<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h2>Notícias</h2>
      </v-col>
      <v-col>
        <v-slide-group show-arrows>
          <v-slide-item v-for="post in postsBody" :key="post.id">
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
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    postsBody: {
      required: true,
    },
  },
};
</script>

<style>
</style>
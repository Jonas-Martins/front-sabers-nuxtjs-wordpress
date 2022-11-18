<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Bem-vindo à SABERS.com</h2>
      </v-col>
      <v-col class="pt-0" cols="12" md="6">
        <v-card height="100%" width="100%" :to="`${postsWelcome[0].slug}`" nuxt>
          <v-img
            height="100%"
            :src="postsWelcome[0].jetpack_featured_media_url"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.20), rgba(0,0,0,.85)"
          >
            <v-card-subtitle
              class="pb-0"
              :style="{
                fontSize: $vuetify.breakpoint.smAndDown ? '10px' : '12px',
              }"
              >{{ $date(postsWelcome[0].date) }}</v-card-subtitle
            >
            <v-card-title
              class="pt-0"
              style="word-break: normal; line-height: 100%"
              :style="{
                fontSize: $vuetify.breakpoint.smAndDown ? '13px' : '17px',
              }"
              v-html="postsWelcome[0].title.rendered"
            ></v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col class="pt-0" cols="12" md="6">
        <v-row>
          <template v-for="(post, i) in postsWelcome">
            <v-col cols="6" v-if="i" :key="post.id">
              <v-card height="25vh" width="100%" :to="`${post.slug}`" nuxt>
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
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    postsWelcome: {
      required: true,
    },
  },
};
</script>

<style>
</style>
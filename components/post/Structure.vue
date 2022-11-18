<template>
  <v-container class="pa-0" fluid>
    <v-row dense class="pa-0 ma-0">
      <v-col cols="12" class="pa-0">
        <div>
          <v-img
            :src="featuredMedia.guid.rendered"
            eager
            height="60vh"
            width="100%"
            gradient="to bottom, rgba(0,0,0,.20), rgba(0,0,0,.85)"
          >
            <div
              style="height: 100%; color: white"
              class="d-flex justify-end align-center flex-column"
            >
              <h1
                class="pb-5 px-5"
                :style="
                  $vuetify.breakpoint.smAndDown
                    ? { width: '100%', fontSize: '30px' }
                    : false
                "
                style="width: 62%; font-size: 40px; line-height: 100%"
                v-html="post.title.rendered"
              ></h1>
              <div
                class="d-flex align-start pb-7"
                :style="
                  $vuetify.breakpoint.smAndDown
                    ? { width: '100%', fontSize: '13px' }
                    : false
                "
                style="width: 60%; font-size: 17px"
              >
                <span class="pl-4"
                  ><v-icon :small="$vuetify.breakpoint.smAndDown" color="white"
                    >mdi-calendar-month</v-icon
                  >{{ $date(post.date) }}</span
                >
                <span class="pl-2"
                  ><v-icon :small="$vuetify.breakpoint.smAndDown" color="white"
                    >mdi-account-edit</v-icon
                  >{{ post.yoast_head_json.author }}</span
                >
                <span class="pl-2"
                  ><v-icon :small="$vuetify.breakpoint.smAndDown" color="white"
                    >mdi-tag</v-icon
                  >{{ categories[0].name }}</span
                >
              </div>
            </div></v-img
          >
        </div>
      </v-col>
      <v-col cols="pa-0">
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <v-lazy
                v-model="isActive"
                :options="{
                  threshold: 0.2,
                }"
                min-height="200"
                transition="scroll-y-reverse-transition"
              >
                <!-- <v-card>
                  <v-card-text> -->
                <div v-html="post.content.rendered"></div>
                <!-- </v-card-text>
                </v-card> -->
              </v-lazy>
            </v-col>
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title> <b>Últimas Notícias</b> </v-card-title>
                <div class="px-3 pb-1">
                  <template v-for="lastPost in lastPosts">
                    <v-card
                      :key="lastPost.id"
                      width="100%"
                      height="150"
                      :to="`${lastPost.slug}`"
                      class="mb-3"
                      nuxt
                      v-if="lastPost.id != post.id"
                    >
                      <v-img
                        height="100%"
                        :src="lastPost.jetpack_featured_media_url"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.20), rgba(0,0,0,.85)"
                      >
                        <v-card-subtitle
                          class="pb-0"
                          :style="{
                            fontSize: $vuetify.breakpoint.smAndDown
                              ? '10px'
                              : '12px',
                          }"
                          >{{ $date(lastPost.date) }}</v-card-subtitle
                        >
                        <v-card-title
                          class="pt-0"
                          style="word-break: normal; line-height: 100%"
                          :style="{
                            fontSize: $vuetify.breakpoint.smAndDown
                              ? '13px'
                              : '17px',
                          }"
                          v-html="lastPost.title.rendered"
                        ></v-card-title>
                      </v-img>
                    </v-card>
                  </template>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    post: {
      required: true,
    },
    lastPosts: {
      required: true,
    },
    featuredMedia: {
      default: null,
    },
    categories:{
      default: null,
    }
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style>
</style>
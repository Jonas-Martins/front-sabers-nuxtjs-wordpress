<template>
  <v-container fluid style="height: 100vh; position: relative">
    <v-row v-if="posts.length > 0" style="position: relative">
      <v-col class="pa-0">
        <v-img
          height="100vh"
          eager
          :src="slideInfo.jetpack_featured_media_url"
          gradient="to top right, rgba(0,0,0,.20), rgba(0,0,0,.7)"
        ></v-img>
      </v-col>
      <v-col
        style="position: absolute; height: 100%"
        class="d-flex align-end pa-0"
      >
        <v-row no-gutters>
          <v-col cols="12" class="pl-14" align-self="center">
            <v-list-item three-line class="pa-0">
              <v-list-item-content>
                <v-list-item-action class="my-2">
                  <v-progress-linear
                    style="width: 5%"
                    color="white"
                    rounded
                    value="100"
                  ></v-progress-linear>
                </v-list-item-action>
                <v-list-item-subtitle style="font-size: 15px">{{
                  $date(slideInfo.date)
                }}</v-list-item-subtitle>
                <b style="font-size: 45px; color: white">{{
                  slideInfo.title.rendered
                }}</b>
                <v-list-item-subtitle style="font-size: 13px">{{
                  slideInfo.yoast_head_json.description
                }}</v-list-item-subtitle>
                <v-list-item-action class="mx-0">
                  <v-btn
                    :to="`${slideInfo.slug}`"
                    nuxt
                    x-small
                    outlined
                    color="white"
                    rounded
                    class="pa-4"
                  >
                    Ler Matéria
                  </v-btn>
                </v-list-item-action>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" class="d-flex flex-wrap align-content-end pb-4 px-8">
            <div class="d-flex" style="width: 95vw">
              <v-slide-group>
                <TransitionGroup
                  name="list"
                  tag="div"
                  class="v-slide-group__content"
                >
                  <v-slide-item v-for="(post, i) in posts" :key="post.id">
                    <v-card
                      width="200"
                      height="200"
                      class="ma-3"
                      :to="`${post.slug}`"
                      nuxt
                      :style="{ zIndex: slideOrdem - i + 999 }"
                    >
                      <v-img
                        height="100%"
                        :src="post.jetpack_featured_media_url"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      >
                        <v-card-subtitle class="pb-0" style="font-size: 12px">{{
                          $date(post.date)
                        }}</v-card-subtitle>
                        <v-card-title
                          class="pt-0"
                          style="
                            word-break: normal;
                            line-height: 100%;
                            font-size: 17px;
                          "
                          >{{ post.title.rendered }}</v-card-title
                        >
                      </v-img>
                    </v-card>
                  </v-slide-item>
                </TransitionGroup>
              </v-slide-group>
            </div>
            <div class="d-flex align-center" style="width: 100%">
              <v-btn
                @click="clickLeft"
                outlined
                icon
                color="white"
                x-large
                class="ml-5"
                ><v-icon>mdi-chevron-left</v-icon></v-btn
              >
              <v-btn
                @click="clickRight"
                outlined
                icon
                color="white"
                x-large
                class="mx-5"
                ><v-icon>mdi-chevron-right</v-icon></v-btn
              >
              <v-progress-linear
                style="width: 40%"
                color="white"
                rounded
                :value="slideOrdem * 8.34"
              ></v-progress-linear>
              <b class="mx-5" style="color: white; font-size: 40px">
                {{ slideOrdem }}
              </b>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    postsWP: {
      required: true,
    },
  },
  data() {
    return {
      slideInfo: {},
      slideInfoAnterior: {},
      slideOrdem: 1,
      posts: [],

      progressSlide: 0,
    };
  },
  methods: {
    clickLeft() {
      document.querySelector(".v-slide-group__prev").click();
    },
    clickRight() {
      document.querySelector(".v-slide-group__next").click();
    },

    ordernaSlide(i) {
      this.slideInfoAnterior = this.slideInfo;
      this.slideInfo = this.posts[i];
      this.posts.unshift(this.posts.splice(i, 1)[0]);
    },

    clickCard(i) {
      this.ordernaSlide(i);
      this.slideOrdem = i + 1;
    },

    loopSlide() {
      this.ordernaSlide(0);
      let incrementar = 1;
      const that = this;
      this.progressSlide = setInterval(function () {
        if (incrementar < that.posts.length) {
          that.ordernaSlide(incrementar);
          incrementar++;
        } else {
          that.ordernaSlide(that.posts.length - 1);
          incrementar = that.posts.length;
        }
        that.slideOrdem++;
        if (that.slideOrdem > that.posts.length) {
          that.slideOrdem = 1;
        }
      }, 5000);
    },
  },
  mounted() {
    this.posts = this.postsWP;
    this.loopSlide();
  },
  beforeDestroy() {
    clearInterval(this.progressSlide);
  },
};
</script>

<style>
.list-move {
  transition: all 1s ease;
}

.v-list-item__title,
.v-list-item__subtitle {
  color: white !important;
}
.v-slide-group__next {
  display: none !important;
}
.v-slide-group__prev {
  display: none !important;
}

.v-slide-group__content {
  align-items: flex-end;
  justify-content: flex-end;
}
</style>
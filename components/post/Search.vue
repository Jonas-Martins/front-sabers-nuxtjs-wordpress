<template>
  <v-container style="min-height: 100vh">
    <v-row v-if="search && search.length > 0">
      <v-col cols="12" v-if="$route.params.search">
        <h2>Resultados da pesquisa para: {{ $route.params.search }}</h2>
      </v-col>
      <v-col cols="12" v-if="$route.params.category">
        <h2>Categoria: {{ search[0].name }}</h2>
      </v-col>
      <template v-if="posts.length > 0">

        <v-col class="d-flex justify-center" v-for="post in posts" :key="post.id">
          <v-card height="250" width="100vw" :to="`/${post.slug}`" nuxt>
            <v-img
              height="100%"
              width="100%"
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
    <v-row v-else> Nada encontrado </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    search: {
      default: null,
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async postsSearch() {
      if (this.search && this.search.length > 0) {
        await this.search.forEach((elem) =>
          this.$axios
            .$get(`/posts/${elem.id}`)
            .then((r) => {
              this.posts.push(r);
            })
            .catch((err) => {
              console.log(err);
            })
        );
      }
    },

    async postsCategory() {
      if (this.search && this.search.length > 0) {
        await this.$axios
          .$get("/posts", {
            params: {
              categories: this.search[0].id,
            },
          })
          .then((r) => {
            this.posts = r;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    if (this.$route.params.search) {
      this.postsSearch();
    }
    if (this.$route.params.category) {
      this.postsCategory();
    }
  },
};
</script>

<style>
</style>
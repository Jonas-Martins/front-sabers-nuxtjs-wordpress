<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <h1 style="text-align: center;">{{post.title.rendered}}</h1>
        <span>
          {{$date(post.date)}}|by{{post.yoast_head_json.author}}
        </span>
        <figure>
          <img
            :src="featuredMedia.guid.rendered"
            :alt="featuredMedia.title.rendered"
            width="100%"
          />
        </figure>
        <div v-html="post.content.rendered"></div>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-icon large left> mdi-twitter </v-icon>
            <span class="text-h6 font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            "Turns out semicolon-less style is easier and safer in TS because
            most gotcha edge cases are type invalid as well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
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
    featuredMedia: {
      default: null,
    },
  },
};
</script>

<style>
</style>
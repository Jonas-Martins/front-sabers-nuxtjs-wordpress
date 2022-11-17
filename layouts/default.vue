<template>
  <v-app>
    <TemplateHeader />
    <Nuxt />
    <TemplateFooter />
    <v-btn @click="scrollToTop" dark fixed bottom right fab small>
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

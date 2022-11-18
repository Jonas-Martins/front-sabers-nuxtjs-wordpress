<template>
  <v-app>
    <TemplateHeader :absolute="true"/>
    <Nuxt />
    <TemplateFooter />
    <v-btn @click="scrollToTop" dark fixed bottom right fab small>
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout2",
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

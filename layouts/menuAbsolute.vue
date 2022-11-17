<template>
  <v-app>
    <TemplateHeader :absolute="true"/>
    <Nuxt />
    <TemplateFooter />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout2",
  data() {
    return {};
  },
};
</script>

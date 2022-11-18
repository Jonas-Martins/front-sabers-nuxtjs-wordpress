<template>
  <v-container
    :style="
      absolute ? { position: 'absolute', zIndex: '999', color: 'white' } : false
    "
    fluid
  >
    <v-row
      :justify="this.$vuetify.breakpoint.smAndDown ? 'space-between' : 'center'"
    >
      <v-col
        align-self="center"
        v-if="this.$vuetify.breakpoint.smAndDown"
        cols="1"
        class="py-0"
      >
        <v-app-bar-nav-icon
          x-large
          :dark="absolute"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-navigation-drawer
          height="100vh"
          width="55vw"
          dark
          v-model="drawer"
          absolute
          floating
          temporary
        >
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="text--accent-4">
              <v-list-item nuxt to="/">
                <v-list-item-title>Início</v-list-item-title>
              </v-list-item>

              <v-list-item nuxt to="/category">
                <v-list-item-title>Categorias</v-list-item-title>
              </v-list-item>

              <v-list-item nuxt to="/n">
                <v-list-item-title>Novidades</v-list-item-title>
              </v-list-item>

              <v-list-item nuxt to="/c">
                <v-list-item-title>Contato</v-list-item-title>
              </v-list-item>

              <v-list-item @click="dialog = !dialog" class="mt-16">
                <v-list-item-title
                  >Pesquisar</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-end py-0"
        :class="this.$vuetify.breakpoint.smAndDown ? 'justify-end' : false"
      >
        <b style="font-size: 40px"
          ><NuxtLink
            :style="{
              color: !this.$vuetify.theme.dark && !absolute ? 'black' : 'white',
            }"
            to="/"
            >Sabers</NuxtLink
          ></b
        >
        <v-btn :dark="absolute" icon @click="themeDarkLight">
          <v-icon v-if="$vuetify.theme.dark"
            >mdi-weather-night-partly-cloudy</v-icon
          >
          <v-icon v-else>mdi-weather-partly-cloudy</v-icon>
        </v-btn>
      </v-col>
      <v-col
        v-if="this.$vuetify.breakpoint.mdAndUp"
        cols="6"
        class="d-flex justify-end align-center py-0"
      >
        <v-btn rounded :dark="absolute" class="ml-3" text outlined nuxt to="/">
          Inicio
        </v-btn>
        <v-btn rounded :dark="absolute" class="ml-3" text outlined nuxt to="/category"
          >Categorias</v-btn
        >
        <v-btn rounded :dark="absolute" class="ml-3" text outlined nuxt to="/">
          Novidades
        </v-btn>
        <v-btn rounded :dark="absolute" class="ml-3" text outlined nuxt to="/">
          Contato
        </v-btn>
        <v-btn @click="dialog = !dialog" :dark="absolute" class="ml-3" icon fab
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
        <!-- <div class="d-flex justify-center align-center">
          <v-btn color="blue" icon><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn color="pink" icon><v-icon>mdi-instagram</v-icon></v-btn>
          <v-btn color="light-blue" icon><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn color="red" icon><v-icon>mdi-youtube</v-icon></v-btn>
          <v-btn color="green accent-3" icon><v-icon>mdi-whatsapp</v-icon></v-btn>
        </div> -->
      </v-col>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-btn
          class="mt-3"
          absolute
          x-large
          right
          icon
          dark
          @click="dialog = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <div
          style="height: 100vh; background-color: #000000cc"
          class="d-flex justify-center align-center"
        >
          <div
            :style="{
              width: this.$vuetify.breakpoint.smAndDown ? '80%' : '50%',
            }"
          >
            <v-text-field
              label="Pesquisar"
              v-model="search"
              solo
              append-icon="mdi-magnify"
              rounded
              light
              clearable
              flat
              height="60"
              dense
              outlined
              @click:append="searchClick"
              @keyup.enter="searchClick"
            ></v-text-field>
          </div>
        </div>
      </v-dialog>
      <!-- <v-col v-if="this.$vuetify.breakpoint.mdAndUp" cols="1">
        <v-text-field
          append-icon="mdi-magnify"
          label="Pesquisar"
          solo
          rounded
          :dark="absolute"
          clearable
          flat
          dense
          outlined
          @click:append="true"
        ></v-text-field>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    absolute: {
      typeof: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
      drawer: false,
      group: null,

      search: '',
    };
  },
  methods: {
    themeDarkLight() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    searchClick(){
      this.$nuxt.$options.router.push(`/search/${this.search}`)
      this.search = '',
      this.dialog = false
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.mdi-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
a {
  text-decoration: none;
}
dark {
  color: white !important;
}
light {
  color: black !important;
}
</style>
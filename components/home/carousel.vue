<template>
  <v-container fluid style="height: 100vh">
    <v-row style="position: relative">
      <v-col class="pa-0">
        <Transition name="imgSlide">
          <v-img
            height="100vh"
            position="top"
            eager
            :src="slideInfo.src"
            gradient="to top right, rgba(0,0,0,.20), rgba(0,0,0,.7)"
          ></v-img>
        </Transition>
      </v-col>
      <v-col
        style="position: absolute; height: 100%"
        class="d-flex justify-center align-center pa-0"
      >
        <v-row no-gutters>
          <v-col cols="5" class="pl-14" align-self="center">
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
                  slideInfo.subtitle
                }}</v-list-item-subtitle>
                <b style="font-size: 55px; color: white">{{
                  slideInfo.title
                }}</b>
                <v-list-item-subtitle style="font-size: 13px">{{
                  slideInfo.description
                }}</v-list-item-subtitle>
                <v-list-item-action class="mx-0">
                  <v-btn x-small outlined color="white" rounded class="pa-4">
                    Ler Matéria
                  </v-btn>
                </v-list-item-action>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col
            cols="7"
            class="d-flex flex-wrap align-content-end py-6 pl-8"
            style="height: 100vh; width: 100%"
          >
            <div class="d-flex" style="width: 100%">
              <v-slide-group center-active>
                <TransitionGroup
                  name="list"
                  tag="div"
                  class="v-slide-group__content"
                >
                  <v-slide-item v-for="(img, i) in imgs" :key="img.id">
                    <v-card
                      width="200"
                      height="300"
                      class="ma-3"
                      @click="clickCard(i)"
                      :style="
                        img == slideInfo ? { visibility: 'hidden' } : false
                      "
                    >
                      <v-img
                        height="100%"
                        :src="img.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      >
                        <v-card-subtitle class="pb-0" style="font-size: 12px">{{
                          img.subtitle
                        }}</v-card-subtitle>
                        <v-card-title
                          class="pt-0"
                          style="word-break: normal; line-height: 100%"
                          >{{ img.title }}</v-card-title
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
                style="width: 70%"
                color="white"
                rounded
                :value="slideOrdem * 16.6666666667"
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
  data() {
    return {
      previousButton: "",
      nextButton: "",
      slideInfo: {},
      slideOrdem: 1,
      imgs: [
        {
          id: 1,
          title: "Nagano Prefecture",
          subtitle: "Japan Alps",
          description:
            "Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero",
          link: "teste.com",
          src: "https://www.wallpapertip.com/wmimgs/36-361791_battlefield-1-wallpaper-4k.jpg",
        },
        {
          id: 2,
          title: "Los Lances Beach",
          subtitle: "Japan Alps",
          description:
            "Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero",
          link: "teste.com",
          src: "https://wallpaperaccess.com/full/144795.jpg",
        },
        {
          id: 3,
          title: "Teste2",
          subtitle: "Testando2",
          description:
            "Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero",
          link: "teste.com",
          src: "https://musicnonstop.uol.com.br/wp-content/uploads/2022/02/60-609425_peaky-blinders-wallpapers-group-peaky-blinders-wallpaper-4k.jpg",
        },
        {
          id: 4,
          title: "Los Lances Beach",
          subtitle: "Japan Alps",
          description:
            "Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero",
          link: "teste.com",
          src: "https://files.tecnoblog.net/wp-content/uploads/2017/03/sony-100z9d.jpg",
        },
        {
          id: 5,
          title: "Los Lances Beach",
          subtitle: "Japan Alps",
          description:
            "Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero",
          link: "teste.com",
          src: "https://cdn.clickwallpapers.net/images/clickwallpapers-battlefield4-jogos-4k-img6.jpg",
        },
        {
          id: 6,
          title: "Los Lances Beach",
          subtitle: "Japan Alps",
          description:
            "Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero Mauris malesuda nisi site amet augue accumansa tubdyubt Nacaceys tucudys ac oirtufir oykvurar tort ero falcilis livebero",
          link: "teste.com",
          src: "https://www.oliberal.com/image/contentid/policy:1.386710:1620865680/image.jpg?a=191%3A100&q=0.6&w=1200&$p$a$q$w=e3c1d56",
        },
      ],
    };
  },
  methods: {
    checkNavBtnStatus() {
      this.previousButton = document.querySelector(".v-slide-group__prev");
      this.nextButton = document.querySelector(".v-slide-group__next");
    },
    clickLeft() {
      this.previousButton.click();
      this.checkNavBtnStatus();
    },
    clickRight() {
      this.nextButton.click();
      this.checkNavBtnStatus();
    },

    ordernaSlide(i){
      this.slideInfo = this.imgs[i];
      this.imgs.push(this.imgs.splice(i, 1)[0]);
    },

    clickCard(i) {
      this.ordernaSlide(i);
      this.slideOrdem = i+1
    },

    loopSlide() {
      this.ordernaSlide(0);
      const that = this;
      setInterval(function () {
        that.ordernaSlide(0);
        that.slideOrdem++;
        if(that.slideOrdem > that.imgs.length){
          that.slideOrdem = 1;
        }
      }, 5000);
    },
  },
  mounted() {
    this.checkNavBtnStatus();
    this.loopSlide();
  },
};
</script>

<style>
.imgSlide-enter-active,
.imgSlide-leave-active {
  transition: transform 1s;
}
.imgSlide-enter,
.imgSlide-leave-to {
  transform: scale(0);
}

.imgSlide-leave,
.imgSlide-enter-to {
  transform: scale(1);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: transform 1.5s;
}
.list-leave-active {
  position: absolute;
}

.v-list-item__title,
.v-list-item__subtitle {
  color: white !important;
}
.v-slide-group__next {
  display: none;
}
.v-slide-group__prev {
  display: none;
}
</style>
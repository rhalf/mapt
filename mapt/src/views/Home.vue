<template>
  <v-container>
    <v-sheet max-width="1080" class="mx-auto">
      <v-container>
        <v-row>
          <v-col>
            <v-fade-transition hide-on-leave>
              <v-carousel
                cycle
                show-arrows-on-hover
                max-width="1080"
                height="200"
                hide-delimiter-background
                hide-delimiter
                interval="5000"
                reverse-transition="slide-x-transition"
                transition="slide-x-transition"
              >
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-fade-transition>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-container style="height: 2000px">
              <v-slide-x-transition>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  vel sapien vel urna porta rhoncus et sit amet sapien. Quisque
                  cursus sapien vel nisl congue consectetur. Cras eu feugiat
                  sapien. Pellentesque at dignissim nunc. Aenean id nisi in
                  justo semper lobortis. Morbi sed erat eget sapien scelerisque
                  congue. Morbi eu est rutrum, consectetur dolor et, lacinia
                  justo. Nulla facilisi. Nullam felis odio, posuere eu lorem sit
                  amet, dignissim consequat turpis. Mauris rhoncus luctus
                  fermentum. Fusce consectetur, odio eu pretium aliquet, dui leo
                  tempus justo, sed rutrum velit nunc quis eros. Fusce libero
                  massa, finibus ac auctor venenatis, molestie in urna.
                </p>
              </v-slide-x-transition>
              <v-slide-x-transition>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  vel sapien vel urna porta rhoncus et sit amet sapien. Quisque
                  cursus sapien vel nisl congue consectetur. Cras eu feugiat
                  sapien. Pellentesque at dignissim nunc. Aenean id nisi in
                  justo semper lobortis. Morbi sed erat eget sapien scelerisque
                  congue. Morbi eu est rutrum, consectetur dolor et, lacinia
                  justo. Nulla facilisi. Nullam felis odio, posuere eu lorem sit
                  amet, dignissim consequat turpis. Mauris rhoncus luctus
                  fermentum. Fusce consectetur, odio eu pretium aliquet, dui leo
                  tempus justo, sed rutrum velit nunc quis eros. Fusce libero
                  massa, finibus ac auctor venenatis, molestie in urna.
                </p>
              </v-slide-x-transition>

              <v-slide-x-transition>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  vel sapien vel urna porta rhoncus et sit amet sapien. Quisque
                  cursus sapien vel nisl congue consectetur. Cras eu feugiat
                  sapien. Pellentesque at dignissim nunc. Aenean id nisi in
                  justo semper lobortis. Morbi sed erat eget sapien scelerisque
                  congue. Morbi eu est rutrum, consectetur dolor et, lacinia
                  justo. Nulla facilisi. Nullam felis odio, posuere eu lorem sit
                  amet, dignissim consequat turpis. Mauris rhoncus luctus
                  fermentum. Fusce consectetur, odio eu pretium aliquet, dui leo
                  tempus justo, sed rutrum velit nunc quis eros. Fusce libero
                  massa, finibus ac auctor venenatis, molestie in urna.
                </p>
              </v-slide-x-transition>

              <transition name="slide" mode="out-in">
                <div>element you are apply the transition to</div>
              </transition>
            </v-container>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-img
              max-width="192"
              max-height="192"
              :src="app.profile.logo"
              transition="slide-x-transition"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      app: this.$store.state.app,
      items: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/mapt-1b9b0.appspot.com/o/app%2Fextra%2F1.jpg?alt=media&token=8922958c-8b1f-4bdd-a47c-5dca067416e4",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/mapt-1b9b0.appspot.com/o/app%2Fextra%2F2.jpg?alt=media&token=894e3829-215c-4bf9-85e8-c86ccf6bde79",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/mapt-1b9b0.appspot.com/o/app%2Fextra%2F3.jpg?alt=media&token=5439d576-e60a-49ac-9a02-0d48b97275a4",
        },
      ],
    };
  },
};
// ../assets/construction/blur/' + i.toString()+'.jpg
</script>
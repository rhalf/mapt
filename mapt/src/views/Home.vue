<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col
          ><h2 v-scrollSlideRight class="primary--text">
            Build your dreams.
          </h2></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-carousel
            v-scrollSlideDown
            cycle
            show-arrows-on-hover
            max-width="1024"
            height="320"
            hide-delimiter-background
            hide-delimiter
            interval="3000"
            color="primary"
            class="rounded-lg"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-container>
            <p v-scrollSlideLeft>
              Our company was formed and established with the primary purpose of
              providing integrated engineering services such as maintenance,
              trading and construction.
            </p>
            <p v-scrollSlideRight>
              The increase numbers of client and allied consultants attest to
              the core value, vision of the company. Any interest or
              clarification, our office is very available in your convenience
              time.
            </p>
            <p v-scrollSlideLeft>
              We hope that our company's integrated engineering experience will
              satisfy your attention. We are looking forward for a mutual and
              harmonious business relation in future. Thank You and God Bless.
            </p>

            <p></p>
          </v-container>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img
            v-scrollFadeIn
            class="mx-auto"
            width="192"
            height="192"
            :lazy-src="app.data.logo"
            :src="app.data.logo"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      app: this.$store.state.app,
      // items: [
      //   {
      //     src: "https://firebasestorage.googleapis.com/v0/b/mapt-1b9b0.appspot.com/o/app%2Fextra%2F1.jpg?alt=media&token=8922958c-8b1f-4bdd-a47c-5dca067416e4",
      //   },
      //   {
      //     src: "https://firebasestorage.googleapis.com/v0/b/mapt-1b9b0.appspot.com/o/app%2Fextra%2F2.jpg?alt=media&token=894e3829-215c-4bf9-85e8-c86ccf6bde79",
      //   },
      //   {
      //     src: "https://firebasestorage.googleapis.com/v0/b/mapt-1b9b0.appspot.com/o/app%2Fextra%2F3.jpg?alt=media&token=5439d576-e60a-49ac-9a02-0d48b97275a4",
      //   },
      // ],
      items: [
        {
          src: require("../assets/construction/random/1.jpg"),
        },
        {
          src: require("../assets/construction/random/2.jpg"),
        },
        {
          src: require("../assets/construction/random/3.jpg"),
        },
        {
          src: require("../assets/construction/random/4.jpg"),
        },
        {
          src: require("../assets/construction/random/5.jpg"),
        },
        {
          src: require("../assets/construction/random/6.jpg"),
        },
        {
          src: require("../assets/construction/random/7.jpg"),
        },
      ],
    };
  },
  methods: {
    show() {
      this.intersected = true;
    },
  },
};
</script>

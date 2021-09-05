<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-sheet max-width="1080">
        <v-carousel
          cycle
          show-arrows-on-hover
          max-width="1080"
          height="240"

          hide-delimiter-background
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
      </v-sheet>
      <v-col></v-col>
    </v-row>
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
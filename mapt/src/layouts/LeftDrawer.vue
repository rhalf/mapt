<template>
  <v-navigation-drawer v-model="drawer.left" fixed temporary width="300">
    <template v-slot:prepend>
      <v-list-item two-line dark class="primary">
        <v-list-item-avatar class="my-auto" size="48">
          <v-img :src="app.data.logo" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title" v-if="app.profile.name">
            {{ app.profile.name.slice(0, 5) }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ app.profile.name }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-list shaped>
      <!-- <v-subheader>Menu</v-subheader> -->
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(menu, index) in ui.menu" :key="index" :to="{path:menu.path, hash: menu.hash}" router>
          <v-list-item-icon>
            <v-icon v-text="menu.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="menu.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import notify from "@/mixins/notify";
import menu from "@/mixins/menu";
// import firebase from "../plugins/firebase";
// var fire = firebase.firestore();
// var auth = firebase.auth();
export default {
  mixins: [notify, menu],
  created() {},
  mounted() {},
  data() {
    return {
      app: this.$store.state.app,
      drawer: this.$store.state.drawer,

      selectedItem: ""
    };
  },
  computed: {},
  methods: {},
};
</script>

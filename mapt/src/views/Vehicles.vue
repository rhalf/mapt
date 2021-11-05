<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <!-- <v-row>
        <v-col
          ><h2 v-scrollSlideRight class="primary--text">
            List of Vehicles
          </h2></v-col
        >
      </v-row> -->
      <v-row
        v-for="(vehicle, index) in app.vehicles"
        :key="index"
        class="pb-16"
      >
        <v-col cols="12" sm="6" v-scrollSlideRight>
          <v-row>
            <v-col>
              <h2 class="primary--text">
                <label>
                  {{ vehicle.brand | capitalize }} -
                  {{ vehicle.name | capitalize }}
                </label>
                <label v-if="vehicle.color">
                  ({{ vehicle.color | capitalize }})
                </label>
              </h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4" sm="3" class="primary--text">Model :</v-col>
            <v-col class="font-weight-bold">{{
              vehicle.model | capitalize
            }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" sm="3" class="primary--text">Chassic :</v-col>
            <v-col>{{ vehicle.chassis }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" sm="3" class="primary--text">Engine :</v-col>
            <v-col>{{ vehicle.engine }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="4" sm="3" class="primary--text">Plate :</v-col>
            <v-col class="font-weight-bold">{{ vehicle.plate }}</v-col>
          </v-row>

          <v-row>
            <v-col cols="4" sm="3" class="primary--text">Status :</v-col>
            <v-col
              v-if="vehicle.status == 'operating'"
              class="green--text font-weight-bold"
              >{{ vehicle.status | capitalize }}</v-col
            >
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" v-scrollSlideLeft>
          <photosZoom
            :item="vehicle"
            orientation="landscape"
            v-if="vehicle.photos.length"
          ></photosZoom>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import photosZoom from "../dialog/photosZoom.vue";

export default {
  name: "Vehicles",
  components: { photosZoom },
  data() {
    return {
      app: this.$store.state.app,
    };
  },
  methods: {},
};
</script>

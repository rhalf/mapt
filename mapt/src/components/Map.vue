<template>
  <GmapMap
    ref="map"
    :center="{ lat: 25.286106, lng: 51.534817 }"
    :zoom="8"
    map-type-id="terrain"
    style="width: 100%; height: 500px"
  >
    <GmapMarker
      :key="index"
      v-for="(marker, index) in markers"
      :position="marker.position"
      :clickable="true"
      :draggable="true"
      @click="center = marker.position"
    />
  </GmapMap>
</template>

<script>
export default {
  props: {
    coordinate : Object
  },
  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    // this.$refs.map.$mapPromise.then((map) => {
    //   map.panTo({ lat: 25.286106, lng: 51.534817 });
    // });
  },

  data() {
    return {
      markers: [{ position: { lat: 25.286106, lng: 51.534817 } }],
    };
  },

  methods: {
    submit () {
      this.$emit('input', this.markers[0].position)
    }
  }
};
</script>


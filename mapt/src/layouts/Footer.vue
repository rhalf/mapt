<template>
  <v-footer dark padless class="primary">
    <v-container>
      <v-row>
        <v-col>
          <v-card flat class="primary white--text">
            <v-card-text class="text-center">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-row>
              <v-col cols="0" sm="0" md="3"></v-col>
              <v-col>
                <v-card-text cols="auto" class="white--text pt-0">
                  <v-icon left>mdi-store</v-icon>{{ app.profile.name }}
                </v-card-text>

                <v-card-text class="white--text pt-0">
                  <v-icon left>mdi-cog</v-icon>{{ app.profile.motto }}
                </v-card-text>

                <v-card-text class="white--text pt-0">
                  <v-icon left>mdi-email</v-icon>{{ app.profile.email }}
                </v-card-text>
              </v-col>

              <v-col cols="auto">
                <v-card-text class="white--text pt-0">
                  <v-icon left>mdi-phone-classic</v-icon
                  >{{ app.profile.phone1 }}
                </v-card-text>

                <v-card-text class="white--text pt-0">
                  <v-icon left>mdi-cellphone</v-icon>{{ app.profile.mobile1 }}
                </v-card-text>

                <v-card-text class="white--text pt-0">
                  <v-icon left>mdi-cellphone</v-icon>{{ app.profile.mobile2 }}
                </v-card-text>
              </v-col>
              <v-col cols="0" sm="0" md="3"></v-col>
            </v-row>

            <v-divider></v-divider>

            <v-card-text class="white--text text-center">
              {{ app.auth }} | Version {{ app.vers }}
            </v-card-text>

            <!-- <v-card-text class="white--text text-center">
          <strong>{{ app.profile.name }}</strong> @
          {{ new Date().getFullYear() }}
        </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div height="70"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      app: this.$store.state.app,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

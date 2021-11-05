<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col
          ><h2 v-scrollSlideRight class="primary--text">
            List of Construction Projects
          </h2>
        </v-col>
        <v-col cols="12" sm="auto">
          <v-text-field
            label="Search"
            v-model="searchQuery"
            outlined
            append-icon="mdi-magnify"
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="auto"
          v-for="(project, index) in projects"
          :key="index"
          @click="loadProject(project.id)"
          class="mx-auto"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              width="330px"
              :elevation="hover ? 16 : 4"
              :class="{ 'on-hover': hover }"
              ripple
            >
              <v-sheet
                :color="project.status == 'done' ? 'success' : 'warning'"
                height="50px"
                class="pa-3"
              >
                <h3 class="white--text text-center text-truncate">
                  {{ project.name }}
                </h3></v-sheet
              >
              <v-sheet height="180px">
                <div class="pt-3 px-3  body-2 text-truncate  py-0 my-0">
                  <label
                    ><strong>Contractor :</strong>
                    {{ project.contractor }}</label
                  >
                  <br />
                  <label><strong>Client :</strong> {{ project.client }}</label>
                  <br />
                  <label><strong>Scope :</strong> {{ project.scope }}</label>
                  <br />
                  <label
                    ><strong>Started:</strong
                    >{{
                      project.dtStarted.toDate().toLocaleDateString("en-US")
                    }}</label
                  >
                  <br />
                  <label
                    ><strong>Ended:</strong
                    >{{
                      project.dtEnded.toDate().toLocaleDateString("en-US")
                    }}</label
                  >
                  <br />

                  <v-chip class="accent" v-if="project.isConstruction"
                    >Construction</v-chip
                  >
                  <v-chip class="accent" v-if="project.isTrading"
                    >Trading</v-chip
                  >

                  <v-chip
                    :class="project.status == 'done' ? 'success' : 'warning'"
                  >
                    {{ project.status.toUpperCase() }}</v-chip
                  >

                  <br />
                  <!-- <v-btn
                    v-if="project.isConstruction"
                    fab
                    outlined
                    small
                    class="primary ma-1"
                    dark
                    ><v-icon>mdi-domain</v-icon></v-btn
                  >
                  <v-btn
                    v-if="project.isTrading"
                    fab
                    outlined
                    small
                    class="primary ma-1"
                    dark
                    ><v-icon>mdi-bulldozer</v-icon></v-btn
                  > -->
                </div>
                <h3 class="px-3 py-0 my-0 text-right primary--text">
                  {{ project.value | toCurrency }}
                </h3>
              </v-sheet>
              <v-divider></v-divider>
              <v-card-text class="text-truncate">{{
                project.address
              }}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
        <v-sheet class="pa-3 mx-auto" outlined>
          <input type="file" @change="loadXlxs" label="import" />
          <v-btn @click="importDatas()" outlined>importDatas</v-btn>
        </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import xlsx from "xlsx";
import api from "../mixins/api";

export default {
  name: "Projects",
  components: {},
  mixins: [api],
  data() {
    return {
      searchQuery: "",
      app: this.$store.state.app,
    };
  },
  methods: {
    loadProject(id) {
      console.log(id);
    },

    loadXlxs(e) {
      const files = e.target.files;
      console.log(files);
      if (!files.length) {
        return;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        return alert(
          "The upload format is incorrect. Please upload xls or xlsx format"
        );
      }
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const XLSX = xlsx;
          const workbook = XLSX.read(data, {
            type: "binary",
          });
          const wsname = workbook.SheetNames[0]; // Take the first sheet，wb.SheetNames[0] :Take the name of the first sheet in the sheets
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // Generate JSON table content，wb.Sheets[Sheet名]    Get the data of the first sheet
          const excellist = []; // Clear received data
          // Edit data
          for (var i = 0; i < ws.length; i++) {
            excellist.push(ws[i]);
          }
          console.log("Read results", excellist); // At this point, you get an array containing objects that need to be processed
          this.app.projects = excellist;
        } catch (e) {
          return alert("Read failure!");
        }
      };
      fileReader.readAsBinaryString(files[0]);
      // var input = document.getElementById("upload");
      // input.value = "";
    },
    importDatas() {
      this.projects.forEach((project) => {
        let x = this.addProject(project);
        x.then((data) => {
          console.log(data);
        }).then((error) => {
          console.log(error);
        });
      });
    },
  },

  computed: {
    projects() {
      if (this.searchQuery) {
        return this.app.projects.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => {
              if (item.name.toLowerCase().includes(v)) return item;
              if (item.desc.toLowerCase().includes(v)) return item;
              if (item.scope.toLowerCase().includes(v)) return item;
              if (item.client.toLowerCase().includes(v)) return item;
              if (item.contractor.toLowerCase().includes(v)) return item;
              if (item.address.toLowerCase().includes(v)) return item;
              if (
                item.value
                  .toString()
                  .toLowerCase()
                  .includes(v)
              )
                return item;
            });
        });
      } else {
        return this.app.projects;
      }
    },
  },
};
</script>

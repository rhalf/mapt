import firebaseApp from "../plugins/firebase";
import { getFirestore, getDocs, collection, query } from "firebase/firestore";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export default {
  created() {
    this.loadApp();
    this.loadServices();
    this.loadPersonnels();
    this.loadMining();
    this.loadDocuments();
  },
  data() {},
  methods: {
    loadApp() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "app"));
        const snapshots = await getDocs(q);

        snapshots.forEach((doc) => {
          if (doc.id == "data") this.$store.dispatch("setData", doc.data());
          if (doc.id == "profile")
            this.$store.dispatch("setProfile", doc.data());
          if (doc.id == "vmgo") this.$store.dispatch("setVmgo", doc.data());
        });
      })();
    },
    loadServices() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "services"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch("setServices", items);
      })();
    },
    loadClients() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "clients"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch("setClients", items);
      })();
    },
    loadProjects() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "projects"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch("setProjects", items);
      })();
    },
    loadMining() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "mining"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          this.getAllPhotos("/mining/", item);
          items.push(item);
        });

        this.$store.dispatch("setMining", items);
      })();
    },
    loadPersonnels() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "personnels"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch("setPersonnels", items);
      })();
    },
    loadVehicles() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "vehicles"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch("setVehicles", items);
      })();
    },
    loadEquipments() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "equipments"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch("setEquipments", items);
      })();
    },
    loadDocuments() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "documents"));
        const snapshots = await getDocs(q);

        var items = [];
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          this.getAllPhotos("documents/", item);
          items.push(item);
        });

        this.$store.dispatch("setDocuments", items);
      })();
    },

    getAllPhotos(location, mine) {
      const storage = getStorage();
      const listRef = ref(storage, location + mine.id.toString());
      mine.photos = [];

      listAll(listRef)
        .then((res) => {
          // res.prefixes.forEach((folderRef) => {
          //   console.log(folderRef);
          // });
          res.items.forEach((itemRef) => {
            getDownloadURL(itemRef).then((url) => {
              mine.photos.push({ src: url });
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

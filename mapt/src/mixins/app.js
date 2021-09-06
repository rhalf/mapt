import firebaseApp from "../plugins/firebase";
import {
  getFirestore,
  getDocs,
  collection,
  query
} from "firebase/firestore";

export default {
  created() {
    this.loadApp();
    this.loadServices();
  },

  data() {
  },

  methods: {
    loadApp() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "app"));
        const snapshots = await getDocs(q)

        snapshots.forEach((doc) => {
          if (doc.id == "profile") this.$store.dispatch('setProfile', doc.data())
          if (doc.id == "vmgo") this.$store.dispatch('setVmgo', doc.data())
        });

        // console.log(this.$store.state.app)
      })();
    },
    loadServices() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "services"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setServices', items)
      })();
    },
    loadClients() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "clients"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setClients', items)
      })();
    },
    loadProjects() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "projects"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setProjects', items)
      })();
    },
    loadPersonnels() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "personnels"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setPersonnels', items)
      })();
    },
    loadVehicles() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "vehicles"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setVehicles', items)
      })();
    },
    loadEquipments() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "equipments"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setEquipments', items)
      })();
    },
    loadPermits() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "permits"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setPermits', items)
      })();
    },
    loadCertificates() {
      (async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, "certificates"));
        const snapshots = await getDocs(q)

        var items = []
        snapshots.forEach((doc) => {
          var item = doc.data();
          item.id = doc.id;
          items.push(item);
        });

        this.$store.dispatch('setCertificates', items)
      })();
    },
  }

}

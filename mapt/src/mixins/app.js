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
              if (doc.id == "vmgo")  this.$store.dispatch('setVmgo', doc.data())
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
    }

}

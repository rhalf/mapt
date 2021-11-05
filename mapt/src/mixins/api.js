import firebaseApp from "../plugins/firebase";
import {
  Timestamp,
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";
// import {  getFirestore} from "firebase/firestore";

const db = getFirestore(firebaseApp);
// console.log(db)

export default {
  created() {},
  data() {
    return {};
  },
  methods: {
    async addProject(data) {
      console.log(data);
      data.dtStarted = new Timestamp(data.dtStarted, 0);
      data.dtEnded = new Timestamp(data.dtEnded, 0);
      const docRef = await addDoc(collection(db, "projects"), data);
      console.log("Document written with ID: ", docRef.id);
    },
  },
};

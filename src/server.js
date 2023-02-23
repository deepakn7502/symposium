import { addDoc } from "firebase/firestore";

export function Upload(databaseRef, data) {
  try {
    return addDoc(databaseRef, data).then(alert("Uploaded"));
  } catch (err) {
    return console.log(err.message);
  }
}

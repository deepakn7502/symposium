import { addDoc, getDoc } from "firebase/firestore";

export function Upload(databaseRef, data) {
  try {
    return addDoc(databaseRef, data).then(alert("Uploaded"));
  } catch (err) {
    return console.log(err.message);
  }
}

export function accessData(databaseRef) {
  try {
    return getDoc(databaseRef)
  } catch (error) {
    console.log(error.message)
  }
}
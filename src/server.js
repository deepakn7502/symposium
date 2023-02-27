import { addDoc, getDoc, getDocs } from "firebase/firestore";
import { uploadBytes } from "firebase/storage";

export function Upload(databaseRef, data) {
  try {
    return addDoc(databaseRef, data).then(alert("Uploaded"));
  } catch (err) {
    return console.log(err.message);
  }
}

export function accessData(databaseRef) {
  try {
    return getDocs(databaseRef)
  } catch (error) {
    return console.log(error.message)
  }
}


export function uploadImages(databaseRef, image) {
  try {
    return uploadBytes(databaseRef, image).then(console.log("Uploaded"))
  } catch (error) {
    return console.log(error.message)
  }
}
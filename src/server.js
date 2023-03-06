import { addDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, uploadBytes } from "firebase/storage";

export function Upload(databaseRef, data) {
  try {
    return addDoc(databaseRef, data).then(alert("Uploaded"));
  } catch (err) {
    return console.log(err.message);
  }
}

export function accessData(databaseRef) {
  try {
    return getDocs(databaseRef);
  } catch (error) {
    return console.log(error.message);
  }
}

export function uploadImages(databaseRef, image) {
  try {
    uploadBytes(databaseRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        return url;
      });
    });
  } catch (error) {
    return console.log(error.message);
  }
}

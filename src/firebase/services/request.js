import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase.config";

const requestCollectionRef = collection(db, "request_collection");

export const AddrequestToDb = async (requestInfo) => {
  try {
    const newCreatedrequest = await addDoc(requestCollectionRef, requestInfo);
    return newCreatedrequest;
  } catch (error) {
    return Promise.reject(error);
  }
};

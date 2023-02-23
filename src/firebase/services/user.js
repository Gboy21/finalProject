import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase.config";

const userCollectionRef = collection(db, "User_collection");

export const registerNewUserToDb = async (userInfo) => {
  try {
    const newCreatedUser = await addDoc(userCollectionRef, userInfo);
    return newCreatedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserFromDb = async (userId) => {
  try {
    const userQuery = query(userCollectionRef, where("userId", "==", userId));
    const userDataSnapshot = await getDocs(userQuery);
    return userDataSnapshot.docs[0].data();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllUsersFromDb = async () => {
  try {
    const users = [];
    const usersSnapshot = await getDocs(userCollectionRef);
    usersSnapshot.forEach((doc) => {
      users.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

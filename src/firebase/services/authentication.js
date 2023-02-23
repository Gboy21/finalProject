import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase.config";

const userRolesCollectionRef = collection(db, "UserRoles_collection");

export const loginUser = async (userEmail, userPassword) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, userEmail, userPassword);
    return userCredentials.user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerNewUser = async (userEmail, userPassword, names) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    await updateProfile(userCredentials.user, { displayName: names });
    return userCredentials.user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    Promise.reject(error);
  }
};

export const registerUserRole = async (userId, role) => {
  try {
    const newCreatedRole = await addDoc(userRolesCollectionRef, { userId, role });
    return newCreatedRole;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserRole = async (userId) => {
  try {
    const userQuery = query(userRolesCollectionRef, where("userId", "==", userId));
    const userDataSnapshot = await getDocs(userQuery);
    return userDataSnapshot.docs[0].data().role;
  } catch (error) {
    return Promise.reject(error);
  }
};

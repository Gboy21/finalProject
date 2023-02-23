import { addDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase.config";

const companyCollectionRef = collection(db, "Company_collection");

export const registerNewCompanyToDb = async (companyInfo) => {
  try {
    const newCreatedCompany = await addDoc(companyCollectionRef, companyInfo);
    return newCreatedCompany;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllCompaniesFromDb = async () => {
  try {
    const companies = [];
    const companiesSnapshot = await getDocs(companyCollectionRef);
    companiesSnapshot.forEach((doc) => {
      companies.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return companies;
  } catch (error) {
    return Promise.reject(error);
  }
};

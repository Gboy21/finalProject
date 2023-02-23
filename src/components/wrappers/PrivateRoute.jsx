import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserRole } from "../../firebase/services/authentication";
import { getUserFromLocalStorage } from "../../utils/auth";

export default function PrivateRoute({ children, authorisedRoles }) {
  const [isUserAuthorized, setIsUserAuthorized] = useState();
  const loggedInUser = getUserFromLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleUserRole() {
      if (!loggedInUser) navigate("/");
      const userRole = await getUserRole(loggedInUser.uid);
      if (authorisedRoles && !authorisedRoles.includes(userRole)) navigate("/403");
      else setIsUserAuthorized(true);
    }
    handleUserRole();
  }, [authorisedRoles, loggedInUser, navigate]);

  return <>{loggedInUser && isUserAuthorized && children}</>;
}

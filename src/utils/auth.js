export function addUserToLocalStorage(user) {
  let userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
}

export function getUserFromLocalStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

export function removeUserFromLocalStorage() {
  localStorage.removeItem("user");
}

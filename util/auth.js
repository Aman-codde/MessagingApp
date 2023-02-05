import axios from "axios";

const API_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const API_KEY = "AIzaSyC4VjoXj0TlvZmE4A34j_b9tjedA82POIQ";

export function createUser() {
  axios.post(API_URL + API_KEY, {
    email: "aman@aman.com",
    password: "123456",
    returnSecureToken: true,
  });
}

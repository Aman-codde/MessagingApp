import axios from "axios";

const BACKEND_URL = `http://interview.bixly.com/`;

export async function login(username, password) {
  const response = await axios.post(BACKEND_URL + "api-token-auth/", {
    username,
    password,
  });
  const token = response.data.token;
  return token;
}

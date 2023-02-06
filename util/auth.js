import axios from "axios";

// api-token-auth
// API URL: http://interview.bixly.com Auth Scheme: Token

export async function login(username, password) {
  const url = `http://interview.bixly.com/api-token-auth/`;
  const response = await axios.post(url, {
    username: username,
    password: password,
  });
  // const userInfo = response.config["data"];
  const token = response.data.token;
  return token;
}

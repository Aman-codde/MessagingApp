import axios from "axios";

//const API_URL = "http://interview.bixly.com/api-token-auth";

const BACKEND_URL =
  "https://react-native-message-app-default-rtdb.firebaseio.com";

export async function storeMessage(messageData, token) {
  const response = await axios.post(
    BACKEND_URL + "/messages.json?auth=" + token,
    messageData
  );
  const id = response.data.name; // name property in firebase has firebase autogenerated id

  return id;
}

export async function fetchMessages(token) {
  const response = await axios.get(
    BACKEND_URL + "/messages.json?auth=" + token
  );
  const messages = [];

  for (let key in response.data) {
    const messageObj = {
      id: key,
      sender: response.data[key].sender,
      receiver: response.data[key].receiver,
      title: response.data[key].title,
      body: response.data[key].body,
    };
    messages.push(messageObj);
  }

  return messages;
}

export function deleteMessage(id, token) {
  return axios.delete(BACKEND_URL + `/messages/${id}.json?auth=${token}`);
}

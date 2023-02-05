import axios from "axios";

//const API_URL = "http://interview.bixly.com/api-token-auth";

const BACKEND_URL =
  "https://react-native-message-app-default-rtdb.firebaseio.com";

export function storeMessage(messageData) {
  axios.post(BACKEND_URL + "/messages.json", messageData);
}

export async function fetchMessages() {
  const response = await axios.get(BACKEND_URL + "/messages.json");
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

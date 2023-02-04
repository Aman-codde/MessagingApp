import axios from "axios";

//const API_URL = "http://interview.bixly.com/api-token-auth";

const BACKEND_URL =
  "https://react-native-message-app-default-rtdb.firebaseio.com/messages.json";

export function storeMessage(messageData) {
  axios.post(BACKEND_URL, messageData);
}

export async function fetchMessages() {
  const response = await axios.get(BACKEND_URL);
  console.log("fetched data: ", response.data);

  const messages = [];

  for (let key in response) {
    const messageObj = {
      sender: response.data[key].sender,
      receiver: response.data[key].receiver,
      title: response.data[key].title,
      body: response.data[key].body,
    };
  }

  return messages;
}

import axios from "axios";

//const API_URL = "http://interview.bixly.com/api-token-auth";

export default function storeMessage(messageData) {
  axios.post(
    "https://react-native-message-app-default-rtdb.firebaseio.com/messages.json",
    messageData
  );
}

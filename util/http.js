import axios from "axios";

const BACKEND_URL = `http://interview.bixly.com/`;

//create message
export async function storeMessage(messageData, token) {
  const message_data = {
    title: messageData.title,
    body: messageData.body,
    receiver: messageData.receiver,
  };
  const create_response = await axios.post(
    BACKEND_URL + "messages/",
    message_data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    }
  );
  console.log("create response: ", create_response.data);
  const messages = create_response.data;
  return messages.id;
}

//get all messages
export async function fetchMessages(token) {
  const fetch_response = await axios.get(BACKEND_URL + "messages/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  });
  const messages = fetch_response.data;
  console.log(messages);
  return messages;
}

// get sent messages
export async function sentMessages(token) {
  const sent_msgs_response = await axios.get(BACKEND_URL + "messages/sent/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  });
  const messages = sent_msgs_response.data;
  return messages;
}

//delete message
export async function deleteMessage(id, token) {
  console.log("delete id:", id, token);
  const delete_response = await axios.delete(BACKEND_URL + id + "/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  });
  console.log("delete response:", delete_response);
}

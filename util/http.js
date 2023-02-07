import axios from "axios";

const BACKEND_URL = `http://interview.bixly.com/`;

//create message
export async function storeMessage(messageData, token) {
  const create_response = await axios.post(
    BACKEND_URL + "messages/",
    messageData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    }
  );
  const result = create_response.data;
  return result;
}

//get inbox messages
export async function fetchInboxMessages(token) {
  const inbox_response = await axios.get(BACKEND_URL + "messages/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  });
  const messages = inbox_response.data;
  return messages;
}

// get sent messages
export async function fetchSentMessages(token) {
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
  const delete_response = await axios.delete(
    BACKEND_URL + "messages/" + id + "/",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    }
  );
  const result = delete_response.data;
  return result;
}

// get particular message
// export async function getMessage(id, token) {
//   const selected_msg_response = await axios.get(
//     BACKEND_URL + "messages/" + id + "/",
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Token " + token,
//       },
//     }
//   );
//   const result = selected_msg_response.data;
//   return result;
// }

import { createContext, useReducer } from "react";

const DUMMY_SENT_MESSAGES = [
  {
    id: "s1",
    sender: "aman",
    receiver: "receiver1",
    title: "reply to greeting",
    body: "Good Morning!! Have a great day!",
  },
  {
    id: "s2",
    sender: "aman",
    receiver: "receiver2",
    title: "reply to birthday invite",
    body: "Thank you for inviting. I would love to attend!",
  },
  {
    id: "s3",
    sender: "aman",
    receiver: "receiver3",
    title: "reply to meeting info ",
    body: "I am looking forward to attend the meeting.",
  },
];

export const MessagesContext = createContext({
  messages: [],
  createMessage: ({ receiver, title, body }) => {},
  deleteMessage: (id) => {},
});

function messagesReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((message) => message.id !== action.payload);
    default:
      return state;
  }
}

function MessagesContextProvider({ children }) {
  const [messagesState, dispatch] = useReducer(
    messagesReducer,
    DUMMY_SENT_MESSAGES
  );

  function createMessage(messageData) {
    dispatch({ type: "CREATE", payload: messageData });
  }

  function deleteMessage(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return <MessagesContext.Provider>{children}</MessagesContext.Provider>;
}

export default MessagesContextProvider;

import { createContext, useReducer } from "react";

const DUMMY_MESSAGES = [
  {
    id: "s1",
    sender: "Aman",
    receiver: "Receiver 1",
    title: "Reply to Greeting",
    body: "Good Morning!! Have a great day!",
  },
  {
    id: "s2",
    sender: "Aman",
    receiver: "Receiver 2",
    title: "Reply to Birthday Invite",
    body: "Thank you for inviting. I would love to attend!",
  },
  {
    id: "s3",
    sender: "Aman",
    receiver: "Receiver 3",
    title: "Reply to Meeting Info ",
    body: "I am looking forward to attend the meeting.",
  },
  {
    id: "m1",
    sender: "sender1",
    receiver: "Aman",
    title: "Greeting",
    body: "Good Morning",
  },
  {
    id: "m2",
    sender: "sender2",
    receiver: "Aman",
    title: "Invitation",
    body: "Join the Birthday celebration on Feb 4,2023 at 2:00PM",
  },
  {
    id: "m3",
    sender: "sender3",
    receiver: "Aman",
    title: "Meeting Info",
    body: "the company meeting is happening on Feb 17,2023 at 3:00PM ",
  },
];

export const MessagesContext = createContext({
  messages: [],
  createMessage: ({ receiver, title, body, sender }) => {},
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
  const [messagesState, dispatch] = useReducer(messagesReducer, DUMMY_MESSAGES);

  function createMessage(messageData) {
    dispatch({ type: "CREATE", payload: messageData });
  }

  function deleteMessage(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    messages: messagesState,
    createMessage: createMessage,
    deleteMessage: deleteMessage,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
}

export default MessagesContextProvider;

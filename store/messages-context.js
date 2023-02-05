import { createContext, useReducer } from "react";

export const MessagesContext = createContext({
  messages: [],
  createMessage: ({ receiver, title, body, sender }) => {},
  setMessages: (messages) => {},
  deleteMessage: (id) => {},
});

function messagesReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "SET":
      return action.payload;
    case "DELETE":
      return state.filter((message) => message.id !== action.payload);
    default:
      return state;
  }
}

function MessagesContextProvider({ children }) {
  const [messagesState, dispatch] = useReducer(messagesReducer, []);

  function createMessage(messageData) {
    dispatch({ type: "CREATE", payload: messageData });
  }

  function setMessages(messages) {
    dispatch({ type: "SET", payload: messages });
  }

  function deleteMessage(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    messages: messagesState,
    createMessage: createMessage,
    setMessages: setMessages,
    deleteMessage: deleteMessage,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
}

export default MessagesContextProvider;

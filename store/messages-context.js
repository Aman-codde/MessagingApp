import { createContext, useState } from "react";

export const MessagesContext = createContext(null);

const { Provider } = MessagesContext;

function MessagesContextProvider({ children }) {
  const [state, setState] = useState({
    inboxMessages: [],
    sentMessages: [],
    boxType: "",
  });
  return <Provider value={[state, setState]}>{children}</Provider>;
}

export default MessagesContextProvider;

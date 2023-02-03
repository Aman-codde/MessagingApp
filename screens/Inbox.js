import { useContext } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import { MessagesContext } from "../store/messages-context";

function Inbox() {
  const messagesCtx = useContext(MessagesContext);

  const inboxMessages = messagesCtx.messages.filter(
    (message) => message.receiver == "aman"
  );

  return <MessagesOutput messages={inboxMessages} />;
}

export default Inbox;

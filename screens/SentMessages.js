import { useContext } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import { MessagesContext } from "../store/messages-context";

function SentMessages() {
  const messagesCtx = useContext(MessagesContext);
  const sentMessages = messagesCtx.messages.filter(
    (message) => message.sender == "aman"
  );

  return <MessagesOutput messages={sentMessages} />;
}

export default SentMessages;

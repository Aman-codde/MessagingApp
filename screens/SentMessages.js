import { useContext } from "react";
import SentOutput from "../components/MessagesOutput/SentOutput";
import { MessagesContext } from "../store/messages-context";

function SentMessages() {
  const messagesCtx = useContext(MessagesContext);
  const sentMessages = messagesCtx.messages.filter(
    (message) => message.sender == "aman"
  );

  return <SentOutput sentMessages={sentMessages} />;
}

export default SentMessages;

import { useContext } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import { MessagesContext } from "../store/messages-context";

function Inbox() {
  const messagesCtx = useContext(MessagesContext);

  const inboxMessages = messagesCtx.messages.filter(
    (message) => message.receiver == "Aman"
  );

  const emptyInboxInfo = "The Inbox is empty";

  return <MessagesOutput messages={inboxMessages} info={emptyInboxInfo} />;
}

export default Inbox;

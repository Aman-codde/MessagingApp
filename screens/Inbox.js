import { useContext } from "react";
import InboxOutput from "../components/MessagesOutput/InboxOutput";
import { MessagesContext } from "../store/messages-context";

function Inbox() {
  const messagesCtx = useContext(MessagesContext);

  const inboxMessages = messagesCtx.messages.filter(
    (message) => message.receiver == "aman"
  );

  return <InboxOutput inboxMessages={inboxMessages} />;
}

export default Inbox;

import { useContext, useEffect } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import { MessagesContext } from "../store/messages-context";
import { fetchMessages } from "../util/http";

function SentMessages() {
  const messagesCtx = useContext(MessagesContext);

  const sentMessages = messagesCtx.messages.filter(
    (message) => message.sender == "Aman"
  );

  useEffect(() => {
    async function getMessages() {
      const messages = await fetchMessages();
      messagesCtx.setMessages(messages);
    }

    getMessages();
  }, []);

  const noSentMsgsInfo = "There are no sent messages.";

  return <MessagesOutput messages={sentMessages} info={noSentMsgsInfo} />;
}

export default SentMessages;

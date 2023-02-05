import { useContext, useEffect, useState } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { MessagesContext } from "../store/messages-context";
import { fetchMessages } from "../util/http";

function SentMessages() {
  const [isFetching, setIsFetching] = useState(true);

  const messagesCtx = useContext(MessagesContext);

  const sentMessages = messagesCtx.messages.filter(
    (message) => message.sender == "Aman"
  );

  useEffect(() => {
    async function getMessages() {
      setIsFetching(true);
      const messages = await fetchMessages();
      setIsFetching(false);
      messagesCtx.setMessages(messages);
    }

    getMessages();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const noSentMsgsInfo = "There are no sent messages.";

  return <MessagesOutput messages={sentMessages} info={noSentMsgsInfo} />;
}

export default SentMessages;

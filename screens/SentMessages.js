import { useContext, useEffect, useState } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { MessagesContext } from "../store/messages-context";
import { fetchMessages } from "../util/http";

function SentMessages() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const authCtx = useContext(AuthContext);

  const messagesCtx = useContext(MessagesContext);

  const sentMessages = messagesCtx.messages.filter(
    (message) => message.sender == "Aman"
  );

  useEffect(() => {
    async function getMessages() {
      setIsFetching(true);
      try {
        const messages = await fetchMessages(authCtx.token);
        messagesCtx.setMessages(messages);
      } catch (err) {
        setError("Could not fetch messages");
      }
      setIsFetching(false);
    }

    getMessages();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const noSentMsgsInfo = "There are no sent messages.";

  return <MessagesOutput messages={sentMessages} info={noSentMsgsInfo} />;
}

export default SentMessages;

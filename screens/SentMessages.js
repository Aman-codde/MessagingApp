import { useContext, useEffect, useState } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { MessagesContext } from "../store/messages-context";
import { fetchSentMessages } from "../util/http";

function SentMessages() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const authCtx = useContext(AuthContext);

  const [context, setContext] = useContext(MessagesContext);

  useEffect(() => {
    async function getSentMessages() {
      setIsFetching(true);
      try {
        const sent_messages = await fetchSentMessages(authCtx.token);
        setContext({
          ...context,
          sentMessages: sent_messages,
          boxType: "sent",
        });
      } catch (err) {
        setError("Could not fetch messages");
      }
      setIsFetching(false);
    }

    getSentMessages();
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

  // get messages ordered by date (latest above)
  const orderedSentMessages = context.sentMessages.reverse();

  return (
    <MessagesOutput messages={orderedSentMessages} info={noSentMsgsInfo} />
  );
}

export default SentMessages;

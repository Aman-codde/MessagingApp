import { useContext, useEffect, useState } from "react";
import MessagesOutput from "../components/MessagesOutput/MessagesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { MessagesContext } from "../store/messages-context";
import { fetchInboxMessages } from "../util/http";

function Inbox() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const authCtx = useContext(AuthContext);

  const [context, setContext] = useContext(MessagesContext);

  useEffect(() => {
    async function getInboxMessages() {
      setIsFetching(true);
      try {
        const inbox_messages = await fetchInboxMessages(authCtx.token);
        setContext({
          ...context,
          inboxMessages: inbox_messages,
          boxType: "inbox",
        });
      } catch (err) {
        setError("Could not fetch messages");
      }
      setIsFetching(false);
    }

    getInboxMessages();
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

  const noInboxMsgsInfo = "The inbox is empty";

  // get messages ordered by date (latest above)
  const orderedInboxMessages = context.inboxMessages.reverse();
  return (
    <MessagesOutput messages={orderedInboxMessages} info={noInboxMsgsInfo} />
  );
}

export default Inbox;

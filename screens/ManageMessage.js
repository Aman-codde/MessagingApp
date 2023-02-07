import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ComposeForm from "../components/MessageForm/ComposeForm";
import MessageItem from "../components/MessagesOutput/MessageItem";
import Button from "../components/UI/Button";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { MessagesContext } from "../store/messages-context";
import {
  deleteMessage,
  fetchInboxMessages,
  fetchSentMessages,
  storeMessage,
} from "../util/http";

function ManageMessage({ route, navigation }) {
  const authCtx = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const [context, setContext] = useContext(MessagesContext);

  async function getUpdatedMessages() {
    try {
      const inbox_messages = await fetchInboxMessages(authCtx.token);
      const sent_messages = await fetchSentMessages(authCtx.token);
      setContext({
        ...context,
        inboxMessages: inbox_messages,
        sentMessages: sent_messages,
      });
    } catch (err) {
      setError("Could not fetch messages");
    }
  }

  const editedMessageId = route.params?.messageId;
  const isEditing = editedMessageId;

  let selectedMessage;
  if (context.boxType == "inbox") {
    selectedMessage = context.inboxMessages.find(
      (message) => message.id === editedMessageId
    );
  } else {
    selectedMessage = context.sentMessages.find(
      (message) => message.id === editedMessageId
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "View/Delete Message" : "New Message",
    });
  }, [navigation, isEditing]);

  async function deleteHandler() {
    setIsSubmitting(true);
    try {
      await deleteMessage(editedMessageId, authCtx.token);
      await getUpdatedMessages();
      navigation.goBack();
    } catch (err) {
      setError("Could not delete message, please try again later!");
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function composeHandler(messageData) {
    setIsSubmitting(true);
    try {
      await storeMessage(messageData, authCtx.token);
      await getUpdatedMessages();

      setIsSubmitting(false);
      navigation.goBack();
    } catch (error) {
      setIsSubmitting(false);
      console.log("create err...", error);
      setError("Could not create message, please try again later!");
    }
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <Button label="Cancel" onPress={cancelHandler} />
      {!isEditing && (
        <View style={styles.form}>
          <ComposeForm onSubmit={composeHandler}></ComposeForm>
        </View>
      )}
      <View style={styles.deleteContainer}>
        {isEditing && (
          <View style={styles.detailMsg}>
            <MessageItem {...selectedMessage} />
            <Button label="Delete" onPress={deleteHandler} />
          </View>
        )}
      </View>
    </View>
  );
}
export default ManageMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "left",
  },
  form: {
    margin: 10,
    padding: 10,
    width: 300,
    borderWidth: 1,
    borderRadius: 6,
  },
  detailMsg: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#d3d3d3",
  },
});

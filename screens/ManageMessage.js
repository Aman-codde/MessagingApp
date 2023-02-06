import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ComposeForm from "../components/MessageForm/ComposeForm";
import MessageItem from "../components/MessagesOutput/MessageItem";
import Button from "../components/UI/Button";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { MessagesContext } from "../store/messages-context";
import { deleteMessage, storeMessage } from "../util/http";

function ManageMessage({ route, navigation }) {
  const authCtx = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const messagesCtx = useContext(MessagesContext);

  const editedMessageId = route.params?.messageId;
  const isEditing = editedMessageId;

  const selectedMessage = messagesCtx.messages.find(
    (message) => message.id === editedMessageId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "View/Delete Message" : "New Message",
    });
  }, [navigation, isEditing]);

  async function deleteHandler() {
    setIsSubmitting(true);
    try {
      await deleteMessage(editedMessageId, authCtx.token);
      messagesCtx.deleteMessage(editedMessageId);
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
      const id = await storeMessage(messageData, authCtx.token);
      messagesCtx.createMessage({ ...messageData, id: id });
      navigation.goBack();
    } catch (error) {
      setError("Could not create message, please try again later!");
      setIsSubmitting(false);
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

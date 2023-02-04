import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import ComposeForm from "../components/MessageForm/ComposeForm";
import Button from "../components/UI/Button";
import { MessagesContext } from "../store/messages-context";

function ManageMessage({ route, navigation }) {
  const messagesCtx = useContext(MessagesContext);

  const editedMessageId = route.params?.messageId;
  const isEditing = editedMessageId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "View/Delete Message" : "New Message",
    });
  }, [navigation, isEditing]);

  function deleteHandler() {
    messagesCtx.deleteMessage(editedMessageId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function composeHandler(messageData) {
    messagesCtx.createMessage(messageData);
    navigation.goBack();
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
        {isEditing && <Button label="Delete" onPress={deleteHandler} />}
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
});

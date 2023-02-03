import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
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

  function composeHandler() {
    messagesCtx.createMessage({
      receiver: "receiver5",
      title: "Macy's 75% Sale offer",
      body: "Grab your favourite stuff. Offer valid till February 15,2023!!",
      sender: "aman",
    });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button label="Cancel" onPress={cancelHandler} />
        {!isEditing && <Button label="Send" onPress={composeHandler} />}
        <View style={styles.deleteContainer}>
          {isEditing && <Button label="Delete" onPress={deleteHandler} />}
        </View>
      </View>
    </View>
  );
}
export default ManageMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    marginTop: 16,
    paddingTop: 8,
    alignItems: "center",
  },
});

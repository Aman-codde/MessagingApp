import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/UI/Button";

function ManageMessage({ route, navigation }) {
  const editedMessageId = route.params?.messageId;
  const isEditing = editedMessageId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "View/Delete Message" : "New Message",
    });
  }, [navigation, isEditing]);

  function deleteHandler() {}

  function cancelHandler() {
    navigation.goBack();
  }

  function composeHandler() {}

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

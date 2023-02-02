import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageMessage({ route, navigation }) {
  const editedMessageId = route.params?.messageId;
  const isEditing = !!editedMessageId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "View/Delete Message" : "New Message",
    });
  }, [navigation, isEditing]);

  return <Text>Manage Message Screen(View or Delete Message)</Text>;
}
export default ManageMessage;

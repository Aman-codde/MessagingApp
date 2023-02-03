import { View } from "react-native";
import InboxList from "./InboxList";

function InboxOutput({ inboxMessages }) {
  return (
    <View>
      <InboxList inboxMessages={inboxMessages}></InboxList>
    </View>
  );
}

export default InboxOutput;

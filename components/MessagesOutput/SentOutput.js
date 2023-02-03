import { View } from "react-native";
import SentList from "./SentList";

function SentOutput({ sentMessages }) {
  return (
    <View>
      <SentList sentMessages={sentMessages}></SentList>
    </View>
  );
}

export default SentOutput;

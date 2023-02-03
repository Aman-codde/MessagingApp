import { View } from "react-native";
import SentList from "./SentList";

const DUMMY_SENT_MESSAGES = [
  {
    id: "s1",
    sender: "aman",
    receiver: "receiver1",
    title: "reply to greeting",
    body: "Good Morning!! Have a great day!",
  },
  {
    id: "s2",
    sender: "aman",
    receiver: "receiver2",
    title: "reply to birthday invite",
    body: "Thank you for inviting. I would love to attend!",
  },
  {
    id: "s3",
    sender: "aman",
    receiver: "receiver3",
    title: "reply to meeting info ",
    body: "I am looking forward to attend the meeting.",
  },
];

function SentOutput() {
  return (
    <View>
      <SentList sentMessages={DUMMY_SENT_MESSAGES}></SentList>
    </View>
  );
}

export default SentOutput;

import { View } from "react-native";
import InboxList from "./InboxList";

const DUMMY_INBOX_MESSAGES = [
  {
    id: "m1",
    sender: "sender1",
    receiver: "aman",
    title: "greeting",
    body: "Good Morning",
  },
  {
    id: "m2",
    sender: "sender2",
    receiver: "aman",
    title: "invitation",
    body: "Join the Birthday celebration on Feb 4,2023 at 2:00PM",
  },
  {
    id: "m3",
    sender: "sender3",
    receiver: "aman",
    title: "meeting info",
    body: "the company meeting is happening on Feb 17,2023 at 3:00PM ",
  },
];

function InboxOutput() {
  return (
    <View>
      <InboxList inboxMessages={DUMMY_INBOX_MESSAGES}></InboxList>
    </View>
  );
}

export default InboxOutput;

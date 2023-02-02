import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Compose from "./screens/Compose";
import Inbox from "./screens/Inbox";
import SentMessages from "./screens/SentMessages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function MessagesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Inbox" component={Inbox} />
      <BottomTabs.Screen name="Sent" component={SentMessages} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MessagesOverview"
            component={MessagesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Compose" component={Compose} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

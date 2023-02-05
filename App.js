import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Inbox from "./screens/Inbox";
import SentMessages from "./screens/SentMessages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Button from "./components/UI/Button";
import ManageMessage from "./screens/ManageMessage";
import MessagesContextProvider from "./store/messages-context";
import Login from "./screens/Login";
import Welcome from "./screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

function MessagesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <Button
            label="Compose"
            onPress={() => {
              navigation.navigate("ManageMessage");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen name="Inbox" component={Inbox} />
      <BottomTabs.Screen name="Sent" component={SentMessages} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}

// <MessagesContextProvider>
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="MessagesOverview"
//         component={MessagesOverview}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ManageMessage"
//         component={ManageMessage}
//         options={{ presentation: "modal" }}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>
// </MessagesContextProvider>

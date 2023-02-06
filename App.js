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
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    <MessagesContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="MessagesOverview"
          component={MessagesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageMessage"
          component={ManageMessage}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </MessagesContextProvider>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function MessagesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Button
            label="Compose"
            onPress={() => {
              navigation.navigate("ManageMessage");
            }}
          />
        ),
        headerRight: () => <Button label="Logout" onPress={authCtx.logout} />,
      })}
    >
      <BottomTabs.Screen name="Inbox" component={Inbox} />
      <BottomTabs.Screen name="Sent" component={SentMessages} />
    </BottomTabs.Navigator>
  );
}

function Root() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    }
    fetchToken();
  }, []);
  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

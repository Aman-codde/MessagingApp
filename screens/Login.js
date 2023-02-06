import { useState } from "react";
import { Alert } from "react-native";
import AuthForm from "../components/Auth/AuthForm";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { login } from "../util/http";

function Login() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed! Could not log you in. Please check your credentials and try again later!"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthForm onAuthenticate={loginHandler} />;
}

export default Login;

import { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { login } from "../util/http";

function Login() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthForm onAuthenticate={loginHandler} />;
}

export default Login;

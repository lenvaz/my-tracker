import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  return isAuthenticated ? null : (
    <button disabled={isLoading} onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;

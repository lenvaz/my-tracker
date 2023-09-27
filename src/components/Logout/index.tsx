import { useAuth0 } from "@auth0/auth0-react";
import { REDIRECT_URL } from "../../App.const";

const LogoutButton = () => {
  const { isAuthenticated, logout, isLoading } = useAuth0();

  return isAuthenticated ? (
    <button
      disabled={isLoading}
      onClick={() => logout({ logoutParams: { returnTo: REDIRECT_URL } })}
    >
      Log Out
    </button>
  ) : null;
};

export default LogoutButton;

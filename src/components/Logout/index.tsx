import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { isAuthenticated, logout, isLoading } = useAuth0();

  return isAuthenticated ? (
    <button
      disabled={isLoading}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  ) : null;
};

export default LogoutButton;

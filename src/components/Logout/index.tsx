import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { isAuthenticated, logout, isLoading } = useAuth0();

  return isAuthenticated ? (
    <button
      disabled={isLoading}
      onClick={() =>
        logout({
          logoutParams: {
            // TODO: Need to write a constants file in future to hold such constants
            returnTo: `${window.location.origin}/my-tracker/`,
          },
        })
      }
    >
      Log Out
    </button>
  ) : null;
};

export default LogoutButton;

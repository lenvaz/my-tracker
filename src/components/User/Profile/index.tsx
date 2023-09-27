import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user } = useAuth0();

  return user ? (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  ) : null;
};

export default UserProfile;

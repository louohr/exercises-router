// exercise 5

import { useParams } from "react-router-dom";

const UserProfile = () => {
  // get ID
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserProfile;

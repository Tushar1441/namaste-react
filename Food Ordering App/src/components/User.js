import { useContext } from "react";
import UserContext from "../utils/UserContext";

const User = ({ name, location }) => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="support-user">
      <h2>{name}</h2>
      <h2>{location}</h2>
      <div>
        <label>Username: </label>
        <input
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <h2>Location: {location}</h2>
    </div>
  );
};

export default User;

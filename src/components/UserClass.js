import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { name, location } = this.props;

    return (
      <div className="support-user">
        <h1>About User</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <div>
          <div>
            <label>Username: </label>
            {/* <input value="" onChange={}></input> */}
          </div>
          <h2>Location: {location}</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;

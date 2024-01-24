import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="support-user">
        <h2>Username: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Count: {count}</h2>
        <button
          className="cnt-btn"
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default User;

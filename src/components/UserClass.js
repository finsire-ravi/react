import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Is for useState the valrible before the hook come the react using like this in class component
    this.state = {
      userdata: {
        name: "Dummy",
        type: "111",
      },
    };
  }

  async componentDidMount() {
    const apiData = await fetch("https://api.github.com/users/ravi-san");

    const dataJson = await apiData.json();
    // console.log(dataJson);
    console.log("UserClass Mount");
    this.setState({
      userdata: dataJson,
    });
  }
  render() {
    const { type, name, avatar_url } = this.state.userdata;
    return (
      <div className="user-data">
        <h1>Name: {name}</h1>
        <h2> type: {type}</h2>
        <h2>
          Image: <img src={avatar_url}></img>
        </h2>
      </div>
    );
  }
}

export default UserClass;

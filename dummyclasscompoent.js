// import React, { Component } from 'react'
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Is for useState the valrible before the hook come the react using like this in class component
    this.state = {
      count: 0,
      count1: 2,
    };
  }

  componentDidMount() {
    console.log("UserClass Mount");
  }
  render() {
    const { email, role, phone, name } = this.props;
    return (
      <div className="user-data">
        <h1>Name: {name}</h1>
        <h2> count: {this.state.count}</h2>
        {/* This use for usestate update useing this.setState */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2> count: {this.state.count1}</h2>
        <h2>Email: {email}</h2>
        <h3>Phone No: {phone}</h3>
        <h4>Role:{role}</h4>
      </div>
    );
  }
}

export default UserClass;

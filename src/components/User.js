import React, { useState } from "react";
import UserClass from "./UserClass";

// function User({ name, email, phone, role }) {
//   const [count] = useState(0);
//   const [count1] = useState(1);
//   return (
//     <div className="user-data">
//       <h1>Name: {name}</h1>
//       <h2>count: {count}</h2>
//       <h2>count1: {count1}</h2>
//       <h2>Email: {email}</h2>
//       <h3>Phone No: {phone}</h3>
//       <h4>Role: {role}</h4>
//       <UserClass />
//     </div>
//   );
// }

class User extends React.Component {
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
    console.log("User Mount");
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
        <UserClass
          name={"Ravi Class"}
          email={"ravi@finsire.com"}
          phone={"70107740969"}
          role={"class backend"}
        ></UserClass>
      </div>
    );
  }
}

export default User;

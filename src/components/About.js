import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>Welcome the React series for routing the About page</h1>
      <User
        name={"Ravi Function"}
        email={"ravi@finsire.com"}
        phone={"9003372994"}
        role={"function backend"}
      ></User>
      <UserClass
        name={"Ravi Class"}
        email={"ravi@finsire.com"}
        phone={"70107740969"}
        role={"class backend"}
      ></UserClass>
    </div>
  );
};

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }

//   componentDidMount() {
//     console.log("Parent Mount");
//   }

//   render() {
//     return (
//       <div>
//         <h1>Welcome the React series for routing the About page</h1>
//         <User
//           name={"Ravi Function"}
//           email={"ravi@finsire.com"}
//           phone={"9003372994"}
//           role={"function backend"}
//         ></User>
//       </div>
//     );
//   }
// }

export default About;

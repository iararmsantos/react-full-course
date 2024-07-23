import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  // constructor() {}
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  render() {
    //this.props can be accessed because we extended Components
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;

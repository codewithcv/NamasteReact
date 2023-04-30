import React from "react";

class ContactEmail extends React.Component {
  constructor(props) {
    console.log("ContactEmail-Constructor");
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {
    console.log("ContactEmail-ComponentDIDMount");
    this.setState({
      count: this.state.count + 1,
      count2: this.state.count2 + 2,
    });
  }
  render() {
    console.log("ContactEmail-render");
    return (
      <>
        <h2>My Email is {this.props.email}</h2>
        <div>Count : {this.state.count}</div>
        <div>Count2 : {this.state.count2}</div>
      </>
    );
  }
}

export default ContactEmail;

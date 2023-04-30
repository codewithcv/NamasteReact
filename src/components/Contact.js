import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    console.log("Contact-Constructor");
  }
  componentDidMount() {
    console.log("Contact-ComponentDidMount");
    this.Interval = setInterval(() => {
      console.log("Contact SetTimeout");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    console.log("Contact-render");
    return (
      <>
        <h1>You can contact me at {this.props.phone}</h1>
      </>
    );
  }
}

export default Contact;

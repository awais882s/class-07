import React, { Component } from "react";

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "AWAIS S",
    };
  }
  // life cycle of components

  componentDidCatch() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidUpdate() {}
  shouldComponentUpdate() {}
  updateHandler = () => {
    this.setState({
      customerName: "Waqar",
    });
  };

  render() {
    const { customerName } = this.state;
    return <div>Class Base customer Customers {customerName}</div>;
  }
}

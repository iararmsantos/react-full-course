import React, { Component } from "react";

class ErrorBoundary extends Component {
  //can be used only in class based component
  //trigger whenver a child component throws an error
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    // to wrap error boundary through child users
    return this.props.children;
  }
}

export default ErrorBoundary;

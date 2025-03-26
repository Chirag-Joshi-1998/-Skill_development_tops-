import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps called");
    return null; // No state change
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true; // Always update
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render method called");
    return (
      <div>
        <h2>React Lifecycle Methods Demo</h2>
        <p>Count: {this.state.count}</p>
        <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;

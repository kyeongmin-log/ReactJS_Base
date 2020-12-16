import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoding: false });
    }, 3000);
  }
  render() {
    const { isLoding } = this.state;
    return <div>{isLoding ? "Loding..." : "We are Ready"}</div>;
  }
}

export default App;

import React from "react";

class Detail extends React.Component {
  //class component 내에서 render가 실행되기 전에 실행됨
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //url의 기능으로 앞으로,뒤로, 새로고침 등이 가능
    }
  }
  render() {
    const { location } = this.props;
    //넘어간 페이지에서 새로고침할 경우 즉, 렌더가 될 경우 location.state값이 undefined이므로 에러가 난다. 이를 방지하기 위해 state가 undefined값이면 null 값을 보내준다.
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;

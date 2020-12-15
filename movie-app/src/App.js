import React from "react";
//es6에서 나온 문법. props의 내부 속성에 접근한다. 즉, props.fav === {fav}
function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}
//<Food />와 같은 기능을 jsx(HTML + javascript)라고 한다. jsx는 react에서 나오는 특징이다.
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="chicken" />
    </div>
  );
}

export default App;

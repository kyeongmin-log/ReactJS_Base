import React from "react";
import PropTypes from "prop-types";

const foodList = [
  {
    id: 1,
    name: "chicken",
    image:
      "https://www.melissassouthernstylekitchen.com/wp-content/uploads/2019/02/SouthernFriedChicken002.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "meat",
    image:
      "https://www.foodbusinessnews.net/ext/resources/2019/12/MeatPoultryProducts_Lead.jpg?1576769837",
    rating: 4.5,
  },
];
//props로 넘어온 값을 체크하는 것(string, number, func, object 등등 비교할 수 있다.)
foodList.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
//es6에서 나온 문법. props의 내부 속성에 접근한다. 즉, props.fav === {fav}
function Food({ name, img, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={img} alt={name} width="10%" />
    </div>
  );
}
//<Food />와 같은 기능을 jsx(HTML + javascript)라고 한다. jsx는 react에서 나오는 특징이다.
function App() {
  return (
    <div>
      {foodList.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          img={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;

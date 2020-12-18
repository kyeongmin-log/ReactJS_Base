import react from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//es6 문법. ex)원래 props를 가져와서 props.id 이런 식으로 썼지만 {id}라는 문법을 통해 바로 id로 쓸 수 있다.
function Movie({ year, title, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
//타입 검사
Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;

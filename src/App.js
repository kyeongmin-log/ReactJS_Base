import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };
  //async, await : axios로 데이터를 가져오는 건 빠르지 않다. 그렇기에 데이터를 가져올 때까지 기다려달라고 요청할 필요가 있다. 이때 사용하는 것이 async, await이다.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoding: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className="container">
        {isLoding ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;

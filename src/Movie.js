import React from "react";
// import "./App.css";
import { NavLink } from "react-router-dom";
// import Home from "./home";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName =Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key ={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{movieName.length>= 15 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt={imdbID} srcSet="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
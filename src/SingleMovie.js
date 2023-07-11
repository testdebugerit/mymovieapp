import React from "react";
// import useFetch from "./useFetch";
// import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
// import Movies from './movies';

const SingleMovie = () => {
const {id} = useParams();
console.log(id);
  return (
   <>
<div>Our single Movie {id}</div>
   </>
);
};
export default SingleMovie;
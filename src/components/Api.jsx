import { MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Movie from "./Movie";
import axios from "axios";
import { useEffect } from "react";
import { saveData } from "../reducers/ApiReducer";
import { useDispatch, useSelector } from "react-redux";
export const Api = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[0]);
  console.log(movies);
  const fetchData = () => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((res) => {
        dispatch(saveData(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (movies.length === 0) {
    return "loading ....";
  }
  return (
    <>
      <MDBRow className="g-0 justify-content-evenly align-items-center g-2">
        {movies?.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </MDBRow>
    </>
  );
};

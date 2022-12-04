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
  // const fetchData = () => {
   
  // };
  // get data from api using axios 
  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows")
    .then((res) => {
      // use dispatch to send payload to reducer
      dispatch(saveData(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  // if state is empty wait to get data from api 
  if (movies.length === 0) {
    return "loading ....";
  }
  return (
    <>
      <MDBRow className="g-0 justify-content-evenly align-items-center g-2">
        {movies?.map((movie) => {
          // send object as a props to cmovie component 
          return <Movie movie={movie} key={movie.id} />;
        })}
      </MDBRow>
    </>
  );
};

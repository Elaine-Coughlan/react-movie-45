import React from "react";
import Grid from "@mui/material/Grid2";
import ShowsList from "../components/tvshows/listComponent";

const TVShowsHomePage = (props) => {
  const sample = {

    "adult": false,
    "backdrop_path": "/aizbHLcKVWvJ7jxkflJzTu5Z8GE.jpg",
    "genre_ids": [
      10766
    ],
    "id": 81329,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Un si grand soleil",
    "overview": "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
    "popularity": 3519.173,
    "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
    "first_air_date": "2018-08-27",
    "name": "Chronicles of the Sun",
    "vote_average": 7,
    "vote_count": 107
  };

     

const shows = [sample, sample, sample];
    
  return (
    <Grid container>
        <Grid size={12}>
            <h1> HomePage </h1>
        </Grid>
        <Grid container>
          <ShowsList shows={shows}></ShowsList>
        </Grid>
      </Grid>
    );
  };
export default TVShowsHomePage;


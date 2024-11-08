import React,{useEffect, useState} from "react";
import Grid from "@mui/material/Grid2";
import ShowsList from "../components/tvshows/listComponent";
import Header from "../components/headerMovieList";

const TVShowsHomePage = (props) => {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        return json.results;
      })
      .then((shows) => {
        setShows(shows);
      });
  }, []);
    
  return (
    
    <Grid container>
        <Grid size={12}>
            <Header title={"TV Page"} />
        </Grid>
        <Grid container>
          <ShowsList shows={shows}></ShowsList>
        </Grid>
      </Grid>
     
    );
  };
export default TVShowsHomePage;



/*
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
*/
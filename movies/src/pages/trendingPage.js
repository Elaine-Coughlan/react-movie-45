import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templatesMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TrendingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Movies being talked about"
      movies={movies}
      action={(movie) => {
        return 
      }}
    />
);

};
export default TrendingPage;
import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviePage from "./pages/favouriteMoviePage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader"

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favourites" element={<FavouriteMoviePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
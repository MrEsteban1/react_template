// import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../generals/components";
import { DCPages, Hero, MarvelPages, SearchPage } from "../pages";
import { HeroPage } from "../components/HeroPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DCPages />} />
          <Route path="dc" element={<DCPages />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<Hero />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};

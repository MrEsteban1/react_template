// import React from 'react'

import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth/pages";
import { HeroesRoutes } from "../heroes/router";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HeroesRoutes />} />
        <Route path="/login" element={<LoginPages />} />
      </Routes>
    </>
  );
};

export default AppRouter;

// import React from 'react'

import { HeroList } from "../components/HeroList";

export const DCPages = () => {
  return (
    <h1>
      DC Heroes
      <hr />
      <ul>
        <HeroList publisher={"DC Comics"} />
      </ul>
    </h1>
  );
};

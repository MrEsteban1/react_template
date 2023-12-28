// import React from "react";
import { HeroList } from "../components/HeroList";
export const MarvelPages = () => {
  return (
    <h1>
      Marvel Heroes
      <hr />
      <ol>
        <HeroList publisher={"Marvel Comics"} />
      </ol>
    </h1>
  );
};

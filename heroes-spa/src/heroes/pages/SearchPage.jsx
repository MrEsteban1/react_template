import { HeroCard } from "../components/HeroCard";

// import React from "react";
export const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div>
        <h4>Searching</h4>
        <hr />
        <form action="">
          <input
            type="text"
            className="form-control"
            placeholder="Search a hero..."
            autoComplete="off"
          />
          <button className="btn btn-primary mt-1">Search</button>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr />
        <div className="alert alert-primary">No results, search a hero.</div>
        <div className="alert alert-danger">No results match.</div>
      </div>
    </>
  );
};

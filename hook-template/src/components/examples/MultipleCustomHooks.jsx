// import React from 'react'

import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/" + counter
  );

  return (
    <>
      <hr />
      <h1>Bracking Bad Quotes:</h1>
      {isLoading ? (
        <div className="alert alert-info">Cargando...</div>
      ) : (
        <blockquote>
          <p>{data[0].quote}</p>
          <footer className="blockquote-footer"> {data[0].author}</footer>
        </blockquote>
      )}
      <button
        disabled={isLoading}
        onClick={() => {
          increment();
        }}
        className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  );
};

export default MultipleCustomHooks;

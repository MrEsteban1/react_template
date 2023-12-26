import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../store/slices/pokemons/thunks";

export const PokemonsApp = () => {
    const dispatch = useDispatch()
    // bring data of redux's state
    const data =  useSelector( state => state.pokemons) 

    useEffect(()=>{
        dispatch(getPokemons(1))
    },[])

  return (
    <>
      <h1>Pokemons App</h1> <hr />
      {data.isLoading && <p className="alert alert-warning"> Datos no ubicados  </p>}
      <ul className="list-group">
        {data.pokemons.map(pokemon => <li className="list-group-item">{pokemon.name}</li>)} 
      </ul>
      <button className="btn btn-primary mt-3" onClick={()=>{dispatch(getPokemons(data.page))}}>Next</button>
    </>
  );
};

import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons =  (page = 0) => {
    return async (dispatch, getState)=> {
        dispatch(startLoadingPokemons())
        //TODO realizar peticion http
        const resp = await pokemonApi.get("/pokemon?limit=10&offset="+page)
        console.log(resp)
        dispatch(setPokemons({pokemons : resp.data.results, page: page + 1}) )

    }
}
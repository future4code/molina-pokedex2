import axios from 'axios'
import React, {useState} from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import { usePalette } from 'react-palette'

const GlobalState = (props) => {
    const[pokemonsDetails, setPokemonDetails] = useState([])
    const[pokemon, setPokemon] = useState([])

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        .then((response) => {
            setPokemon(response.data.results)
            getPokemonsDetails(response.data.results)
        }).catch((error) => {
            console.log(error.reponde)
        })
    }

    const getPokemonsDetails = async (pokemons) => {
        const pokemonsArrays = []
        for(const pokemon of pokemons){
            try{
                const res = await axios.get(pokemon.url)
                pokemonsArrays.push(res.data)
            }
            catch(err){
                console.log(err.response)
            }
        }
        setPokemonDetails(pokemonsArrays)
    }

    const states = {pokemonsDetails, pokemon}
    const setters = {setPokemonDetails}
    const requests = {getPokemons, getPokemonsDetails}

    return(
        <GlobalStateContext.Provider value={{states, setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState

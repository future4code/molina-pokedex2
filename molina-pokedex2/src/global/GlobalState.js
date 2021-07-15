import axios from 'axios'
import React, {useState} from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import { usePalette } from 'react-palette'

const GlobalState = (props) => {
    const[pokemonsDetails, setPokemonDetails] = useState([])    

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        .then((response) => {
            getPokemonsDetails(response.data.results)
        }).catch((error) => {
            console.log(error.reponde)
        })
    }

    const getPokemonsDetails = (pokemons) => {
        pokemons.forEach((pokemon) => {
            axios.get(`${pokemon.url}`)
            .then((response) => {
                const pokemons = pokemonsDetails
                pokemons.push(response.data)
                setPokemonDetails(pokemons)
            }).catch((error) => {
                console.log(error.reponde)
            })
        })
    }

    const states = {pokemonsDetails}
    const setters = {setPokemonDetails}
    const requests = {getPokemons}

    return(
        <GlobalStateContext.Provider value={{states, setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState

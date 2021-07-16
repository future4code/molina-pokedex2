import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import { usePalette } from 'react-palette'
import { BASE_URL } from '../constants/Url'

const GlobalState = (props) => {
    const [pokemonsDetails, setPokemonsDetails] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(()=>{
        getPokemons()
    },[])
    
        const getPokemons = () => {
            axios.get(`${BASE_URL}/pokemon/?limit=20&offset=0`)
            .then((response) => {
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
        setPokemonsDetails(pokemonsArrays)
    }

    const states = {pokemonsDetails, pokedex}
    const setters = {setPokemonsDetails, setPokedex}
    const requests = {getPokemons, getPokemonsDetails}

    return(
        <GlobalStateContext.Provider value={{states, setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
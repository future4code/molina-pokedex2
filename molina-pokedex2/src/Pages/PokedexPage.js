import React, {useContext, useEffect} from 'react'
import CardPokemon from '../components/Cards/CardPokemon'
import {Container} from '../styled/Cads'
import { GlobalStateContext } from '../global/GlobalStateContext'
import Header from '../components/Header/Header';

const PokedexPage = () => {
    const { states, requests } = useContext(GlobalStateContext);
    const { pokemonsDetails } = states
    const { getPokemons } = requests

    useEffect(()=>{
        getPokemons()
    },[])

    const allPokemons = (states.pokedex.map((pokemon, index) => {

        return(
            <div key={index}>
                {pokemon.abilities && <CardPokemon pokedex pokemonDetails={pokemon}/>}
            </div>
        )
    }))

    return(
        <div> 
        <Header/>
        <Container>
            {allPokemons}
        </Container>
        </div>
    )
}

export default PokedexPage
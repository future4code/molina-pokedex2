import React, {useContext, useEffect} from 'react'
import CardPokemon from '../components/Cards/CardPokemon'
import {Container} from '../styled/Cads'
import { GlobalStateContext } from '../global/GlobalStateContext'
import Header from '../components/Header/Header';
import {ContainerCards } from '../styled/Home'


const HomePage = () => {
    const { states, requests } = useContext(GlobalStateContext);
    const { pokemonsDetails } = states
    const { getPokemons } = requests

    const allPokemons = (pokemonsDetails.map((pokemon, index) => {
        return(
            <div key={index}>
                {pokemon.abilities && <CardPokemon pokemonDetails={pokemon}/>}
            </div>
        )
    }))

    return(
        <div> 
        <Header/>
        <div>
            {pokemonsDetails ? 
            <Container> {allPokemons} </Container>
            : <p> Carregando... </p>}
        </div>
        </div>
    )
}

export default HomePage
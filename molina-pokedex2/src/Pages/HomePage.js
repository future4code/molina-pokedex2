import React, {useContext, useEffect} from 'react'
import CardPokemon from '../components/Cards/CardPokemon'
import {Container} from '../styled/Cads'
import { GlobalStateContext } from '../global/GlobalStateContext'
import Header from '../components/Header/Header';
import {ContainerHomePage} from '../styled/Cads'


const HomePage = () => {
    const { states } = useContext(GlobalStateContext);
    const { pokemonsDetails } = states

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
        <ContainerHomePage>
            {pokemonsDetails ? 
            <Container> {allPokemons} </Container>
            : <p> Carregando... </p>}
        </ContainerHomePage>
        </div>
    )
}

export default HomePage
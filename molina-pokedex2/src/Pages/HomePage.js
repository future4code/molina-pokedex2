import React, {useContext, useEffect} from 'react'
import CardPokemon from '../Components/Cards/CardPokemon'
import {Container} from '../styled/Cads'
import { GlobalStateContext } from '../global/GlobalStateContext'

const HomePage = () => {
    const { states, requests } = useContext(GlobalStateContext);
    const {pokemonsDetails} = states
    const {getPokemons} = requests

    useEffect(()=>{
        getPokemons()
    },[])

    const allPokemons = (pokemonsDetails.map((pokemon, index) => {

        return(
            <div key={index}>
                {pokemon.abilities && <CardPokemon pokemonDetails={pokemon}/>}
            </div>
        )
    }))

    return(
        <Container>
            {allPokemons}
        </Container>
    )
}

export default HomePage
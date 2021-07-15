import React from 'react'
import GetPokemons from '../Hooks/GetPokemons'
import CardPokemon from '../components/Cards/CardPokemon'
import {Container} from '../styled/Cads'

const HomePage = () => {
    const pokemons = GetPokemons()

    const allPokemons = (pokemons.map((pokemon) => {
        return(
            <CardPokemon url={pokemon.url} key={pokemon.name}/>
        )

    }))


    return(
        <Container>
            {allPokemons}
        </Container>
    )
}

export default HomePage
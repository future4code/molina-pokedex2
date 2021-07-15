import React, {useContext, useEffect} from 'react'
import CardPokemon from '../Components/Cards/CardPokemon'
import {Container} from '../styled/Cads'
import { GlobalStateContext } from '../global/GlobalStateContext'

const HomePage = () => {
    const { states, requests } = useContext(GlobalStateContext);
    const {pokemonsDetails} = states
    const {getPokemons} = requests

    useEffect(() =>{
        getPokemons()
    },[])

    console.log("detalhe pokemon Homepage",pokemonsDetails)

    const allPokemons = (pokemonsDetails.map((pokemon, index) => {
        return(
            <CardPokemon pokemonDetails={pokemon} key={index}/>
        )
    }))

    return(
        <Container>
            {allPokemons}
        </Container>
    )
}

export default HomePage
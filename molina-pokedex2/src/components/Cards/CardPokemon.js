import React from 'react'
import { usePalette } from 'react-palette'
import { useHistory } from 'react-router'
import {ContaineCads} from '../../styled/Cads'

const CardPokemon = (props) => {
    const history = useHistory()
    const { data } = usePalette(props.pokemonDetails.sprites.front_default)

    const goToPokemonDetails = () => {
        const color = data.vibrant.split("#")[1]
        history.push(`/pokemondetails/${props.pokemonDetails.forms[0].name}/${color}`)
    }

    return(
    <ContaineCads style={{backgroundColor: data.vibrant}}>
            {<h2>{props.pokemonDetails.forms && props.pokemonDetails.forms[0].name}</h2>}
            <div id="containerImg">
                {props.pokemonDetails.sprites && props.pokemonDetails.sprites.front_default
                && <img src={props.pokemonDetails.sprites.front_default} alt="imagem"/>}
            </div>
            <div id="containerButtons">
                <button className="buttons">Adicionar a Pokedex</button>
                <button className="buttons" onClick={goToPokemonDetails}>Detalhar</button>
        </div>
    </ContaineCads>)
}

export default CardPokemon
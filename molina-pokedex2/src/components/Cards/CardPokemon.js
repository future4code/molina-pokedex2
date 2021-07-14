import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { usePalette } from 'react-palette'
import { useHistory } from 'react-router'
import {ContaineCads} from '../../styled/Cads'

const CardPokemon = (props) => {
    const history = useHistory()
    const[pokemon, setPokemon] = useState({})
    const[linkImage, setLinkImage] = useState("")
    const { data, loading, error } = usePalette(linkImage)

    useEffect(()=>{
        axios.get(`${props.url}`)
        .then((response) =>{
            setPokemon(response.data)
            setLinkImage(response.data.sprites.front_default)
        })
        .catch((error) =>{
            console.log(error.response)
        })
    },[])

    const goToPokemonDetails = () => {
        history.push()
    }



    return(
    <ContaineCads style={{backgroundColor: data.vibrant}} key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <div id="containerImg">
                {pokemon.sprites && pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} alt={pokemon.name}/>}
            </div>
            <div id="containerButtons">
                <button className="buttons">Adicionar a Pokedex</button>
                <button className="buttons" onClick={goToPokemonDetails}>Detalhar</button>
        </div>
    </ContaineCads>)
}

export default CardPokemon
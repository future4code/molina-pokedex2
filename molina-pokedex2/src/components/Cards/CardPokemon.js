import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { usePalette } from 'react-palette'
import { useHistory } from 'react-router'
import {ContaineCads} from '../../styled/Cads'

const CardPokemon = (props) => {
    console.log(props.pokemonDetails)
    const history = useHistory()
    const[pokemon, setPokemon] = useState({})
    const[linkImage, setLinkImage] = useState("")
    const { data, loading, error } = usePalette(linkImage)

    // props.pokemonDetails.sprites && props.pokemonDetails.sprites.front_default && setLinkImage(props.pokemonDetails.sprites.front_default)

    



    // useEffect(()=>{
    //     axios.get(`${props.url}`)
    //     .then((response) =>{
    //         setPokemon(response.data)
    //         setLinkImage(response.data.sprites.front_default)
    //     })
    //     .catch((error) =>{
    //         console.log(error.response)
    //     })
    // },[])

    const goToPokemonDetails = () => {
        const pokemondetails = props.pokemonDetails
        history.push(`/pokemondetails/${props.pokemonDetails.forms[0].name}`)
    }

    return(
    <ContaineCads style={{backgroundColor: data.vibrant}}>
            {<h2>{props.pokemonDetails.forms && props.pokemonDetails.forms[0].name}</h2>}
            <div id="containerImg">
                {props.pokemonDetails.sprites && props.pokemonDetails.sprites.front_default
                && <img src={props.pokemonDetails.sprites.front_default}/>}
            </div>
            <div id="containerButtons">
                <button className="buttons">Adicionar a Pokedex</button>
                <button className="buttons" onClick={goToPokemonDetails}>Detalhar</button>
        </div>
    </ContaineCads>)
}

export default CardPokemon
import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
    const params = useParams()
    console.log(params)
    return(
        <div>PokemonDetails</div>
    )
}

export default PokemonDetails
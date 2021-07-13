import React, {useState} from 'react'
import {Container,ContaineCads} from '../../styled/Cads'
import GetPredominatColor from '../../Functions/GetPokemonDetails'
import GetPokemons from '../../Hooks/GetPokemons'
import getPokemonDetails from '../../Functions/GetPokemonDetails'

const Cards = () => {

    const pokemons = GetPokemons()
    console.log("Todos os Pokemons:", pokemons)

    const allPokemons = (pokemons.map((pokemon) => {
        const pokemonDetails = getPokemonDetails(pokemon.url)
        console.log("urlpokemon pokemons",pokemon.url)
        console.log("detalhes pokemons",pokemonDetails)
        if (pokemonDetails !== null){
            const predominantColor = GetPredominatColor(pokemonDetails.sprites)
            return(
            <ContaineCads style={{backgroundColor: predominantColor}} key={pokemon.name}>
                    <h2>{pokemonDetails.sprites}</h2>
                    <div id="containerImg">
                        <img src={pokemon.url} alt={pokemon.name}/>
                    </div>
                    <div id="containerButtons">
                        <button className="buttons">Adicionar a Pokedex</button>
                        <button className="buttons">Detalhar</button>
                </div>
            </ContaineCads>
        )
        }else{
            return(
                <div>Não há pokemon</div>
            )
        }
        
    }))

//     const[pokemons, setPokemons] = useState([
//         {
//             name: "squirtle",
//             url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGzLq6RYTXM2_WZ_EvRi40WrPxbNIrs45G6V2xMt938AZ_d3UVRWEjIGjgIOOpVChsAI&usqp=CAU"
//         },
//         {
//             name: "Charmander",
//             url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Pok%C3%A9mon_Charmander_art.png/220px-Pok%C3%A9mon_Charmander_art.png"
//         }
// ])

//     const allPokemons = pokemons.map((pokemon) => {
//         const predominantColor = GetPredominatColor(pokemon.url)
//         return(
//             <ContaineCads style={{backgroundColor: predominantColor}}>
//                     <h2>{pokemon.name}</h2>
//                     <div id="containerImg">
//                         <img src={pokemon.url} alt={pokemon.name}/>
//                     </div>
//                     <div id="containerButtons">
//                         <button className="buttons">Adicionar a Pokedex</button>
//                         <button className="buttons">Detalhar</button>
//                 </div>
//             </ContaineCads>
//         )
//     })

    return(
        <Container>
            {allPokemons}
        </Container>
    )
}

export default Cards
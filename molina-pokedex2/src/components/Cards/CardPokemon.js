import React, { useContext} from 'react'
import { usePalette } from 'react-palette'
import { useHistory } from 'react-router'
import {ContaineCads} from '../../styled/Cads'
import { GlobalStateContext } from '../../global/GlobalStateContext'

const CardPokemon = (props) => {
    const history = useHistory()
    const { data } = usePalette(props.pokemonDetails.sprites.front_default)
    const { states, requests, setters } = useContext(GlobalStateContext);
    const { pokemonsDetails, pokedex } = states
    const { getPokemons } = requests
    const { setPokemonsDetails, setPokedex } = setters


    const goToPokemonDetails = () => {
        const color = data.vibrant.split("#")[1]
        history.push(`/pokemondetails/${props.pokemonDetails.forms[0].name}/${color}`)
    }

    const addToPokedex = () => {
        const pokeIndex = pokemonsDetails.findIndex(
          (item) => item.name === props.pokemonDetails.name
        );
        const newPokemonsList = [...pokemonsDetails];
        newPokemonsList.splice(pokeIndex, 1);
        const orderedPokemons = newPokemonsList.sort((a, b) => {
          return a.id - b.id;
        });
    
        const newPokedexList = [...pokedex, props.pokemonDetails];
        const orderedPokedex = newPokedexList.sort((a, b) => {
          return a.id - b.id;
        });
    
        setPokedex(orderedPokedex);
        setPokemonsDetails(orderedPokemons);
      };
    
      const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex(
          (item) => item.name === props.pokemonDetails.name
        );
    
        const newPokedexList = [...pokedex];
        newPokedexList.splice(pokeIndex, 1);
        const orderedPokedex = newPokedexList.sort((a, b) => {
          return a.id - b.id;
        });
    
        const newPokemonsList = [...pokemonsDetails, props.pokemonDetails];
        const orderedPokemons = newPokemonsList.sort((a, b) => {
          return a.id - b.id;
        });
    
        setPokedex(orderedPokedex);
        setPokemonsDetails(orderedPokemons);
      };
    

    return(
    <ContaineCads style={{backgroundColor: data.vibrant}}>
            {<h2>{props.pokemonDetails.forms && props.pokemonDetails.forms[0].name}</h2>}
            <div id="containerImg">
                {props.pokemonDetails.sprites && props.pokemonDetails.sprites.front_default
                && <img src={props.pokemonDetails.sprites.front_default} alt="imagem"/>}
            </div>
            <div id="containerButtons">
                <button className="buttons"
                    onClick={props.pokedex ? removeFromPokedex : addToPokedex}
                >
                {props.pokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
                </button>
                <button className="buttons" onClick={goToPokemonDetails}>Detalhar</button>
        </div>
    </ContaineCads>)
}

export default CardPokemon
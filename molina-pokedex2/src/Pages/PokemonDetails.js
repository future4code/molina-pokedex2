import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalStateContext } from '../global/GlobalStateContext'
import {ContaineCads, CardAtaques, CardPoderes, CardTipo,ContainerMain} from './styled'
import Header from '../components/Header/Header';

const PokemonDetails = () => {
    const { states} = useContext(GlobalStateContext);
    const {pokemonsDetails} = states
    const params = useParams()
    const [details, setDetails] = useState()

    const verification = () => {
        pokemonsDetails.forEach(element => {
            if(params.name === element.name) {
                setDetails(element)
            }
            
        })
    }
    
    useEffect(() => {
        verification()
 
    }, [])

    const types = ()=>{
        //if(details && details.types)
        if(details?.types){
            return details.types.map((type) => {
                return(
                    <div>
                    <p> {type.type.name} </p>
                </div>
                )
            })
        }
        return '<></>'
    }
   

    const moves = ()=>{
        //if(details && details.types)
        if(details?.moves){
              return details.moves.map((move) => {
                return(
                    <div>
                    <p> {move.move.name} </p>
                </div>
                )
            })  
            
        }
        return '<></>'
    }
  
    return(
        <div>
            <Header/>
            <ContainerMain>
            {details ? 
                <ContaineCads style={{backgroundColor: `#${params.color}`}}>
                    <img src= {details.sprites.front_default} />
                    <img src= {details.sprites.back_default} />
                </ContaineCads>
            : <></>}
            {details  ?
                <div>
                    <CardPoderes>
                        <h2> Poderes </h2>
                        <p> hp: {details.stats[0].base_stat} </p>
                        <p> attack: {details.stats[1].base_stat} </p>
                        <p> defense: {details.stats[2].base_stat} </p>
                        <p> special-attack: {details.stats[3].base_stat} </p>
                        <p> special-defense: {details.stats[4].base_stat} </p>
                        <p> speed: {details.stats[5].base_stat} </p>
                    </CardPoderes>
                    
                </div>
            : <p> Carregando </p> }
            
            
            <CardAtaques>
                <CardTipo>
                    <h4> Tipo </h4>
                    {types()}
                </CardTipo>
                <h2> Principais ataques </h2>
                {/* {moves()} */}
                {details ? 
                    <div> 
                        <p> { details.moves[0].move.name} </p> 
                        <p>{ details.moves[1].move.name}  </p>
                        <p>  { details.moves[2].move.name} </p>
                        <p>{ details.moves[3].move.name}  </p> 
                        <p> { details.moves[4].move.name} </p>
                    </div>
                : <p> calma </p>}
            </CardAtaques>
            </ContainerMain>
        </div>
    )
}

export default PokemonDetails
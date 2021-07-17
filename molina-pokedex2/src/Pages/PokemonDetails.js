import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalStateContext } from '../global/GlobalStateContext'
import {ContaineCads, CardAtaques, CardPoderes, CardTipo,
    ContainerMain, ContainerDetails, ImgFront, ImgBack, 
    ContainerImg, ContainerInformationOne, ContainerTipo} from './styled'
import Header from '../components/Header/Header';

const PokemonDetails = () => {
    const { states} = useContext(GlobalStateContext);
    const {pokemonsDetails, pokedex} = states
    const params = useParams()
    const [details, setDetails] = useState()

    const verification = () => {
        pokedex.forEach(element => {
            if(params.name === element.name) {
                setDetails(element)
            }
        })
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
                    <CardTipo>
                    <p> {type.type.name} </p>
                </CardTipo>
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

    const colorVerification = (caracteristica) => {
       
        if(caracteristica > 50){
            return `228B22`
        } else if( caracteristica < 50) {
            return  `FF0000`
        } else if( caracteristica === 50) {
            return `FFD700`
        }

        
    }
    
  
    return(
        <div>
            <Header/>
            { details &&
            <ContainerMain style={{backgroundColor: `#${params.color}`}}>
                <ContainerTipo>
                            {types()}
                        </ContainerTipo>
                {details ? 
                    <ContaineCads >
                        <ContainerImg>
                                <ImgFront src= {details.sprites.front_default} />
                                <ImgBack src= {details.sprites.back_default} />
                            </ContainerImg>
                    </ContaineCads>
                : <></>}
                <ContainerDetails >
                    {details  ?
                        <ContainerInformationOne>
                            <CardPoderes>
                                <h2> Poderes </h2>
                                <p> 
                                    <b>HP: </b> {details.stats[0].base_stat} 
                                    <b style={{color: `#${colorVerification(details.stats[0].base_stat)}`}}>___________________________________________________________</b>
                                </p>
                                <p> 
                                    <b> Attack:</b> {details.stats[1].base_stat} 
                                    <b style={{color: `#${colorVerification(details.stats[1].base_stat)}`}}>_______________________________________________________</b>
                                </p>
                                <p> 
                                    <b>Defense: </b> {details.stats[2].base_stat} 
                                    <b style={{color: `#${colorVerification(details.stats[2].base_stat)}`}}>______________________________________________________</b>
                                </p>
                                <p> 
                                    <b>Special-Attack: </b> {details.stats[3].base_stat} 
                                    <b style={{color: `#${colorVerification(details.stats[3].base_stat)}`}}>________________________________________________</b>
                                </p>
                                <p> 
                                    <b> Special-Defense:</b> {details.stats[4].base_stat} 
                                    <b style={{color: `#${colorVerification(details.stats[4].base_stat)}`}}>______________________________________________</b>
                                </p>
                                <p> 
                                    <b>Speed: </b> {details.stats[5].base_stat} 
                                    <b style={{color: `#${colorVerification(details.stats[5].base_stat)}`}}>_______________________________________________________</b>
                                </p>
                            </CardPoderes>
                        </ContainerInformationOne>
                    : <p> Carregando </p> }
                    <CardAtaques>
                        
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
                </ContainerDetails>
            </ContainerMain> }
        </div>
    )
}

export default PokemonDetails
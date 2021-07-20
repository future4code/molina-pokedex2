import React from 'react'
import {ContainerHeader, ContainerBotoes, Button} from "../../styled/HeaderStyled"
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()

    let urlAtual = (window.location.href).split("/")
   
    let urlAgrupada = ''
    for(let i = 3; i<urlAtual.length; i++) {
        urlAgrupada = urlAgrupada.concat(urlAtual[i])
    }

    const goToPokedex = () =>{
        history.push("/pokedexpage")
    }

    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push("/")
    }

    return(
        <ContainerHeader>
            <h1>Pokedex</h1>
            <div>
                { urlAtual.length > 0 && urlAtual[3] === "pokemondetails" &&
                    <ContainerBotoes>
                        <Button onClick={goToPokedex}>Pokedex</Button>
                        <Button onClick={goBack}> Voltar</Button>
                    </ContainerBotoes>
                }
                { urlAgrupada.length === 0 && 
                    <Button onClick={goToPokedex}>Pokedex</Button> }
                { urlAtual.length > 0 && urlAgrupada === "pokedexpage" &&
                    <ContainerBotoes>
                        <Button onClick={goHome}> Home</Button>
                        <Button onClick={goBack}> Voltar</Button> 
                    </ContainerBotoes> }
            </div>
        </ContainerHeader>
    )
}

export default Header
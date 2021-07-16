import React from 'react'
import {ContainerHeader} from "../../styled/HeaderStyled"
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()

    let urlAtual = (window.location.href).split("/")
   console.log("linkatual", urlAtual[4])

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

    return(
        <ContainerHeader>
                 { urlAtual.length > 0 && urlAtual[3] === "pokemondetails" &&
                    <div>
                        <button onClick={goToPokedex}>Pokedex</button>
                        <button onClick={goBack}> Voltar</button>
                    </div>
                }
            
                { urlAgrupada.length === 0 && 
                <button onClick={goToPokedex}>Pokedex</button> }
                { urlAtual.length > 0 && urlAgrupada === "pokedexpage" &&
                    <button onClick={goBack}> Voltar</button> }
            <h1>Pokedex</h1>
        </ContainerHeader>
    )
}

export default Header
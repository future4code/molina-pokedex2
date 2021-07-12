import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()

    const changePage = () =>{
        history.push("/pokedexpage")
    }

    return(
        <div>
            <button onClick={changePage}>Pokedex</button>
        </div>
    )
}

export default Header
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage'
import PokemonDetails from '../Pages/PokemonDetails'
import PokedexPage from '../Pages/PokedexPage';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/pokemondetails/:name?/:color?">
                    <PokemonDetails/>
                </Route>
                <Route exact path="/pokedexpage">
                    <PokedexPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
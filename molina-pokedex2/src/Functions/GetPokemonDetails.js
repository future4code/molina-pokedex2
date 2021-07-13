import axios from 'axios'

const getPokemonDetails = async (url) => {
    let data = {}

    try
    {
        data = (await axios.get(`${url}`)).data;
    }
    catch(error)
    {
        console.log(error.response)
    }
    console.log("Dados pokemon:", data)
    return data
}

export default getPokemonDetails
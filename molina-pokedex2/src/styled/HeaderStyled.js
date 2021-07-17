import styled from 'styled-components'

export const ContainerHeader = styled.div`
    /* background-color: #00BFFF; */
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 3px #765441;
    
    h1 {
        color: #303A42;
        margin-left: 35px;

    }
`

export const ContainerBotoes = styled.div`

    margin-right: 35px;


`

export const Button = styled.button`
    margin-left: 10px;
    margin-right: 30px;
    height: 35px;
    padding: 0px 15px;
    border: 2px solid #343B45;
    border-radius: 16px;
    
    background-color: #343B45;
    color: white;
    font-weight: bold;
    :hover {
        opacity: 35%;
        cursor: pointer;
    }


`
import styled from 'styled-components'

export const ContainerHomePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5,260px);
    gap: 8px;
    padding: 16px;
    flex-wrap: wrap;
    @media only screen and (max-width: 600px){
        grid-template-columns: 260px;
    }
`

export const ContaineCads = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    border-radius: 16px;

    h2{
        color: white;
    }

    #containerImg{
        padding: 8px;
    }

    #containerButtons{
        display: flex;
        margin-top: 8px;

        .buttons{
            padding: 8px;
            font-weight: bold;
            margin: 4px;
            border-radius: 16px;
        }
    }

`
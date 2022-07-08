import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 740px;
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 430px) {
        font-size: 90%;
        padding: 1rem 0;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0px 0px 10px #111;
    border-radius: 7px;
    padding: 1rem;

    .info-wrapper, .stats {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         width: 100%;
         gap: 2rem;
    }

    .stats {
        @media (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    h1 {
        text-transform: capitalize;
    }

    h2 {
        margin: 1rem 0;
    }
    .row {
        margin-bottom: 1rem;
        display: flex;
        /* justify-content: flex-start; */
        justify-content: space-between;
        gap: 1rem;
        border-bottom: solid 1px #888;
        padding-bottom: 0.5rem;
    }
    h4 {
        background-color: #333;
        padding: .1rem 1rem;
        border-radius: 4px;
    }
`

export const Rank = styled.div`
    background-color: var(--color-blue);
    padding: 0.3rem;
    border-radius: 7px;
    border: none;
    box-shadow: 0px 0px 2px var(--color-text);
    width: fit-content;
`
export const CoinInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    img{
        margin-right: 1rem;
        width: 50px;
    }
`
export const CoinPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Pdanger = styled.p`
    a {
        color: var(--color-blue);
    }
`
export const Table = styled.table`
    width: 100%;
    text-align: center;

    td, th {
        padding: 8px;

        @media (max-width: 700px){
            padding: 3px;
        }
    }
    td {
        @media (max-width: 700px){
            padding: 3px;
            font-size: 70%;
        }
    }

    th {
        background-color: #333;
    }
    
` 

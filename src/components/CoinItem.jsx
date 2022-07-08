import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #26272b;
    box-shadow: 0px 0px 10px #111;
    border-radius: 7px;
    margin: 2rem 2rem;
    padding: 1rem;  
    cursor: pointer;

    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.04);
        transition: all .2s ease-in-out;
    }
`
const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .3rem;
    img {
        width: 35px;
        height: 35px;
    }
`

function CoinItem(props) {
    const currencySign = {
        usd: '$',
        eur: '€',
        jpy: '¥'
    }
    return ( 
        <Wrapper>
            <p>{props.coin.market_cap_rank}</p>
            <ImgWrapper>
                <img src={props.coin.image}/>
                <p>{props.coin.symbol.toUpperCase()}</p>
            </ImgWrapper>
            <p>{currencySign[props.currency]}{props.coin.current_price.toLocaleString()}</p>
            {   
                (props.coin.price_change_percentage_24h.toFixed(2)) > 0 ? 
                <p className="positive">+{props.coin.price_change_percentage_24h.toFixed(2)}%</p> :
                <p className="negative">{props.coin.price_change_percentage_24h.toFixed(2)}%</p>
            }
            <p className="hide-mobile">{currencySign[props.currency]}{props.coin.total_volume.toLocaleString()}</p>
            <p className="hide-mobile">{currencySign[props.currency]}{props.coin.market_cap.toLocaleString()}</p>
        </Wrapper>
     );
}

export default CoinItem;
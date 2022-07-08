import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {Wrapper, Box, Rank, CoinInfo, CoinPrice, Pdanger, Table} from './Styles'

function Coin() {
    const [coin, setcoin] = useState({});

    const location = useLocation();
    const params = useParams()
    const URL = `https://api.coingecko.com/api/v3/coins/${params.CoinId}`

    useEffect(() => {
        axios.get(URL).then(({data})=>setcoin(data))
    }, []);

    const currencySign = {
        usd: '$',
        eur: '€',
        jpy: '¥'
    }

    return ( 
    <>
    { Object.keys(coin).length !== 0 &&<Wrapper>
        <Box>
            <h1>{coin.id}</h1>
        </Box>
        <Box>
            <div className='info-wrapper'>
                <div>
                    <Rank>
                        <span>Rank #{coin.market_cap_rank}</span>
                    </Rank>
                    <CoinInfo>
                        {coin.image && <img src={coin.image.small} />}
                        <p>{coin.name}/</p>
                        <p>{coin.symbol.toUpperCase()}</p>
                    </CoinInfo>
                </div>

                <CoinPrice>
                    <h1>{currencySign[location.state.currency]}{coin.market_data.current_price[location.state.currency].toLocaleString()}</h1>
                </CoinPrice>
            </div>
        </Box>
        <Box>
            <Table>
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>
                        <th>30d</th>
                        <th>1y</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {coin.market_data.price_change_percentage_1h_in_currency.usd > 0 ?
                            <td className='positive'>+{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(3)}%</td> :
                            <td className='negative'>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(3)}%</td>
                        }
                        {coin.market_data.price_change_percentage_24h_in_currency.usd > 0 ?
                            <td className='positive'>+{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(3)}%</td>:
                            <td className='negative'>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(3)}%</td>
                        }
                        {   coin.market_data.price_change_percentage_7d_in_currency.usd >0 ?
                            <td className='positive'>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(3)}%</td> :
                            <td className='negative'>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(3)}%</td>
                            }
                        {   coin.market_data.price_change_percentage_14d_in_currency.usd >0 ?
                            <td className='positive'>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(3)}%</td>:
                            <td className='negative'>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(3)}%</td>
                            }
                        {   coin.market_data.price_change_percentage_30d_in_currency.usd > 0?
                            <td className='positive'>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(3)}%</td> :
                            <td className='negative'>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(3)}%</td>
                            }
                        {   coin.market_data.price_change_percentage_1y_in_currency.usd > 0?
                            <td className='positive'>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(3)}%</td> :
                            <td className='negative'>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(3)}%</td>
                            }
                    </tr>
                </tbody>
            </Table>
        </Box>
        <Box>
            <div className='stats'>
                <div>
                    <div className='row'>
                        <h4>24 Hour Low</h4>
                        <p>{currencySign[location.state.currency]}{coin.market_data.low_24h[location.state.currency].toLocaleString()}</p>
                    </div>
                    <div className='row'>
                        <h4>24 Hour High</h4>
                        <p>{currencySign[location.state.currency]}{coin.market_data.high_24h[location.state.currency].toLocaleString()}</p>
                    </div>
                </div>
                <div >
                <div className='row'>
                        <h4>Market Cap</h4>
                        <p>{currencySign[location.state.currency]}{coin.market_data.market_cap[location.state.currency].toLocaleString()}</p>
                    </div>
                    <div className='row'>
                        <h4>Circulating Supply</h4>
                        <p>{coin.market_data.circulating_supply.toFixed(3)}</p>
                    </div>
                </div>
            </div>
        </Box>
        <Box>
            <h2>About</h2>
            <Pdanger dangerouslySetInnerHTML={{
                __html: coin.description.en
            }}/> 
        </Box>
    </Wrapper>}
    </>
     );
}

export default Coin;
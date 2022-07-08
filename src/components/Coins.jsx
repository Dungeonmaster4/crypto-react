import { Link } from "react-router-dom";
import Coin from "../Pages/Coin";
import CoinItem from "./CoinItem";
import {Wrapper, Heading, FaCaretDownT, Input, PrettySelect, ControlWrapper, MoreButton, Span} from './Styles'
import React, { useState, useEffect } from 'react';

function Coins({
    filteredCoins,
    filter,
    setfilter,
    currency, 
    setCurrency,
    setfilteredCoins
}) {
    const [sortBy, setsortBy] = useState('asc');
    const [perPage, setperPage] = useState(10);
    
    const options = [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EURO' },
        { value: 'jpy', label: 'JPY' }
      ]

    const handleChange = (e) => {
        setfilter(e.target.value.toLowerCase())
    }

    const sortObj = {
        rank: 'market_cap_rank',
        name: 'name',
        price: 'current_price',
        priceChange: 'price_change_percentage_24h',
        volume: 'total_volume',
        market_cap: 'market_cap'

    }
    const sort = (how) => {
        let sorted =[...filteredCoins]

        if(how==='name') {
            if (sortBy === 'asc') {
                sorted = sorted.sort((a,b) => b[how].localeCompare(a[how]))
            } else {
                sorted = sorted.sort((a,b) => a[how].localeCompare(b[how]))
            }
        } else if (sortBy ==='asc'){
            sorted = sorted.sort((a,b) => b[how] - a[how])
        } else {
            sorted = sorted.sort((a,b) => a[how] - b[how])
        }

        setfilteredCoins(sorted)
        sortBy === 'asc' ? setsortBy('desc') : setsortBy('asc' )
     }
    
    const [selectedCurrency, setselectedCurrency] = useState({value: currency, label: currency.toUpperCase()}); 
    
    useEffect(() => {
        setCurrency(selectedCurrency.value)
    }, [selectedCurrency]);

    return ( 
        <Wrapper>
            <ControlWrapper>
                <PrettySelect 
                    options={options}
                    onChange={setselectedCurrency}
                    defaultValue={currency}
                    value={selectedCurrency}
                    isSearchable={false}   
                />
                <Input 
                    type='text' 
                    value={filter} 
                    onChange={handleChange} 
                    placeholder='Search...'
                    />
            </ControlWrapper>
            <div>   
                <Span>*click any crypto for details</Span>
                <Heading>
                    <p onClick={() => sort(sortObj.rank)}>#<FaCaretDownT /></p>
                    <p onClick={() => sort(sortObj.name)}>Coin<FaCaretDownT /></p>
                    <p onClick={() => sort(sortObj.price)}>Price<FaCaretDownT /></p>
                    <p onClick={() => sort(sortObj.priceChange)}>24h<FaCaretDownT /></p>
                    <p onClick={() => sort(sortObj.volume)} className="hide-mobile">Volume<FaCaretDownT /></p>
                    <p onClick={() => sort(sortObj.market_cap)} className="hide-mobile">Market Cap<FaCaretDownT /></p>
                </Heading>

                {
                    filteredCoins.slice(0, perPage).map(coin => {
                            return (
                                <Link 
                                key={coin.id} 
                                to={`/coins/${coin.id}`} 
                                element={<Coin />}
                                state={{currency: currency}}
                                >
                                <CoinItem  coin={coin} currency={currency}/>
                            </Link>
                            )
                    })
                }
            </div>  
            {filteredCoins.length > perPage && <MoreButton onClick={() => setperPage(prev=> prev + 10)}> Show More</MoreButton>}
        </Wrapper>
     );
}

export default Coins;
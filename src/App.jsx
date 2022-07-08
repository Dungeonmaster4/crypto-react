import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Coins from './components/Coins';
import Navbar from './components/Navbar';


import {Routes, Route} from 'react-router-dom'
import Coin from './Pages/Coin';

function App() {
  
  const [coins, setcoins] = useState([]);
  const [filter, setfilter] = useState('');
  const [filteredCoins, setfilteredCoins] = useState([]);
  const [currency, setCurrency] = useState('usd');

  // console.log('not filtere',coins);
  // console.log('filtered ', filteredCoins);

  useEffect(() => {
    if(!filteredCoins.length) {
      setfilteredCoins(coins)
    } else {
      let newFilteredCoins = []
      filteredCoins.map(filteredCoin =>{
          coins.map(coin =>{
          if (coin.id === filteredCoin.id) {
            newFilteredCoins.push(coin)
          }
        })
      })
      setfilteredCoins(newFilteredCoins)
      newFilteredCoins=[]
    }
  }, [coins]);
  

  useEffect(() => {
    let data = [...coins]
    if (filter.length) data = data.filter(e => e.id.includes(filter) || e.symbol.includes(filter))
    setfilteredCoins(data)
  }, [filter]);
  

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: currency,
        order: 'market_cap_desc',
        per_page: 250,
        page: 1,
        sparkline: false
      }
    })
    .then(({data})=>setcoins(data)).catch(error=>console.error(error))  
  }, [currency]);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Coins 
            filteredCoins={filteredCoins} 
            filter={filter} 
            setfilter={setfilter}
            currency={currency} 
            setCurrency={setCurrency}
            setfilteredCoins={setfilteredCoins}
            />
          }/>
        <Route path='/coins' element={<Coin />}> 
          <Route path=":CoinId" element={<Coin />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

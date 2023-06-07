import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import CoinDetay from './components/coinDetay/CoinDetay'
import Home from './components/home/Home'
import News from './components/news/News';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:coindetayId' element={<CoinDetay/>}></Route>
        <Route path='/news' element={<News/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

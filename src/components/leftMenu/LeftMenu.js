import React from 'react'
import './LeftMenu.scss'
import Cryptoverse from '../../ımages/Cryptoverse.png'
import { Link , useNavigate } from "react-router-dom";

const LeftMenu = () => {
    const navigate = useNavigate();

    const handleLinkClick = () => {
      navigate(`/news`);
    };
  
  return (
    <div className='leftMenu'>
    <div className='leftMenuLogo'>
    <img src={Cryptoverse}/>
     <h2>Cryptoverse</h2>
    </div>
    <div className='leftMenuLink'>
     <Link to="/">Home</Link>
     <Link to="/cryptocurrencies">Cryptocurrencies</Link>
     <Link to="/exchange">Exchange</Link>
     <Link to="/news">News</Link>
    </div>
   </div>
  )
}

export default LeftMenu
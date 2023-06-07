import React from 'react'
import {useSelector  } from 'react-redux'
import './CoinDetay.scss'

const CoinDetay = () => {
  const { selectedDatas } = useSelector((state) => state.data);
  return (
    <div className='coinDetay' >
     <p>{selectedDatas[0]?.name}</p>
     <p>{selectedDatas[0]?.symbol}</p>
     <img src={selectedDatas[0]?.iconUrl}/>
    </div>
  )
}

export default CoinDetay
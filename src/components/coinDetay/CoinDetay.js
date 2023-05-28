import React from 'react'
import {useSelector  } from 'react-redux'

const CoinDetay = () => {
  const { selectedDatas } = useSelector((state) => state.data);
  return (
    <div className='coinDetay' >
     <p>{selectedDatas[0]?.name}</p>
     <p>{selectedDatas[0]?.email}</p>
    </div>
  )
}

export default CoinDetay
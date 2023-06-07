import React from 'react'
import { Table } from 'antd';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData , handleFocus } from '../../dataSlice';


const Main = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate();

  useEffect(() =>{
    dispatch(fetchData())
  },[dispatch]) 

  const datas = useSelector((state) => state.data.datas)
  const isLoading = useSelector((state) => state.data.isLoading)
  const error = useSelector((state) => state.data.error)


  const handleClick = (el) => {
    dispatch(handleFocus(el))
    navigate(`/coindetay`)
  }


  const columns = [
    {
      title: 'RowHead',
      dataIndex: 'uuid',
      rowScope: 'row',
    },
    {
      title: 'Coin Icon Image',
      dataIndex: 'iconUrl',
      render: (iconUrl) => (
        <img src={iconUrl} alt="Icon" style={{ width: 30, height: 30 }} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol'
    },
    {
      title: 'CoinDetay',
      dataIndex: 'link',
      render: (_, record) => (
        <p onClick={() => handleClick(record)}>Coin Detay</p>
      )
    }
  ];

  return (
    <div className='main'>  
      <Table columns={columns} dataSource={datas} bordered /> 
    </div>
  )
}

export default Main
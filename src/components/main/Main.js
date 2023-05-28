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
  console.log(datas)

  const handleClick = (el) => {
    dispatch(handleFocus(el))
    navigate(`/coindetay`)
  }


  const columns = [
    {
      title: 'RowHead',
      dataIndex: 'id',
      rowScope: 'row',
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email'
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
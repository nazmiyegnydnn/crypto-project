import React from 'react'
import LeftMenu from '../leftMenu/LeftMenu'
import './News.scss'
import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { fetchNews  } from '../../newsSlice';

const News = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchNews('https://api.example.com/news'))
  },[dispatch]) 


  
  const newsData = useSelector((state) => state.news.newsData)
  const isLoading = useSelector((state) => state.news.isLoading)
  const error = useSelector((state) => state.news.error)
  console.log(newsData)



  return (
    <div className='news'>
      <LeftMenu></LeftMenu>
      <div className='newsTitle'>
      <div><h1>COİNS NEWS</h1></div>
      <div className='newsMenu'>
      { 
        newsData.map((item, index) => (
          <div className='newsCard' key={item.index}>
            <h4>{item._type}</h4>
            <img src={item.contentUrl} />
            <p>{item.name}</p>
            
            </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default News
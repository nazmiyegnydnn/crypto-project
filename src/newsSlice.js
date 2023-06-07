import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const getNews = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {
    safeSearch: 'Off',
    textFormat: 'Raw'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '71bce517ddmshb29fe81cc98c1dbp110291jsn03ddfbf9a45a',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

const initialState = {
    newsData:[],
    isLoading : false,
    error:null,
}
  
export const fetchNews = createAsyncThunk("news/fetchNews" ,async() =>{
    const response = await axios.request(getNews);    
    console.log(response)
    const news = response.data.value;
    return news;
})

export const newsSlice =  createSlice({ 
    name: 'news',  
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) =>{ 
            state.isLoading = true
    })
        builder.addCase(fetchNews.fulfilled, (state , action) =>{
          // console.log(action)
            state.newsData = action.payload
            state.isLoading = false
    })
        builder.addCase(fetchNews.rejected, (state, action) =>{ 
            state.error = action.error.message
            state.isLoading = false

    })
    }
  })

  export const {} = newsSlice.actions 

  export default newsSlice.reducer  

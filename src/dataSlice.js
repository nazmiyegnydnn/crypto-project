import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

const getCoinsOptions = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '20',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '71bce517ddmshb29fe81cc98c1dbp110291jsn03ddfbf9a45a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

const initialState = {
    datas: [],
    selectedDatas: [],
    isLoading : false,
    error:null,
}

export const fetchData = createAsyncThunk("fetchContent" ,async() =>{
    const response = await axios.request(getCoinsOptions)
    const data = await response.data.data.coins
    return data 
})


  

  export const dataSlice =  createSlice({ 
    name:"data",
    initialState,
    reducers:{
        handleFocus : (state , action) => {
            // console.log(action)
            const dataFilter = state.datas?.filter((el) => el.uuid === action.payload.uuid);
            state.selectedDatas = dataFilter
         }
        },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) =>{ 
            state.isLoading = true
    })
        builder.addCase(fetchData.fulfilled, (state , action) =>{
            state.datas = action.payload
            state.isLoading = false
    })
        builder.addCase(fetchData.rejected, (state, action) =>{ 
            state.error = action.error.message
            state.isLoading = false

    })
    }
  })
  export const {handleFocus} = dataSlice.actions
  export default dataSlice.reducer 
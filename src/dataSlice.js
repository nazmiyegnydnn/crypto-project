import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'


const initialState = {
    datas: [],
    selectedDatas: [],
    isLoading : false,
    error:null,
}

export const fetchData = createAsyncThunk("fetchContent" ,async() =>{
    const res = await axios ("https://jsonplaceholder.typicode.com/users")  
    const data = await res.data
    return data 
})
  

  export const dataSlice =  createSlice({ 
    name:"data",
    initialState,
    reducers:{
        handleFocus : (state , action) => {
            console.log(action)
            const dataFilter = state.datas?.filter((el) => +el.id === +action.payload.id);
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
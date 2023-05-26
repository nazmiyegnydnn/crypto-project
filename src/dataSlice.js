import { createSlice } from '@reduxjs/toolkit' 

const initialState = { //dizimiz depomuz burada
    product: [
        {
            id:1,
            name: "tolga"
        },
        {
            id:2,
            name: "tolga"
        }
    ],
}
  

  export const dataSlice =  createSlice({ 
    name: 'data',  
    initialState,
    reducers: {
    
        
    }
  })

  export const { } = dataSlice.actions 

  export default dataSlice.reducer 
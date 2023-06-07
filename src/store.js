import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import newsSlice from './newsSlice'

export const store = configureStore({
  reducer: {
    data: dataSlice,
    news: newsSlice
  }
})  
import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slices/modalSlice'
import loaderSlice from './slices/loaderSlice'


export default configureStore({
  reducer: {
    modalSlice: modalSlice,
    loaderSlice: loaderSlice,
  }
})
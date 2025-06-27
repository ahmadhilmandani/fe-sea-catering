import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slices/modalSlice'
import loaderSlice from './slices/loaderSlice'
import authSlice  from './slices/authSlice'


export default configureStore({
  reducer: {
    modalSlice: modalSlice,
    loaderSlice: loaderSlice,
    authSlice: authSlice
  }
})
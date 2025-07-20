import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slices/modalSlice'
import loaderSlice from './slices/loaderSlice'
import authSlice  from './slices/authSlice'
import openSidebarSlice  from './slices/openSidebarSlice'

export default configureStore({
  reducer: {
    modalSlice: modalSlice,
    loaderSlice: loaderSlice,
    authSlice: authSlice,
    openSidebarSlice: openSidebarSlice
  }
})
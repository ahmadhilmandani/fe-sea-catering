import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
      userInfo: false
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    }
  }
})

export const { setUserInfo } = authSlice.actions
export default authSlice.reducer
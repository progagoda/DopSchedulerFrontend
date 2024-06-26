import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import { TLoginSchemaArgs } from '../types/loginSchema';


const initialState: TLoginSchemaArgs = {
}

export const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>)=> {
        state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>)=> {
        state.password = action.payload
    },
    setRemember: (state, action: PayloadAction<boolean>)=> {
      state.remember = action.payload
    }
  },
})

export const {actions: loginActions, reducer: loginReducer } = loginSlice;

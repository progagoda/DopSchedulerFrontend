import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { consts } from '@shared/configs';

import { TUser, TUserScheme } from '../types/user';


const initialState: TUserScheme = {
}
const {localStorageConst} = consts;
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, {payload: user}: PayloadAction<TUser>) => {
       localStorage.setItem(localStorageConst.USER_LOCAL_STORAGE_KEY,JSON.stringify(user))
       state.authData = user
    },
    logout: (state)=> {
      localStorage.removeItem(localStorageConst.USER_LOCAL_STORAGE_KEY)
      state.authData = undefined
   },
  }
})

export const {actions: userActions, reducer: userReducer } = userSlice;

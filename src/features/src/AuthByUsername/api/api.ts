import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { consts } from '@shared/configs'
import { BACK_URL } from 'src/shared/configs/src/const/const'

import { TLoginSchemaApi,TLoginSchemaArgs } from '../model/types'
const {localStorageConst} = consts

export const loginFormApi = createApi({
  reducerPath: 'loginFormApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BACK_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const authData = localStorage.getItem(localStorageConst.USER_LOCAL_STORAGE_KEY)
      const token = authData ? JSON.parse(authData).token : null;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<TLoginSchemaApi, TLoginSchemaArgs>({
      query: (args) => ({
        url: 'auth/login',
        body: args,
        method: 'POST'
      }),
    }),
    checkAuth: builder.query<void,void>({
      query: () => ({url: 'auth/login'}),
    }),
    changeFullName: builder.mutation<void, {fullname: string}>({
      query: (args) => ({
        url: 'users/fullname',
        body: args,
        method: 'POST'
      }),
    }),
  }),
})
export const {useLoginMutation, useCheckAuthQuery, useChangeFullNameMutation} = loginFormApi
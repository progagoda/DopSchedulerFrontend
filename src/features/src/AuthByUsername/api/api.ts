import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { consts } from '@shared/configs'

import { TLoginSchema, TLoginSchemaApi } from '../model/types'
const {localStorageConst} = consts

export const loginFormApi = createApi({
  reducerPath: 'loginFormApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000',
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
    login: builder.mutation<TLoginSchemaApi, TLoginSchema>({
      query: (args) => ({
        url: '/login',
        body: args,
        method: 'POST'
      }),
    }),
    checkAuth: builder.query<void,void>({
      query: () => ({url: '/login'}),
    }),
  }),
})
export const {useLoginMutation, useCheckAuthQuery} = loginFormApi
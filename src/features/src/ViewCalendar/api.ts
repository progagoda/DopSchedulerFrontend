import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { consts } from '@shared/configs'

import { TCalendarSchemeApi, TCalendarSchemeArgs } from './model/types'
const {localStorageConst} = consts

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000',
    prepareHeaders: (headers, { getState }) => {
      const authData = localStorage.getItem(localStorageConst.USER_LOCAL_STORAGE_KEY)
      const token = authData ? JSON.parse(authData).token : null;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers;
    },
  }),
  endpoints: (builder) => ({
    allLessons: builder.query<TCalendarSchemeApi, TCalendarSchemeArgs>({
      query: ({userId}) => ({
        url: `/lessons/${userId}`,
      }),
      transformResponse:(data: TCalendarSchemeApi)=> data
    }),
  }),
})
export const { useAllLessonsQuery} = calendarApi
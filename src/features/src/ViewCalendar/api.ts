import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { consts } from '@shared/configs'
import { BACK_URL } from 'src/shared/configs/src/const/const'

import { TCalendarSchemeApi } from './model/types'
const {localStorageConst} = consts

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BACK_URL}/lesson`,
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
    allLessons: builder.query<TCalendarSchemeApi, void>({
      query: () => ({
        url: `/all`,
      }),
    }),
  }),
})
export const { useAllLessonsQuery} = calendarApi
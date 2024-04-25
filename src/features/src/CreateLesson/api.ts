import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { consts } from '@shared/configs'
import { BACK_URL } from 'src/shared/configs/src/const/const'

import { TApiDisabledStartTime, TApiGroup, TCheckFreeDateArgs, TGroup } from './model/types'

const {localStorageConst} = consts

export const createLessonApi = createApi({
  reducerPath: 'createLessonApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BACK_URL}`,
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
    getAllGroup: builder.query<TGroup[], void>({
      query:()=>({url:'group/all' }),
      transformResponse: (groups: TApiGroup[]): TGroup[] => groups.map(group => ({
        label: group.name,
        value: group.id
      }))
    }),
    getFreeTime: builder.mutation<TApiDisabledStartTime, TCheckFreeDateArgs>({
        query:(args)=>({
            method: 'POST',
            body: args,
            url:'lesson/disabled-start-time'
         }),
      })
  }),
})

export const {useGetAllGroupQuery, useGetFreeTimeMutation } = createLessonApi
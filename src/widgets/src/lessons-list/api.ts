import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { consts } from '@shared/configs'

import {  TLessonListSchemeApi,TLessonListSchemeArgs } from './model/types'
const {localStorageConst} = consts

export const lessonsListApi = createApi({
  reducerPath: 'lessonsListApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/lessons',
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
    lessons: builder.query<TLessonListSchemeApi, TLessonListSchemeArgs>({
      query: ({day}) => ({
        url: `/${day}`,
      }),
    }),
  }),
})

export const { useLazyLessonsQuery } = lessonsListApi;
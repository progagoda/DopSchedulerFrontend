import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { consts } from '@shared/configs'

import {  TLessonCardSchemeArgs, TLessonListSchemeApi, TLessonListSchemeArgs } from './model/types'
const {localStorageConst} = consts

export const lessonCardApi = createApi({
  reducerPath: 'lessonCardApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/lesson',
    prepareHeaders: (headers, { getState }) => {
      const authData = localStorage.getItem(localStorageConst.USER_LOCAL_STORAGE_KEY)
      const token = authData ? JSON.parse(authData).token : null;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers;
    },
  }),
  tagTypes: ['Lessons'],
  endpoints: (builder) => ({
    allLessonsByDay: builder.query<TLessonListSchemeApi, TLessonListSchemeArgs>({
      query: ({date}) => ({
        url: `/${date}`,
      }),
      providesTags: ['Lessons'],
    }),

    deleteLesson: builder.mutation<void, TLessonCardSchemeArgs>({
      query: ({lessonId}) => ({
        method: 'DELETE',
        url: `/${lessonId}`,
      }),
      invalidatesTags: ['Lessons']
    }),
  }),
})

export const { useDeleteLessonMutation, useAllLessonsByDayQuery } = lessonCardApi
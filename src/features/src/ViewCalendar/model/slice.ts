import { TDay } from '@entities'
import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import { TDayScheme } from './types'


const initialState: TDayScheme= {
}

export const daySlice = createSlice({
  name: 'daySlice',
  initialState,
  reducers: {
    setCurrentDay: (state, {payload: day}: PayloadAction<TDay>)=> {
        state.date = day.date
        state.id = day.id;
        state.lessons = day.lessons
    },
  },
})

export const {actions: dayActions, reducer: dayReducer } = daySlice;
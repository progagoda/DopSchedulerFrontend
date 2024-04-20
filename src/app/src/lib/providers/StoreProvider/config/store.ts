import { userReducer } from '@entities'
import { calendarApi, dayReducer, lessonCardApi, loginFormApi } from '@features'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { lessonsListApi } from '@widgets'

import { StateScheme } from './StateScheme'

export function createReduxStore(initialState?: StateScheme){
    const rootReducers: ReducersMapObject<StateScheme>={
      user: userReducer,
      day: dayReducer,
      [loginFormApi.reducerPath]: loginFormApi.reducer,
      [calendarApi.reducerPath]: calendarApi.reducer,
      [lessonCardApi.reducerPath]: lessonCardApi.reducer,
      [lessonsListApi.reducerPath]: lessonsListApi.reducer,
    }
    
return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(
            loginFormApi.middleware, 
            calendarApi.middleware, 
            lessonCardApi.middleware,
            lessonsListApi.middleware
          ),
      })
}

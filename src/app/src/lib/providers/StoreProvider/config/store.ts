import { userReducer } from '@entities'
import { loginFormApi } from '@features'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { StateScheme } from './StateScheme'

export function createReduxStore(initialState?: StateScheme){
    const rootReducers: ReducersMapObject<StateScheme>={
      user: userReducer,
      [loginFormApi.reducerPath]: loginFormApi.reducer,
    }
    
return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(loginFormApi.middleware),
      })
}

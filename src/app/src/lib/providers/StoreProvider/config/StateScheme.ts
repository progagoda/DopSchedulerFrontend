/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUserScheme} from '@entities'
import { calendarApi, loginFormApi,TDayScheme } from "@features";

export interface StateScheme {
    user: TUserScheme;
    day: TDayScheme;
    [loginFormApi.reducerPath]: any;
    [calendarApi.reducerPath]: any;
}
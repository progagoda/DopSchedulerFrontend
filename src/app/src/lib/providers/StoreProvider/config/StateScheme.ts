/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUserScheme} from '@entities'
import { calendarApi, lessonCardApi, loginFormApi,TDayScheme } from "@features";
import { lessonsListApi } from '@widgets';

export interface StateScheme {
    user: TUserScheme;
    day: TDayScheme;
    [loginFormApi.reducerPath]: any;
    [calendarApi.reducerPath]: any;
    [lessonCardApi.reducerPath]: any;
    [lessonsListApi.reducerPath]: any;
}
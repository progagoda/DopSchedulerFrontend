/* eslint-disable @typescript-eslint/no-explicit-any */
import {TUserScheme} from '@entities'
import { loginFormApi } from "@features";

export interface StateScheme {
    user: TUserScheme;
    [loginFormApi.reducerPath]: any;
}
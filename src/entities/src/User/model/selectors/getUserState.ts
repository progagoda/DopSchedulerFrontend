import { TUserScheme } from "../types/user";

export const getUserStateSelector = (state:{user:TUserScheme}) => state.user.authData

export const getUserIdSelector = (state: { user: TUserScheme }) => state.user.authData?.id;
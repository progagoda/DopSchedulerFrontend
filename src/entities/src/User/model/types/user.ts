export type TUser = {
    id: string;
    username: string;
    token: string
}
export type TUserScheme = {
    authData?: TUser;
}
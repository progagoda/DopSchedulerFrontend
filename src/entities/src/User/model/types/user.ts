export type TUser = {
    id: string;
    username: string;
    fullname: string;
    token: string
}
export type TUserScheme = {
    authData?: TUser;
}
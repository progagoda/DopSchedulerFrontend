import { TLoginSchema } from "../../types/loginSchema";

export const getLoginStateSelector = (state: { loginForm: TLoginSchema }) => state.loginForm;